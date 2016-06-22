FROM node:6

ADD src/ /app/src
ADD package.json /app

RUN cd app;\
    npm install --production

EXPOSE 8080

CMD ["node", "app/src/index.js"]
