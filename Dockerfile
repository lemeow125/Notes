FROM node:23-alpine AS build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN apk update && apk add git
# Use npm cache located at /tmp/.npm and node_modules cache at /tmp/.node
RUN --mount=type=cache,target=/tmp/.npm \
    --mount=type=cache,target=/tmp/.node \
    npm install --save-dev --cache /tmp/.npm
RUN npm run build

FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/local/app/build/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
