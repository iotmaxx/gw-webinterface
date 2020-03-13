from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

subnet_mask_route = Blueprint('subnet_mask', __name__)

@subnet_mask_route.route(API_PATH + PATH_SUFFIX + 'ipAddress', methods = ['POST'])
@jwt_required
def set_ip():
    request_data = request.get_json()
    if not 'subnet_mask' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)
