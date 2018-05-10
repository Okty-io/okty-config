#!/bin/sh
set -e
CONFIG_START='server {'

if [ ! -z "$MAX_UPLOAD_SIZE" ]
then
    echo "Set max upload size";
    sed -i "s/^${CONFIG_START}$/${CONFIG_START}\nclient_max_body_size ${MAX_UPLOAD_SIZE};\n/g" /etc/nginx/conf.d/default.conf
fi

exec /usr/sbin/nginx -g 'daemon off;'