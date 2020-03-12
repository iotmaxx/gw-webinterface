from config.constants import API_PATH

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

import psutil
import datetime


def get_disk_usage():
    return psutil.disk_usage('/')


def get_uptime():
    boot_time = datetime.datetime.fromtimestamp(psutil.boot_time())
    now = datetime.datetime.now()
    return abs(now - boot_time)


def get_memory():
    return psutil.virtual_memory()


system_info_route = Blueprint('system_info', __name__)

@system_info_route.route(API_PATH + 'system_info', methods = ['GET'])
@jwt_required
def get_system_information():
    disk_info = get_disk_usage()
    uptime = get_uptime()
    uptime_hours = '{:.2f}'.format(uptime.seconds / 3600)
    memory = get_memory()
    information = [
        {
            'caption': 'Uptime',
            'value': f'{uptime.days} days, {uptime_hours}'
        },
        {
            'caption': 'Flash free',
            'value': f'{disk_info.free} Kib'
        },
        {
            'caption': 'Flash used',
            'value': f'{disk_info.used} Kib'
        },
        {
            'caption': 'Flash total',
            'value': f'{disk_info.total} Kib'
        },
        {
            'caption': 'MemTotal',
            'value': f'{memory.total} Kib'
        },
        {
            'caption': 'MemAvailable',
            'value': f'{memory.available} Kib'
        },
        {
            'caption': 'MemFree',
            'value': f'{memory.free} Kib'
        },
        {
            'caption': 'MemUsed',
            'value': f'{memory.used} Kib'
        },
        {
            'caption': 'Buffers',
            'value': f'{memory.buffers} Kib'
        },
        {
            'caption': 'Cached',
            'value': f'{memory.cached} Kib'
        }
    ]
    return jsonify(information)
