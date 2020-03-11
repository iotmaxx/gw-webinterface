from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

ip_address_route = Blueprint('ip_address', __name__)


@ip_address_route.route(API_PATH + 'setIp', methods = ['POST'])
@jwt_required
def set_ip():
    request_data = request.get_json()
    if not 'ip_address' in request_data\
        or not 'subnet_mask' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)
