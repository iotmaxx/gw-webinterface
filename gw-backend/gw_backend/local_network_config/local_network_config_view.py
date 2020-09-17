# -*- coding:utf-8 -*-
# @Script: local_network_config_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 14:26:14
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-09-17 15:46:02
# @Description: Logic related to local network configuration.

import threading
import time

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
    if mtu_response.returncode == 0:
        return jsonify(mtu=mtu)
    else:
        abort(503)


def thread_function(ip_address, subnet_mask):
    """
    Workaround function to change ip address in separate thread than the resquest is handled
    Changing ip address in the same thread causes the response to get lost in network
    """
    time.sleep(0.3)
    change_ipv4(ip_address, subnet_mask)


@local_network_route.route(API_PATH + PATH_SUFFIX + 'address/all', methods=['GET'])
@jwt_required
def get_all_network_information():
    lan_info = get_net_information('eth0')
    wan_info = get_net_information('wwan0')
    response = {
        'lan': lan_info,
        'wan': wan_info
    }
    return jsonify(response)


@local_network_route.route(API_PATH + PATH_SUFFIX + 'address', methods=['POST', 'GET'])
@jwt_required
def post_ip():
    if request.method == 'GET':
        net_info = get_net_information('eth0')
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

        if old_address and len(old_address) > 1:
            for string in [old_address, f'http://{old_address}']:
                js_file = find_file_content(string)
                if js_file is not None:
                    if string.find('://') != -1:
                        search_address = f'http://{old_address}'
                        replace_address = f'http://{ip_address}'
                    else:
                        search_address = old_address
                        replace_address = ip_address
                    break
            if js_file is not None:
                replace_in_file(js_file, search_address, replace_address)
            update_env_file(ip_address)
        thread = threading.Thread(target=thread_function,
                                  args=(ip_address, subnet_mask))
        thread.start()
        return jsonify(
            ipAddress=ip_address,
            subnetMask=subnet_mask
        )


@local_network_route.route(API_PATH + PATH_SUFFIX + 'ipv6Address', methods=['POST'])
@jwt_required
def post_ipv6():
    request_data = request.get_json()
    if not 'ipv6Address' in request_data:
        abort(400)
    ipv6Address = request_data.get('ipv6Address')
    return jsonify(ipv6Address=ipv6Address)
