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
