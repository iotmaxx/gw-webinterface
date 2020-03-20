from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

dhcp_lease_time_route = Blueprint('leaseTime', __name__)

@dhcp_lease_time_route.route(API_PATH + PATH_SUFFIX + 'leaseTime', methods = ['POST'])
@jwt_required
def set_lease_time():
    request_data = request.get_json()
    if not 'leaseTime' in request_data:
        abort(400)
    resp = {'leaseTime': request_data.get('leaseTime')}
    return jsonify(resp)