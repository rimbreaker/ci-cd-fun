FROM node:14.17.6-alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN ls -l
RUN pwd
COPY yarn.lock /app
RUN yarn

# Bundle app source
COPY . /app
RUN yarn build

EXPOSE 3030
CMD [ "yarn", "dev" ]