#!/bin/sh
set -e

if [ ! -z "$PHP_EXTENSIONS" ]
then
    echo "Add extensions";
fi

exec 'php-fpm'