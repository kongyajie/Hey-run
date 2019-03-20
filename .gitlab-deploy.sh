#!/bin/bash

# . /etc/profile
npm install
# npm install
hey build

rm -rf /var/www/heyui-run
mv dist /var/www/heyui-run