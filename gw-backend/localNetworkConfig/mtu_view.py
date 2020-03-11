from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

mtu_route = Blueprint('mtu', __name__)

@app.route(API_PATH + 'setMTU', methods = ['POST'])
@jwt_required
def set_mtu():
    request_data = request.get_json()
    if not 'mtu' in request_data:
        abort(400)
    resp = {'message': 'Success'}
    return jsonify(resp)
