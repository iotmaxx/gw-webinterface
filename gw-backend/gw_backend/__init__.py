# -*- coding:utf-8 -*-
# @Script: __init__.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:48:57
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-08-07 11:13:11
# @Description: Main application and entry point to run program.
import os
import logging

from flask import Flask, send_from_directory

from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required

from flask_cors import CORS

from gw_backend.config.constants import *
from gw_backend.config.settings import DevelopmentSettings, ProductionSettings


def create_app():
    logging.basicConfig(
        filename='/tmp/gw.log',
        format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',
        level=logging.DEBUG
    )

    app = Flask(__name__)
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = False
    app.config["JWT_REFRESH_TOKEN_EXPIRES"] = False
    CORS(app)
    env = os.environ.get('FLASK_ENV', 'development')

    #if env == 'development':
    app.config.from_object(DevelopmentSettings())
    #else:
    #    app.config.from_object(ProductionSettings())
    jwt = JWTManager(app)

    from gw_backend.auth.login import auth_route
    from gw_backend.system_info.system_info import system_info_route
    from gw_backend.local_network_config.local_network_config_view import local_network_route
    from gw_backend.dhcp_config.dhcp_config_view import dhcp_config_route
    from gw_backend.gsm_modem.gsm import gsm_modem_route

    app.register_blueprint(auth_route)
    app.register_blueprint(local_network_route)
    app.register_blueprint(system_info_route)
    app.register_blueprint(dhcp_config_route)
    app.register_blueprint(gsm_modem_route)

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        if path != "" and os.path.exists(app.static_folder + '/' + path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')
    app.logger.info(f'Started server with {env} settings')
    return app
