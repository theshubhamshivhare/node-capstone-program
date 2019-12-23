FROM node:10

# Create app directory
WORKDIR /src/api-gateway

COPY package.json ./

# Install app dependencies
RUN npm install

RUN npm install pm2 -g

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["pm2", "start", "/src/api-gateway/pm2.config.js"]