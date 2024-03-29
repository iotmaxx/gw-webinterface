# -*- coding:utf-8 -*-
# @Script: login.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:44:03
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-12-15 01:23:16
# @Description: Blueprint for login and token refresh logic.
import json
from hashlib import sha3_512
from pathlib import Path
import os

from gw_backend.config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_refresh_token_required,
    get_jwt_identity,
    jwt_required
)

auth_route = Blueprint('auth', __name__)

CREDENTIALS_PATH = os.path.dirname(os.path.abspath(__file__)) + "/credentials.json"


def create_token_pair(identity=None):
    access_token = create_access_token(identity=identity)
    refresh_token = create_refresh_token(identity=identity)
    return {
        'access': access_token,
        'refresh': refresh_token
    }


def load_credentials():
    try:
        with open(CREDENTIALS_PATH) as credentials:
            return json.load(credentials)
    except Exception:
        return None


@auth_route.route(API_PATH + 'auth/login', methods=['POST'])
def login():
    request_data = request.get_json()
    if not request_data:
        return abort(400)
    if not 'username' in request_data or 'password' not in request_data:
        return abort(400)
    credentials = load_credentials()    
    if credentials is None:
        return abort(401)
    username = request_data.get('username')    
    password = request_data.get('password')
    password = password.encode()
    if username != credentials['username'] or\
            sha3_512(password).hexdigest() != credentials['password']:
        return abort(401)
    token_pair = create_token_pair(identity=request_data.get('username'))
    return jsonify(token_pair)


@auth_route.route(API_PATH + 'auth/refresh', methods=['POST'])
@jwt_refresh_token_required
def refresh_token():
    current_user = get_jwt_identity()
    token_pair = create_token_pair(identity=current_user)
    return jsonify(token_pair)


@auth_route.route(API_PATH + 'auth/user', methods=['GET'])
@jwt_required
def get_user():
    credentials = load_credentials()
    if credentials is None:
        return abort(400)
    response = {'user': credentials['username']}
    return jsonify(response)


@auth_route.route(API_PATH + 'auth/reset_password', methods=['POST'])
@jwt_required
def reset_password():
    request_data = request.get_json()
    username = request_data.get('username')
    password = request_data.get('password')
    password = sha3_512(password.encode()).hexdigest()
    credentials = load_credentials()
    if credentials is None:
        return abort(400)
    credentials['username'] = username
    credentials['password'] = password
    with open(CREDENTIALS_PATH, 'w') as credentials_file:
        json.dump(credentials, credentials_file, indent=4)
    response = {'success': True, 'username': username}
    return jsonify(response)
