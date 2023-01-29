#!/bin/bash

# navigate to app folder
cd app
pm2 start
# freeze process list for automatic respawn
pm2 save
# restart all processes - necessary to do this again?
pm2 restart all
