#!/bin/bash
echo starting server
# navigate to app folder
#cd /home/ubuntu/home/myapp
echo starting application...
sudo pm2 start node_modules/react-scripts/scripts/start.js
sudo systemctl restart nginx
