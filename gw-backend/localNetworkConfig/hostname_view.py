from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

hostname_route = Blueprint('hostname', __name__)

@hostname_route.route(API_PATH + 'setHostname', methods = ['POST'])
@jwt_required
def set_hostname():
    request_data = request.get_json()
    if not 'hostname' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)