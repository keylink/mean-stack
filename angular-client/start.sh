#!/bin/sh

echo "Install dependencies ..."
npm install -g @angular/cli
npm install

echo "Start Frontend Server"
#cp .env_docker .env
#export NODE_ENV=docker;
ng serve --host 0.0.0.0 --disable-host-check
