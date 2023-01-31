#!/bin/bash

# navigate to app folder
cd /home/ubuntu/home/myapp
# install node and npm
curl -fsSL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo -y install nodejs npm
