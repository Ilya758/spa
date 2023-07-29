FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package.json yarn.lock ./

RUN set -ex; \
      yarn cache clean; \
      yarn

COPY . .

CMD ["yarn", "next"]