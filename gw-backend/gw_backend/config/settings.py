# -*- coding:utf-8 -*-
# @Script: settings.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:45:12
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-04-08 14:23:05
# @Description: Class based flask settings.


class Settings(object):
    DEBUG = False
    TESTING = False
    SECRET_KEY = 'SECRET_KEY'
    JWT_ALGORITHM = 'HS512'

class ProductionSettings(Settings):
    pass


class DevelopmentSettings(Settings):
    TESTING = True
    DEBUG = True
