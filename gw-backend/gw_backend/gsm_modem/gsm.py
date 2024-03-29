# -*- coding:utf-8 -*-
# @Script: gsm.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-08-07 11:02:53
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-11-18 13:24:02
# @Description: Blueprint for gsm modem routes.

import re
import subprocess
import yaml

from flask import Blueprint, request, jsonify, abort
from flask_jwt_extended import jwt_required

from gw_cli import set_modem

from gw_backend.config.constants import API_PATH

from .constants import PATH_SUFFIX


DELIMITER_REX = '[-]{2,36}'
COLOR_ENCODING_REX = '\\x1b\\[\d+m'
gsm_modem_route = Blueprint('gsm', __name__)


def modem_data():
    data = {}
    try:
        result = subprocess.run(
            ['mmcli', '-m', '0'],
            capture_output=True,
            check=True
        )
    except Exception:
        return data

    result_stdout = result.stdout.decode()
    spans = [m.span() for m in re.finditer(DELIMITER_REX, result_stdout)]
    pointers = [(spans[i][1], spans[i+1][0]) for i in range(len(spans)-1)]
    pointers.append((spans[-1][1], len(result_stdout)))

    for pair in pointers:
        clean_result = result_stdout[pair[0]:pair[1]
                                     ].replace('\n', '').replace(' ', '')
        result_parts = clean_result.split('|')
        data_parts = {}
        last_key = None
        for i in range(1, len(result_parts)):
            value = result_parts[i].split(':')
            if len(value) == 1:
                data_parts[last_key] = value[0]
                continue
            last_key = value[0]
            data_parts[value[0]] = value[1]
        data[result_parts[0]] = data_parts

    for parent_key in data.keys():
        for child_key in data[parent_key]:
            color_encoding = re.findall(
                COLOR_ENCODING_REX, data[parent_key][child_key])
            if len(color_encoding) == 2:
                cleared_value = data[parent_key][child_key].replace(
                    color_encoding[0], '').replace(color_encoding[1], '')
                data[parent_key][child_key] = cleared_value
            if data[parent_key][child_key].find(',') != -1:
                new_data = data[parent_key][child_key].split(',')
                data[parent_key][child_key] = new_data
    for number_key in ['3GPP', '3GPPEPS']:
        if number_key in data:
            new_key = number_key[1:]
            data[new_key] = data.pop(number_key)
    return data


def modem_credentials(yaml_path='yaml_template.yml'):
    with open(yaml_path, 'r') as yaml_file:
        config = yaml.safe_load(yaml_file)
    if config:
        return config.get('modem')
    else:
        return None


@gsm_modem_route.route(API_PATH + PATH_SUFFIX + 'modem', methods=['GET', 'POST'])
@jwt_required
def modem():
    if request.method == 'GET':
        data = modem_data()
        return jsonify(data)
    else:
        request_data = request.get_json()
        con_name = request_data.get('conName', 'mobile')
        operator_apn = request_data.get('operatorApn', 'internet')
        pin = request_data.get('pin', None)
        user = request_data.get('username', None)
        password = request_data.get('password', None)
        response = set_modem(
            con_name=con_name,
            operator_apn=operator_apn,
            pin=pin,
            user=user,
            password=password
        )
        if response.returncode == 0:
            return jsonify(success=True)
        else:
            return abort(503)


@gsm_modem_route.route(API_PATH + PATH_SUFFIX + 'modem/credentials', methods=['GET'])
@jwt_required
def modem_credentials():
    data = modem_credentials()
    return jsonify(data)
