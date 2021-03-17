# -*- coding:utf-8 -*-
# @Script: dhcp_config_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 14:30:29
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-08-11 19:30:31
# @Description: Logic related to dhcp configuration.

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from gw_backend.config.constants import API_PATH

from gw_cli import change_dhcp_server, get_dhcp_server_config, swap_dhcp_state

from .constants import PATH_SUFFIX


dhcp_config_route = Blueprint('dhcp_config', __name__)


@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'domainName', methods=['POST'])
@jwt_required
def post_domain_name():
    request_data = request.get_json()
    config = get_dhcp_server_config()
    if not 'domainName' in request_data:
        abort(400)
    if not config:
        abort(400)
    change_dhcp_server(
        str(request_data.get('domainName')),
        config[0],
        config[1],
        config[2]
        )
    resp = {'domainName': request_data.get('domainName')}
    return jsonify(resp)


@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'beginIpRange', methods=['POST'])
@jwt_required
def post_begin_ip_range():
    request_data = request.get_json()
    config = get_dhcp_server_config()
    if not 'beginIpRange' in request_data:
        abort(400)
    if not config:
        abort(400)
    change_dhcp_server(
        config[3],
        str(request_data.get('beginIpRange')),
        config[1],
        config[2]
        )
    resp = {'beginIpRange': request_data.get('beginIpRange')}
    return jsonify(resp)


@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'endIpRange', methods=['POST'])
@jwt_required
def post_end_ip_range():
    request_data = request.get_json()
    config = get_dhcp_server_config()
    if not 'endIpRange' in request_data:
        abort(400)
    if not config:
        abort(400)
    change_dhcp_server(
        config[3],
        config[0],
        str(request_data.get('endIpRange')),
        config[2]
        )
    resp = {'endIpRange': request_data.get('endIpRange')}
    return jsonify(resp)


@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'leaseTime', methods=['POST'])
@jwt_required
def post_lease_time():
    request_data = request.get_json()
    config = get_dhcp_server_config()
    if not 'leaseTime' in request_data:
        abort(400)
    if not config:
        abort(400)
    change_dhcp_server(
        config[3],
        config[0],
        config[1],
        str(request_data.get('leaseTime'))
        )
    resp = {'leaseTime': request_data.get('leaseTime')}
    return jsonify(resp)

@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'enableDHCPServer', methods=['POST'])
@jwt_required
def post_enable_DHCP_server():
    request_data = request.get_json()
    config = get_dhcp_server_config()
    if not 'enableDHCPServer' in request_data:
        abort(400)
    if not config:
        abort(400)
    swap_dhcp_state(request_data.get('enableDHCPServer'))
    resp = {'enableDHCPServer': request_data.get('enableDHCPServer')}
    return jsonify(resp)


@dhcp_config_route.route(API_PATH + PATH_SUFFIX + 'config', methods=['GET'])
@jwt_required
def get_dhcp_config():
    config = get_dhcp_server_config()

    if config[4] == 'false':
        flag = False
    else:
        flag = True


    if not config:
        abort(503)
    resp = {
        'beginIpRange': str(config[0]),
        'endIpRange': str(config[1]),
        'leaseTime': str(config[2]),
        'domainName': str(config[3]),
        'enableDHCPServer': flag,
    }
    return jsonify(resp)
