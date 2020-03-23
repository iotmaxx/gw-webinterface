# -*- coding:utf-8 -*-
# @Script: settings.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-03-21 13:45:12
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-03-21 13:45:12
# @Description: Class based flask settings.

class Settings(object):
    DEBUG = False
    TESTING = False

class ProductionSettings(Config):
    pass

class TestingSettings(Config):
    TESTING = True

class DevelopmentSettings(Config):
    TESTING = True
    DEBUG = True
