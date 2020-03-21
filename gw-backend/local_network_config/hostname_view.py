# -*- coding:utf-8 -*-
# @Script: hostname_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:47:26
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 14:11:39
# @Description: Blueprint for hostname logic.

from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

hostname_route = Blueprint('hostname', __name__)

@hostname_route.route(API_PATH + PATH_SUFFIX + 'hostname', methods = ['POST'])
@jwt_required
def set_hostname():
    request_data = request.get_json()
    if not 'hostname' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)