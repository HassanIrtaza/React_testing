#!/bin/bash

# navigate to app folder
cd /home/ubuntu/home/workspace/react/
echo "nstalling"
# install node and npm
curl -fsSL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
bash /tmp/nodesource_setup.sh
apt-get install -y nodejs
