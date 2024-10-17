FROM node:18-alpine as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN chmod +x /usr/local/app/build.sh
RUN /usr/local/app/build.sh

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/local/app/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN service nginx restart

EXPOSE 80
