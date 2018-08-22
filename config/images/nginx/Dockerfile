FROM nginx:1.14-alpine

ADD entrypoint.sh /
RUN chmod +x /entrypoint.sh

ADD etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/bin/sh", "-c", "/entrypoint.sh"]