#!/bin/sh

DIR=`dirname $0`

ENV_FILE=$1
if [ -f $ENV_FILE ]; then
    printf "Reading path to pmean-stack  + pebblar-client from .env...\n"
else
    printf ".env not found."
    exit 1
fi

cat .env
printf "\n"

docker-compose --project-name mean-stack --file "$DIR/docker-compose.yml" up --build