FROM node:14.17.3-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . ./

RUN npm run build

FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
