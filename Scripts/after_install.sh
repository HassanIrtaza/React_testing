#!/bin/bash

# navigate to app folder
#cd /home/ubuntu/home/myapp

# install dependencies
sudo npm i --force
# install create-react-app and react-scripts
# without react-scripts application cannot be started
sudo npm install --save create-react-app react-scripts

# install pm2 process manager
sudo npm install pm2 -g
sudo npm run build
