FROM node:9
RUN npm install -g nightwatch
COPY . /home/node/nw-sandbox
WORKDIR /home/node/nw-sandbox
