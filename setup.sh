#!/bin/sh
# Author : Zara Ali

HOME_PATH=`pwd`

build_frontend()
{
    echo "Building production version for gw-webinterface frontend..."
    FRONTEND_PATH=$HOME_PATH"/gw-frontend"
    cd $FRONTEND_PATH
    npm run build
}

install_backend()
{
    echo "Installing gw-webinterface backend"
    BACKEND_PATH=$HOME_PATH"/gw-backend"
    cd $BACKEND_PATH
    pip install -e .
}

set_environment_variable()
{
    if [ -z "${FLASK_APP}" ]; then
        export FLASK_APP=gw_backend
    fi
}

set_environment_variable
build_frontend
install_backend