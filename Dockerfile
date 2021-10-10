FROM node:16-alpine3.11

ENV PYTHONUNBUFFERED=1

RUN apk add --update --no-cache \
    python3 \
    build-base \
    && ln -sf python3 /usr/bin/python

RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

WORKDIR /application

ENV PATH /application/node_modules/.bin:$PATH

COPY . ./

RUN yarn install --silent
RUN yarn add react-scripts -g --silent
