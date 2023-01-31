#!/bin/bash
echo starting server
# navigate to app folder
cd /home/ubuntu
echo starting application...
sudo pm2 start npm
sudo systemctl restart nginx
