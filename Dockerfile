FROM node:boron

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn

COPY . /usr/src/app/

ENV NODE_ENV=production 
ENV PORT=3000

CMD [ "yarn", "start" ]

EXPOSE 3000