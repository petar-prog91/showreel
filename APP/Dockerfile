FROM node:carbon

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

RUN npm install
RUN ls
RUN npm run build

CMD ["node", "app.js"]

EXPOSE 4040