# -*- coding:utf-8 -*-
# @Script: __init__.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:48:57
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-29 21:40:12
# @Description: Main application and entry point to run program.

from flask import Flask, send_from_directory
from flask_jwt_extended import JWTManager

from flask_jwt_extended import jwt_required

from gw_backend.config.constants import *
from gw_backend.config.settings import DevelopmentSettings, ProductionSettings

import os


def create_app():

    app = Flask(__name__)
    env = os.environ.get('FLASK_ENV')

    if env is 'development':
        app.config.from_object(DevelopmentSettings())
    else:
        app.config.from_object(ProductionSettings())

    jwt = JWTManager(app)

    from gw_backend.auth.login import auth_route
    from gw_backend.system_info.system_info import system_info_route
    from gw_backend.local_network_config.local_network_config_view import local_network_route
    from gw_backend.dhcp_config.dhcp_config_view import dhcp_config_route

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

    return app
