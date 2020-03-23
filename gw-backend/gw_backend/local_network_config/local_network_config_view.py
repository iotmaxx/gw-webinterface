# -*- coding:utf-8 -*-
# @Script: local_network_config_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 14:26:14
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-24 02:04:23
# @Description: Logic related to local network configuration.

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from gw_backend.config.constants import API_PATH

from .constants import PATH_SUFFIX

local_network_route = Blueprint('local_network', __name__)

@local_network_route.route(API_PATH + PATH_SUFFIX + 'hostname', methods = ['POST'])
@jwt_required
def set_hostname():
    request_data = request.get_json()
    if not 'hostname' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)

@local_network_route.route(API_PATH + PATH_SUFFIX + 'mtu', methods = ['POST'])
@jwt_required
def set_mtu():
    request_data = request.get_json()
    if not 'mtu' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)

@local_network_route.route(API_PATH + PATH_SUFFIX + 'subnetmask', methods = ['POST'])
@jwt_required
def set_subnetmask():
    request_data = request.get_json()
    if not 'subnet_mask' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)

@local_network_route.route(API_PATH + PATH_SUFFIX + 'ipAddress', methods = ['POST'])
@jwt_required
def set_ip():
    request_data = request.get_json()
    if not 'ip_address' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)