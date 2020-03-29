# -*- coding:utf-8 -*-
# @Script: setup.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-23 23:04:49
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-29 13:55:02
# @Description: Setupfile to install gw-webserver backend.

from setuptools import setup, find_packages

setup(
    name='gw-backend',
    version='0.1',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'flask',
        'flask-jwt-extended',
        'psutil'
    ],
    dependecy_links=[
        #'https://github.com/iotmaxx/gw-cli/tarball/master#egg=package-1.0'
    ]
)
