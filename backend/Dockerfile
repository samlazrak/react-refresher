FROM node

RUN mkdir /home/app
WORKDIR /home/app

COPY package.json /home/app/
COPY yarn.lock /home/app/

COPY . /home/app

RUN yarn install

EXPOSE 4000

RUN yarn global add knex

CMD ./startup.sh