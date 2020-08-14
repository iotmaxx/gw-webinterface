#!/bin/sh
# Author : Andre Litty

HOME_PATH=`pwd`
PORT=3000

build_frontend()
{
    echo "Building production version for gw-webinterface frontend..."
    FRONTEND_PATH=$HOME_PATH"/gw-frontend"
    cd $FRONTEND_PATH
    npm install
    npm run build
}

install_backend()
{
    echo "Installing gw-webinterface backend"
    BACKEND_PATH=$HOME_PATH"/gw-backend"
    cd $BACKEND_PATH
    pip install -e .
}

set_environment_variables()
{
    echo "Setting flask environment variables"
    export FLASK_APP=gw_backend
    export FLASK_RUN_HOST=0.0.0.0
    export FLASK_RUN_PORT=$PORT
}

get_current_ip()
{
    IP_REGEX=[0-9]+.[0-9]+.[0-9]+.[0-9]+
    address=`ip addr show dev eth0 | grep inet | grep -Eo $IP_REGEX/ | grep -Eo $IP_REGEX`
    echo HOST_ADDRESS=$address > .env
    echo HOST_PORT=$PORT >> .env
}

echo "Configuring and installing gw-application..."
get_current_ip
set_environment_variables
# build_frontend
# install_backend
