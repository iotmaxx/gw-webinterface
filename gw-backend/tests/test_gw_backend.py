# -*- coding:utf-8 -*-
# @Script: test_gw_backend.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-04-03 12:56:13
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-04-03 12:56:13
# @Description: All tests related to gw-backend.

import pytest
import json
import gw_backend

@pytest.fixture
def client():
    app = gw_backend.create_app()
    with app.test_client() as client:
        yield client

def do_login(client):
    data = {
        'username': gw_backend.config.constants.TEST_USER,
        'password': gw_backend.config.constants.TEST_PASSWORD
    }    
    response = client.post('api/v1/auth/login', json=data)
    json_response = json.loads(response.data.decode())
    return json_response

def make_auth_header(client):
    token_pair = do_login(client)
    access_token = token_pair.get('access')
    return {"Authorization": f'Bearer {access_token}'}

def test_login_success(client):
    data = {
        'username': gw_backend.config.constants.TEST_USER,
        'password': gw_backend.config.constants.TEST_PASSWORD
    }
    response = client.post('api/v1/auth/login', json=data)
    response_data = response.data.decode()
    assert 'access' in response_data
    assert 'refresh' in response_data
    assert response.status_code == 200

def test_login_fail(client):
    data = {
        'username': 'user',
        'password': 'pass'
    }
    response = client.post('api/v1/auth/login', json=data)
    assert response.status_code == 401

def test_refresh_token_success(client):
    token_pair = do_login(client)
    refresh_token = token_pair.get('refresh')
    response = client.post('api/v1/auth/refresh', headers={"Authorization": f'Bearer {refresh_token}'})
    response_data = response.data.decode()
    assert 'access' in response_data
    assert 'refresh' in response_data
    assert response.status_code == 200

def test_refresh_token_fail(client):
    token_pair = do_login(client)
    refresh_token = token_pair.get('refresh')
    last_char = refresh_token[-1]
    if last_char.isnumeric():
        last_char = str(int(last_char) + 1)
    else:
        last_char = last_char.upper() if last_char.islower() else last_char.lower()
    new_token = refresh_token[:-1] + last_char
    response = client.post('api/v1/auth/refresh', headers={"Authorization": f'Bearer {new_token}'})
    json_response = json.loads(response.data.decode())
    assert json_response.get('msg') == 'Signature verification failed'
    assert response.status_code != 200
    assert response.status_code == 422

def test_set_domain_name_success(client):
    auth_header = make_auth_header(client)
    data = {
        'domainName': 'new_domain'
    }
    response = client.post('api/v1/dhcp_config/domainName', headers=auth_header, json=data)
    json_response = json.loads(response.data.decode())
    assert response.status_code == 200

def test_set_domain_name_fail(client):
    auth_header = make_auth_header(client)
    data = {
        'invalidData': 'new_domain'
    }
    response = client.post('api/v1/dhcp_config/domainName', headers=auth_header, json=data)
    assert response.status_code == 400

def test_set_begin_ip_range_success(client):
    auth_header = make_auth_header(client)
    data = {
        'beginIpRange': '127.0.0.1'
    }
    response = client.post('api/v1/dhcp_config/beginIpRange', headers=auth_header, json=data)
    json_response = json.loads(response.data.decode())
    assert response.status_code == 200

def test_set_begin_ip_range_fail(client):
    auth_header = make_auth_header(client)
    data = {
        'invalidData': '127.0.0.1'
    }
    response = client.post('api/v1/dhcp_config/beginIpRange', headers=auth_header, json=data)
    assert response.status_code == 400

def test_set_end_ip_range_success(client):
    auth_header = make_auth_header(client)
    data = {
        'endIpRange': '127.0.0.200'
    }
    response = client.post('api/v1/dhcp_config/endIpRange', headers=auth_header, json=data)
    json_response = json.loads(response.data.decode())
    assert response.status_code == 200

def test_set_end_ip_range_fail(client):
    auth_header = make_auth_header(client)
    data = {
        'invalidData': '127.0.0.200'
    }
    response = client.post('api/v1/dhcp_config/endIpRange', headers=auth_header, json=data)
    assert response.status_code == 400

def test_set_lease_time_success(client):
    auth_header = make_auth_header(client)
    data = {
        'leaseTime': '1d 2h'
    }
    response = client.post('api/v1/dhcp_config/leaseTime', headers=auth_header, json=data)
    json_response = json.loads(response.data.decode())
    assert response.status_code == 200

def test_set_lease_time_fail(client):
    auth_header = make_auth_header(client)
    data = {
        'invalidData': '1d 2h'
    }
    response = client.post('api/v1/dhcp_config/leaseTime', headers=auth_header, json=data)
    assert response.status_code == 400

def test_set_hostname_success(client):
    auth_header = make_auth_header(client)
    data = {
        'hostname': 'new_hostname'
    }
    response = client.post('api/v1/local_network/hostname', headers=auth_header, json=data)
    json_response = json.loads(response.data.decode())
    assert response.status_code == 200

def test_set_hostname_fail(client):
    auth_header = make_auth_header(client)
    data = {
        'invalidData': 'new_hostname'
    }
    response = client.post('api/v1/local_network/hostname', headers=auth_header, json=data)
    assert response.status_code == 400

def test_set_mtu_success(client):
    auth_header = make_auth_header(client)
    data = {
        'mtu': '2900'
    }
    response = client.post('api/v1/local_network/mtu', headers=auth_header, json=data)
    json_response = json.loads(response.data.decode())
    assert response.status_code == 200

def test_set_mtu_fail(client):
    auth_header = make_auth_header(client)
    data = {
        'invalidData': '2900'
    }
    response = client.post('api/v1/local_network/mtu', headers=auth_header, json=data)
    assert response.status_code == 400

def test_set_ipAddress_success(client):
    auth_header = make_auth_header(client)
    data = {
        'ipAddress': '127.0.0.1',
        'subnetMask': '255.255.255.0'
    }
    response = client.post('api/v1/local_network/address', headers=auth_header, json=data)
    json_response = json.loads(response.data.decode())
    assert response.status_code == 200

def test_set_ipAddress_fail(client):
    auth_header = make_auth_header(client)
    data = {
        'invalidData': '127.0.0.1',
        'subnetMask': '255.255.255.0'
    }
    response = client.post('api/v1/local_network/address', headers=auth_header, json=data)
    assert response.status_code == 400

def test_get_system_info(client):
    auth_header = make_auth_header(client)
    response = client.get('api/v1/system/info', headers=auth_header)
    json_response = json.loads(response.data.decode())
    assert json_response is not None
    assert len(json_response) > 0
    assert response.status_code == 200

def test_get_system_info(client):
    auth_header = make_auth_header(client)
    response = client.get('api/v1/system/config', headers=auth_header)
    json_response = json.loads(response.data.decode())
    assert response.status_code == 200
