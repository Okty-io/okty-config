#!/bin/sh
set -e

if [ ! -z "$MAX_UPLOAD_SIZE" ]
then
    echo "Set max upload size";
    sed -i "s/^#MAX_UPLOAD_SIZE#$/client_max_body_size ${MAX_UPLOAD_SIZE};/g" /etc/nginx/conf.d/default.conf
fi

exec /usr/sbin/nginx -g 'daemon off;'