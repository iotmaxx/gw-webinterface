# -*- coding:utf-8 -*-
# @Script: system_info.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:48:40
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-24 02:03:58
# @Description: Blueprint for system information logic.

from flask import Blueprint, request, abort, jsonify
from flask_jwt_extended import jwt_required

from gw_backend.config.constants import API_PATH

from .constants import PATH_SUFFIX

import psutil
import datetime
import os


system_info_route = Blueprint('system_info', __name__)

def get_disk_usage():
    return psutil.disk_usage('/')

def get_uptime():
    boot_time = datetime.datetime.fromtimestamp(psutil.boot_time())
    now = datetime.datetime.now()
    return abs(now - boot_time)

def get_memory():
    return psutil.virtual_memory()

def read_config(config_path=''):
    settings = {}
    if not os.path.isfile(config_path):
        return settings

    with open(config_path, 'r') as config:
        file_content = [line.strip() for line in config]
    for part in file_content:
        setting = part.split(' ')
        settings[setting[0]] = setting[-1]
    return settings

@system_info_route.route(API_PATH + PATH_SUFFIX + 'config', methods = ['GET'])
@jwt_required
def get_configs():
    config_file = request.args.get('config', default='/etc/udhcp.conf')
    config = read_config(config_path=config_file)
    return jsonify(config)

@system_info_route.route(API_PATH + PATH_SUFFIX + 'info', methods = ['GET'])
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
