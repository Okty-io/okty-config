#!/bin/sh
set -e
    
echo 'ok';

exec /usr/sbin/nginx -g 'daemon off;'