# -*- coding:utf-8 -*-
# @Script: ip_address_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:47:39
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 14:11:48
# @Description: Blueprint for ip address logic.

from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

ip_address_route = Blueprint('ip_address', __name__)

@ip_address_route.route(API_PATH + PATH_SUFFIX + 'ipAddress', methods = ['POST'])
@jwt_required
def set_ip():
    request_data = request.get_json()
    if not 'ip_address' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)
