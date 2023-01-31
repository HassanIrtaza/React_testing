#!/bin/bash
echo starting server
# navigate to app folder
cd /home/ubuntu/home/myapp
echo starting application...
sudo pm2 start npm
sudo systemctl restart nginx
