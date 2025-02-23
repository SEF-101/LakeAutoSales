FROM node:18-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci
RUN npm install esbuild@0.21.5


COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
