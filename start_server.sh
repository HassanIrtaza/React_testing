#!/bin/bash
echo starting server
# navigate to app folder
cd var/www/
echo building application...
sudo npm run build
echo starting application...
sudo pm2 start npm -- run production
