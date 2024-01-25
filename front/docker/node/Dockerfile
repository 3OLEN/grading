FROM node:20.11-alpine

LABEL fr.asso.ort.lyon.author="Billy Villena <billy.villena@lyon.ort.asso.fr>"

# Install system dependencies
RUN apk update \
    && apk add -y --no-cache \
        bash

# Install angular cli
RUN npm install -g @angular/cli@17

WORKDIR /usr/project

# Define user to prevent root-user; set host current user gid and uid to bind both users for better permissions
RUN addgroup --gid 1001 app \
    && adduser --disabled-password --uid 1001 --ingroup app app \
    && chown -R app /usr/project

USER app

# Dependencies
COPY --chown=app:app ./package.json ./package-lock.json ./node_modules/ ./

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
