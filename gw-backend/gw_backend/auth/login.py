# -*- coding:utf-8 -*-
# @Script: login.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:44:03
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-24 02:04:42
# @Description: Blueprint for login and token refresh logic.

from gw_backend.config.constants import API_PATH, TEST_USER, TEST_PASSWORD

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_refresh_token_required,
    get_jwt_identity
)

auth_route = Blueprint('auth', __name__)

def create_token_pair(identity=None):
    access_token = create_access_token(identity=identity)
    refresh_token = create_refresh_token(identity=identity)
    return {
        'access': access_token,
        'refresh': refresh_token
        }    

@auth_route.route(API_PATH + 'auth/login', methods = ['POST'])
def login():
    request_data = request.get_json()
    if not 'username' in request_data or 'password' not in request_data:
        return abort(400)
    if not request_data.get('username') == TEST_USER\
        and not request_data.get('password') == TEST_PASSWORD:
        return abort(401)
    token_pair = create_token_pair(identity=request_data.get('username'))
    return jsonify(token_pair)

@auth_route.route(API_PATH + 'auth/refresh', methods = ['POST'])
@jwt_refresh_token_required
def refresh_token():
    current_user = get_jwt_identity()
    token_pair = create_token_pair(identity=current_user)
    return jsonify(token_pair)
