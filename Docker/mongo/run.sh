#!/bin/bash

VOLUME_HOME="/data/db"

if [[ ! -d /data/db/admin ]]; then
    if [ ! -f /.mongodb_password_set ]; then
        /set_mongodb_password.sh
    fi
fi


if [ "$AUTH" == "yes" ]; then
    export mongodb='/usr/bin/mongod --nojournal --auth --httpinterface --rest'
else
    export mongodb='/usr/bin/mongod --nojournal --httpinterface --rest'
fi

if [ ! -f /data/db/mongod.lock ]; then
    exec $mongodb
else
    export mongodb=$mongodb' --dbpath /data/db'
    rm /data/db/mongod.lock
    if [[ ! -d /data/db/admin ]]; then
        mongod --dbpath /data/db --repair && exec $mongodb
    else
        mongod --dbpath /data/db && exec $mongodb
    fi
fi

