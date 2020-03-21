# -*- coding:utf-8 -*-
# @Script: lease_time_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:46:56
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 14:12:28
# @Description: Blueprint for lease time logic.

from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

dhcp_lease_time_route = Blueprint('leaseTime', __name__)

@dhcp_lease_time_route.route(API_PATH + PATH_SUFFIX + 'leaseTime', methods = ['POST'])
@jwt_required
def set_lease_time():
    request_data = request.get_json()
    if not 'leaseTime' in request_data:
        abort(400)
    resp = {'leaseTime': request_data.get('leaseTime')}
    return jsonify(resp)