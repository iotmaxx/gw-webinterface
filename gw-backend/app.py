# -*- coding:utf-8 -*-
# @Script: app.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:48:57
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 13:49:28
# @Description: Main application and entry point to run program.

from flask import Flask, send_from_directory, request, abort, jsonify
from flask_jwt_extended import JWTManager

from flask_jwt_extended import jwt_required

from auth.login import auth_route
from system_info.system_info import system_info_route
from local_network_config.hostname_view import hostname_route
from local_network_config.ip_address_view import ip_address_route
from local_network_config.mtu_view import mtu_route
from local_network_config.subnetmask_view import subnet_mask_route
from dhcp_config.domain_name_view import domain_name_route
from dhcp_config.client_address_view import dhcp_client_address_route
from dhcp_config.ip_range_view import dhcp_ip_range_route
from dhcp_config.lease_time_view import dhcp_lease_time_route

from config.constants import *

import os

app = Flask(__name__)

app.secret_key = SECRET_KEY

jwt = JWTManager(app)

app.register_blueprint(auth_route)
app.register_blueprint(hostname_route)
app.register_blueprint(ip_address_route)
app.register_blueprint(mtu_route)
app.register_blueprint(system_info_route)
app.register_blueprint(subnet_mask_route)
app.register_blueprint(domain_name_route)
app.register_blueprint(dhcp_client_address_route)
app.register_blueprint(dhcp_ip_range_route)
app.register_blueprint(dhcp_lease_time_route)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
