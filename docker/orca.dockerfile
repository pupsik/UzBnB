FROM node:alpine

# Install nginx
#RUN apk add nginx

# Creating new user group
# RUN adduser -D -g 'www' www


# We will put the repo itself here
RUN mkdir -p /app
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app/package.json
RUN npm install 

COPY . /app/

RUN npm run build

# Move build files to the directory nginx will use for serving 
# RUN mkdir -p /var/www/html/uzbnb
# RUN chown -R www:www /var/www
# RUN cp -R /app/build/ /var/www/html/uzbnb/

# Prep nginx 
# Rename the original nginx file so we can add our own
# RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig

# Add our custom nginx config file
# COPY nginx.conf /etc/nginx/nginx.conf
# RUN mkdir -p /etc/nginx/www
# RUN chown -R www:www /etc/nginx
# COPY nginx.uzbnb.conf /etc/nginx/www/uzbnb.conf



# EXPOSE 80
# EXPOSE 443

# CMD ["nginx", "-g", "daemon off;"]



