# Node setup
FROM node:14-alpine AS build-step

RUN mkdir -p /app
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Nginx setup
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=build-step /app/dist/rock-paper-scissors /usr/share/nginx/html