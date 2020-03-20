from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from .constants import PATH_SUFFIX

domain_name_route = Blueprint('domainName', __name__)

@domain_name_route.route(API_PATH + PATH_SUFFIX + 'domainName', methods = ['POST'])
@jwt_required
def set_domain_name():
    request_data = request.get_json()
    if not 'domainName' in request_data:
        abort(400)
    resp = {'domainName': request_data.get('domainName')}
    return jsonify(resp)