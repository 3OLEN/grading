FROM node:20.11-alpine

LABEL fr.asso.ort.lyon.author="Billy Villena <billy.villena@lyon.ort.asso.fr>"

# Install system dependencies
RUN apk update \
    && apk add -y --no-cache \
        bash

RUN npm install --global \
    npm@10.4.0

WORKDIR /usr/project

# Define user to prevent root-user; set host current user gid and uid to bind both users for better permissions
RUN addgroup --gid 1001 ci \
    && adduser --disabled-password --uid 1001 --ingroup ci ci \
    && chown -R ci /usr/project

USER ci

# Dependencies => clean install
COPY --chown=ci:ci ./package.json ./package-lock.json ./

RUN npm ci

# Install ci tools
## eslint
RUN npm install --save-dev \
    eslint@8.56 \
    eslint-config-canonical \
    eslint-plugin-json-format \
    eslint-plugin-sonarjs \
    @angular-eslint/eslint-plugin \
    @html-eslint/parser \
    @html-eslint/eslint-plugin
## dprint
RUN npm install --save-dev \
    dprint
## stylelint
RUN npm install --save-dev \
    stylelint@16.2 \
    stylelint-config-standard-scss

ENV DPRINT_CACHE_DIR=/usr/project/var/ci/cache/dprint/
