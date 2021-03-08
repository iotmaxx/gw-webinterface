from flask import Flask
import gw_backend

if __name__ == '__main__':
    app = gw_backend.create_app()
    app.run(host='0.0.0.0', port='3000', debug=True)