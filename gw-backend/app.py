# -*- coding:utf-8 -*-
# @Script: app.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:48:57
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 14:34:03
# @Description: Main application and entry point to run program.

from flask import Flask, send_from_directory, request, abort, jsonify
from flask_jwt_extended import JWTManager

from flask_jwt_extended import jwt_required

from auth.login import auth_route
from system_info.system_info import system_info_route
from local_network_config.local_network_config_view import local_network_route
from dhcp_config.dhcp_config_view import dhcp_config_route

from config.constants import *

import os

app = Flask(__name__)

app.secret_key = SECRET_KEY

jwt = JWTManager(app)

app.register_blueprint(auth_route)
app.register_blueprint(local_network_route)
app.register_blueprint(system_info_route)
app.register_blueprint(dhcp_config_route)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
