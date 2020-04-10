# -*- coding:utf-8 -*-
# @Script: local_network_config_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 14:26:14
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-04-10 16:19:23
# @Description: Logic related to local network configuration.

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from gw_backend.config.constants import API_PATH

from gw_cli import change_hostname, change_mtu, change_ipv4

from .constants import PATH_SUFFIX
from .utils import find_file_content, replace_in_file, get_net_information, update_env_file

local_network_route = Blueprint('local_network', __name__)


@local_network_route.route(API_PATH + PATH_SUFFIX + 'hostname', methods=['POST'])
@jwt_required
def post_hostname():
    request_data = request.get_json()
    if not 'hostname' in request_data:
        abort(400)
    hostname = request_data.get('hostname')
    cli_response = change_hostname(hostname)
    if cli_response.returncode == 0:
        return jsonify(hostname=hostname)
    else:
        abort(503)


@local_network_route.route(API_PATH + PATH_SUFFIX + 'mtu', methods=['POST'])
@jwt_required
def post_mtu():
    request_data = request.get_json()
    if not 'mtu' in request_data:
        abort(400)
    mtu = request_data.get('mtu')
    mtu_response = change_mtu(mtu)
    if clu_response.returncode == 0:
        return jsonify(mtu=mtu)
    else:
        abort(503)


@local_network_route.route(API_PATH + PATH_SUFFIX + 'address', methods=['POST', 'GET'])
@jwt_required
def post_ip():
    if request.method == 'GET':
        net_info = get_net_information()
        if net_info is not None:
            return jsonify(net_info)
        else:
            return abort(503)
    else:
        request_data = request.get_json()
        if not 'ipAddress' in request_data\
                or not 'subnetMask' in request_data\
                or not 'oldAddress' in request_data:
            abort(400)
        ip_address = request_data.get('ipAddress')
        old_address = request_data.get('oldAddress')
        subnet_mask = request_data.get('subnetMask')
        address_response = change_ipv4(ip_address, subnet_mask)
        if address_response.returncode != 0:
            abort(503)
        if old_address and len(old_address) > 1:
            search_address = f'http://{old_address}'
            replace_address = f'http://{ip_address}'
            file = find_file_content(search_address)
            if file is not None:
                replace_in_file(file, search_string, replace_address)
            update_env_file(ip_address)
        return jsonify(
            ipAddress = ip_address,
            subnetMask = subnet_mask
        )
