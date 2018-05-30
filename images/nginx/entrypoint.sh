#!/bin/sh
set -e

if [ ! -z "$MAX_UPLOAD_SIZE" ]
then
    echo "Set max upload size";
    sed -i "s/#MAX_UPLOAD_SIZE#/client_max_body_size ${MAX_UPLOAD_SIZE};/g" /etc/nginx/conf.d/default.conf
fi

if [ ! -z "$PHP_CONTAINER_ID" ]
then
	echo "Add php container link";
	php_container_link="location ~ \.php$ {\n\
        fastcgi_pass   ${PHP_CONTAINER_ID}:9000;\n\
        fastcgi_index  index.php;\n\
        fastcgi_param  SCRIPT_FILENAME  \$document_root\$fastcgi_script_name;\n\
        include        fastcgi_params;\n\
    }";

    sed -i "s/#PHP_CONTAINER_LINK#/${php_container_link}/g" /etc/nginx/conf.d/default.conf
fi

exec /usr/sbin/nginx -g 'daemon off;'
