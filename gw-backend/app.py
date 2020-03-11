from flask import Flask, send_from_directory, request, abort, jsonify
from flask_jwt_extended import JWTManager

from flask_jwt_extended import jwt_required

from auth.login import auth_route
from localNetworkConfig.hostname_view import hostname_route
from localNetworkConfig.ip_address_view import ip_address_route
from localNetworkConfig.mtu_view import mtu_route

from config.constants import *

import os

app = Flask(__name__)

app.secret_key = SECRET_KEY

jwt = JWTManager(app)

app.register_blueprint(auth_route)
app.register_blueprint(hostname_route)
app.register_blueprint(ip_address_route)
app.register_blueprint(mtu_route)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
