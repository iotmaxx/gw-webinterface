# -*- coding:utf-8 -*-
# @Script: setup.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-23 23:04:49
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-04-03 12:58:25
# @Description: Setupfile to install gw-webserver backend.

from setuptools import setup, find_packages

setup(
    name='gw-backend',
    version='0.1',
    description='GW webinterface to utilize gw-cli tool.',
    author='Andre Litty',
    author_email='alittysw@gmail.com',
    url='https://github.com/iotmaxx/gw-webinterface',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'flask',
        'flask-jwt-extended',
        'psutil',
        'pytest',
        'gw_cli @ git+ssh://git@github.com/iotmaxx/gw-cli.git#egg=gw_cli'
    ]
)
