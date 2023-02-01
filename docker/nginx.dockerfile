FROM nginx
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.orig

# COPY nginx.conf /etc/nginx/nginx.conf
# RUN mkdir -p /etc/nginx/www
# COPY docker/files/nginx.uzbnb.conf /etc/nginx/conf.d/uzbnb.conf

# RUN mkdir -p /var/www/html/uzbnb/

EXPOSE 80
EXPOSE 443