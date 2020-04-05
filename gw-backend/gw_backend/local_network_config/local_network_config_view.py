# -*- coding:utf-8 -*-
# @Script: local_network_config_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 14:26:14
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-04-05 20:58:46
# @Description: Logic related to local network configuration.

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from gw_backend.config.constants import API_PATH

from gw_cli import change_hostname, change_mtu, change_ipv4

from .constants import PATH_SUFFIX


local_network_route = Blueprint('local_network', __name__)


@local_network_route.route(API_PATH + PATH_SUFFIX + 'hostname', methods=['POST'])
@jwt_required
def post_hostname():
    request_data = request.get_json()
    if not 'hostname' in request_data:
        abort(400)
    r = change_hostname(request_data.get('hostname'))
    resp = {'message': 'Success'}
    return jsonify(resp)


@local_network_route.route(API_PATH + PATH_SUFFIX + 'mtu', methods=['POST'])
@jwt_required
def post_mtu():
    request_data = request.get_json()
    if not 'mtu' in request_data:
        abort(400)
    change_mtu(request_data.get('mtu'))
    resp = {'message': 'Success'}
    return jsonify(resp)


@local_network_route.route(API_PATH + PATH_SUFFIX + 'address', methods=['POST'])
@jwt_required
def post_ip():
    request_data = request.get_json()
    if not 'ipAddress' in request_data or not 'subnetMask' in request_data:
        abort(400)
    change_ipv4(request_data.get('ipAddress', request_data.get('subnetMask')))
    resp = {'message': 'Success'}
    return jsonify(resp)
