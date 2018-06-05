FROM php:7.2-fpm

ADD entrypoint.sh /
RUN chmod +x /entrypoint.sh
RUN apt-get install git && apt-get clean
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ENTRYPOINT ["/bin/sh", "-c", "/entrypoint.sh"]