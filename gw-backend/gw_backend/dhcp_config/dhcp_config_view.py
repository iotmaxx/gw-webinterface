# -*- coding:utf-8 -*-
# @Script: dhcp_config_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 14:30:29
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-29 22:09:07
# @Description: Logic related to dhcp configuration.

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from gw_backend.config.constants import API_PATH

from .constants import PATH_SUFFIX

try:
    from gw_cli import get_dhcp_server_config, set_dhcp_server
    cli_available = True
except ModuleNotFoundError:
    cli_available = False
except ImportError:
    cli_available = False


dhcp_config_route = Blueprint('dhcp_config', __name__)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'domainName', methods = ['POST'])
@jwt_required
def post_domain_name():
    if not cli_available:
        abort(501)
    request_data = request.get_json()
    config = get_dhcp_server_config()
    if not 'domainName' in request_data:
        abort(400)
    if not config:
        abort(400)
    set_dhcp_server(request_data.get('domainName'), config[0], config[1], config[2])
    resp = {'domainName': request_data.get('domainName')}
    return jsonify(resp)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'beginIpRange', methods = ['POST'])
@jwt_required
def post_begin_ip_range():
    if not cli_available:
        abort(501)
    request_data = request.get_json()
    config = get_dhcp_server_config()
    if not 'beginIpRange' in request_data:
        abort(400)
    if not config:
        abort(400)
    set_dhcp_server(config[3], request_data.get('beginIpRange'), config[1], config[2])
    resp = {'beginIpRange': request_data.get('beginIpRange')}
    return jsonify(resp)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'endIpRange', methods = ['POST'])
@jwt_required
def post_end_ip_range():
    if not cli_available:
        abort(501)
    request_data = request.get_json()
    config = get_dhcp_server_config()
    if not 'endIpRange' in request_data:
        abort(400)
    if not config:
        abort(400)
    set_dhcp_server(config[3], config[0], request_data.get('endIpRange'), config[2])
    resp = {'endIpRange': request_data.get('endIpRange')}
    return jsonify(resp)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'leaseTime', methods = ['POST'])
@jwt_required
def post_lease_time():
    if not cli_available:
        abort(501)
    request_data = request.get_json()
    config = get_dhcp_server_config()
    if not 'leaseTime' in request_data:
        abort(400)
    if not config:
        abort(400)
    set_dhcp_server(config[3], config[0], config[1], request_data.get('leaseTime'))
    resp = {'leaseTime': request_data.get('leaseTime')}
    return jsonify(resp)
