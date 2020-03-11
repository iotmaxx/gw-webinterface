from config.constants import API_PATH, TEST_USER, TEST_PASSWORD

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_refresh_token_required,
    get_jwt_identity
)

auth_route = Blueprint('auth', __name__)

@auth_route.route(API_PATH + 'auth/login', methods = ['POST'])
def login():
    request_data = request.get_json()
    if not 'username' in request_data or 'password' not in request_data:
        return abort(400)
    if not request_data.get('username') == TEST_USER\
        and not request_data.get('password') == TEST_PASSWORD:
        return abort(401)
    access_token = create_access_token(identity = request_data.get('username'))
    refresh_token = create_refresh_token(identity = request_data.get('username'))
    resp = {
        'access': access_token,
        'refresh': refresh_token
        }
    return jsonify(resp)

@auth_route.route(API_PATH + 'auth/refresh', methods = ['POST'])
@jwt_refresh_token_required
def refresh_token(self):
    current_user = get_jwt_identity()
    access_token = create_access_token(identity = current_user)
    resp = {'access': access_token}
    return jsonify(resp)
