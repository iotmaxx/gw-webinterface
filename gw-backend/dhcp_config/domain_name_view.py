# -*- coding:utf-8 -*-
# @Script: domain_name_view.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:46:14
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 14:12:35
# @Description: Blueprint for domain name logic.

from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

domain_name_route = Blueprint('domainName', __name__)

@domain_name_route.route(API_PATH + PATH_SUFFIX + 'domainName', methods = ['POST'])
@jwt_required
def set_domain_name():
    request_data = request.get_json()
    if not 'domainName' in request_data:
        abort(400)
    resp = {'domainName': request_data.get('domainName')}
    return jsonify(resp)