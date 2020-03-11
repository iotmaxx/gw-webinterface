from flask import Flask, send_from_directory, request, abort
from flask import jsonify
from flask_jwt_extended import JWTManager

from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_required,
    jwt_refresh_token_required,
    get_jwt_identity
)

import os

app = Flask(__name__)

API_PATH = '/api/v1/'
SECRET_KEY = 'HORST'

TEST_USER = 'admin'
TEST_PASSWORD = 'admin!'

app.secret_key = SECRET_KEY

jwt = JWTManager(app)

@app.route(API_PATH + 'auth/login', methods = ['POST'])
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

@app.route(API_PATH + 'auth/refresh', methods = ['POST'])
@jwt_refresh_token_required
def refresh_token(self):
    current_user = get_jwt_identity()
    access_token = create_access_token(identity = current_user)
    resp = {'access': access_token}
    return jsonify(resp)

@app.route(API_PATH + 'setHostname', methods = ['POST'])
@jwt_required
def set_hostname():
    request_data = request.get_json()
    if not 'hostname' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)

@app.route(API_PATH + 'setIp', methods = ['POST'])
@jwt_required
def set_ip():
    request_data = request.get_json()
    if not 'ip_address' in request_data\
        or not 'subnet_mask' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)

@app.route(API_PATH + 'setMTU', methods = ['POST'])
@jwt_required
def set_mtu():
    request_data = request.get_json()
    if not 'mtu' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
