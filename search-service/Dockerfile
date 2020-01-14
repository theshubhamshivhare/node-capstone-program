FROM node:10

# Create app directory in container
WORKDIR /src/search-service

#Copy package.json file into the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

RUN npm install pm2 -g

# COPY all app source code into the working directory of containeer
COPY . .

EXPOSE 3000

CMD ["pm2", "start", "/src/search-service/pm2.config.js"]