######################################################################
# This stage install dependencies and build the application          #
######################################################################
FROM node:16.1-alpine as builder
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --pure-lockfile

COPY . .

RUN yarn run build && yarn start
