FROM node:lts

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 4000

CMD [ "npm", "run", "dev" ]