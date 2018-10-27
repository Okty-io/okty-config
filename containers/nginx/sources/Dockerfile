FROM nginx:1.14-alpine

ADD default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/bin/sh", "-c", "/entrypoint.sh"]