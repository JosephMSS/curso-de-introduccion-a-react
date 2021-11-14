FROM node:16

ADD ["package.json","yarn.lock","/usr/src/"]

WORKDIR /usr/src

RUN yarn install

COPY [".","/usr/src/"]

EXPOSE 3000

