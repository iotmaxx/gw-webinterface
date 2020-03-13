from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

mtu_route = Blueprint('mtu', __name__)

@mtu_route.route(API_PATH + PATH_SUFFIX + 'mtu', methods = ['POST'])
@jwt_required
def set_mtu():
    request_data = request.get_json()
    if not 'mtu' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)
