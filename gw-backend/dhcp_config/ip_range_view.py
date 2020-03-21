# -*- coding:utf-8 -*-
# @Script: ip_range_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:46:41
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 14:12:32
# @Description: Blueprint for ip rage config.

from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

dhcp_ip_range_route = Blueprint('ipRange', __name__)

@dhcp_ip_range_route.route(API_PATH + PATH_SUFFIX + 'beginIpRange', methods = ['POST'])
@jwt_required
def set_begin_ip_range():
    request_data = request.get_json()
    if not 'beginIpRange' in request_data:
        abort(400)
    resp = {'beginIpRange': request_data.get('beginIpRange')}
    return jsonify(resp)

@dhcp_ip_range_route.route(API_PATH + PATH_SUFFIX + 'endIpRange', methods = ['POST'])
@jwt_required
def set_begin_mac_range():
    request_data = request.get_json()
    if not 'endIpRange' in request_data:
        abort(400)
    resp = {'endIpRange': request_data.get('endIpRange')}
    return jsonify(resp)