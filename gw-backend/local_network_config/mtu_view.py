# -*- coding:utf-8 -*-
# @Script: mtu_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:47:56
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 14:11:51
# @Description: Blueprint for mtu logic.

from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

mtu_route = Blueprint('mtu', __name__)

@mtu_route.route(API_PATH + PATH_SUFFIX + 'mtu', methods = ['POST'])
@jwt_required
def set_mtu():
    request_data = request.get_json()
    if not 'mtu' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)
