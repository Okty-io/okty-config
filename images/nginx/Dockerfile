FROM nginx:1.14-alpine

ADD entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/bin/sh", "-c", "/entrypoint.sh" ]