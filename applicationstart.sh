#!/bin/bash

cd /home/ubuntu                                        
systemctl start nginx
npm start
pm2 -f start server.js
