#!/bin/bash

# navigate to app folder
cd /var/www/

# install node and npm
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install nodejs npm
