from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

dhcp_client_address_route = Blueprint('clientAddress', __name__)

@dhcp_client_address_route.route(API_PATH + PATH_SUFFIX + 'clientMacAddress', methods = ['POST'])
@jwt_required
def set_client_mac_address():
    request_data = request.get_json()
    if not 'clientMacAddress' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)

@dhcp_client_address_route.route(API_PATH + PATH_SUFFIX + 'clientIpAddress', methods = ['POST'])
@jwt_required
def set_client_ip_address():
    request_data = request.get_json()
    if not 'clientIpAddress' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)