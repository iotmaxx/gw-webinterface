# Prerequisite

virtual environment running python 3.7
pip3 install virtualenv
virtualenv -p /usr/bin/python3.7 gw-web

npm and node must be installed

# Installation

source gw-web/bin/activate
git clone git@github.com:iotmaxx/gw-webinterface.git
cd gw-webinterface
./setup.sh

# Run

flask run

# Troubleshooting

1. Make sure the virtual environment is installed correctly and activated

2. Check if the environment variable FLASK_APP is set to gw_backend (echo $FLASK_APP). If it is not set run export FLASK_APP=gw_backend

3. Make sure all required frontend dependencies are installed correctly and the gw-backend/static contains the output from the build process
