# -*- coding:utf-8 -*-
# @Script: utils.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-04-10 03:21:53
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-08-13 16:30:07
# @Description: Utils to search and replace file content and get ip address information.

import glob
import mmap
import subprocess
import re
import ipaddress
import os


MTU_REX = 'mtu [0-9]+'
IP_REX = 'inet [0-9]+.[0-9]+.[0-9]+.[0-9]+/[0-9]+'


def find_file_content(search_string):
    try:
        for js_file in glob.glob('static/*.js'):
            with open(js_file, 'rb', 0) as file, mmap.mmap(
                    file.fileno(),
                    0,
                    access=mmap.ACCESS_READ) as s:
                if s.find(search_string.encode()) != -1:
                    return js_file
    except Exception:
        return None


def replace_in_file(filename, to_replace, replace_with):
    try:
        with open(filename, 'r') as file:
            contend = file.read()
        contend = contend.replace(to_replace, replace_with)
        with open(filename, 'w') as file:
            file.write(contend)
        return True
    except Exception:
        return False


def get_net_information():
    try:
        addr = subprocess.run(
            ['ip', 'addr', 'show', 'eth0'],
            check=True,
            capture_output=True
        )
        if addr.returncode != 0:
            return None
        addr = addr.stdout.decode()
        mtu = re.search(MTU_REX, addr).group()
        mtu = mtu.split(' ')[-1]
        ipv4 = re.search(IP_REX, addr).group()
        ipv4 = ipv4.split(' ')[-1]
        nic = ipaddress.IPv4Interface(ipv4)
        netmask = nic.netmask.compressed
        netmask_prefix = nic.with_prefixlen.split('/')[-1]
        ip = nic.ip.compressed
        hostname = os.uname()[1]
        return {
            'hostname': hostname,
            'ipAddress': ip,
            'subnetMask': netmask,
            'subnetMaskPrefix': netmask_prefix
        }
    except Exception:
        return None


def update_env_file(ip, port=3000):
    content = f'HOST_ADDRESS={ip}\nHOST_PORT={port}'
    path = os.path.dirname(__file__)
    path = path.split('gw-backend')[0] + '.env'
    with open(path, 'w') as env:
        env.write(content)
