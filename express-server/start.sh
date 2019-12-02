#!/bin/sh

echo "Install dependencies ..."
npm install -g nodemon
npm install

echo "Start Server"
#cp .env_docker .env
#export NODE_ENV=docker;
nodemon server.js src