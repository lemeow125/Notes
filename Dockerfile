FROM node:18-alpine as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install --save-dev
RUN npm run build

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/local/app/build/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN service nginx restart

EXPOSE 80
