#!/bin/sh
set -e

if [ ! -z "$PHP_EXTENSIONS" ]
then
	apt-get update

	for extension in $(echo $PHP_EXTENSIONS | tr "," "\n")
	do
		if [ "$extension" = "gd" ]; then
			apt-get install -y libpng-dev libjpeg-dev;
			docker-php-ext-configure gd --with-jpeg-dir=/usr/include/;
		fi

		if [ "$extension" = "intl" ]; then
			apt-get install -y libicu-dev;
		fi

		if [ "$extension" = "soap" ]; then
			apt-get install -y libxml2-dev;
		fi

		if [ "$extension" = "xsl" ]; then
			apt-get install -y libxslt-dev;
		fi

		if [ "$extension" = "zip" ]; then
			apt-get install -y zlib1g-dev;
		fi

	    docker-php-ext-install ${extension};
	done
fi

exec 'php-fpm'