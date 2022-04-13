FROM node:14.17.3-slim

ENV NODE_ENV=production

ENV PORT=5000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]

