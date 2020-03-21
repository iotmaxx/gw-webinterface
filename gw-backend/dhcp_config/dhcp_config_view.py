# -*- coding:utf-8 -*-
# @Script: dhcp_config_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 14:30:29
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 14:32:06
# @Description: Logic related to dhcp configuration.

from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

dhcp_config_route = Blueprint('dhcp_config', __name__)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'domainName', methods = ['POST'])
@jwt_required
def set_domain_name():
    request_data = request.get_json()
    if not 'domainName' in request_data:
        abort(400)
    resp = {'domainName': request_data.get('domainName')}
    return jsonify(resp)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'beginIpRange', methods = ['POST'])
@jwt_required
def set_begin_ip_range():
    request_data = request.get_json()
    if not 'beginIpRange' in request_data:
        abort(400)
    resp = {'beginIpRange': request_data.get('beginIpRange')}
    return jsonify(resp)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'endIpRange', methods = ['POST'])
@jwt_required
def set_begin_mac_range():
    request_data = request.get_json()
    if not 'endIpRange' in request_data:
        abort(400)
    resp = {'endIpRange': request_data.get('endIpRange')}
    return jsonify(resp)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'leaseTime', methods = ['POST'])
@jwt_required
def set_lease_time():
    request_data = request.get_json()
    if not 'leaseTime' in request_data:
        abort(400)
    resp = {'leaseTime': request_data.get('leaseTime')}
    return jsonify(resp)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'clientMacAddress', methods = ['POST'])
@jwt_required
def set_client_mac_address():
    request_data = request.get_json()
    if not 'clientMacAddress' in request_data:
        abort(400)
    resp = {'clientMacAddress': request_data.get('clientMacAddress')}
    return jsonify(resp)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'clientIpAddress', methods = ['POST'])
@jwt_required
def set_client_ip_address():
    request_data = request.get_json()
    if not 'clientIpAddress' in request_data:
        abort(400)
    resp = {'clientIpAddress': request_data.get('clientIpAddress')}
    return jsonify(resp)