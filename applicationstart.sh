#!/bin/bash

cd /home/ubuntu                                        
systemctl start nginx
pm2 -f start server.js
