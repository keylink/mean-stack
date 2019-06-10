FROM node:8

# Create app directory
WORKDIR /usr/src/app
ADD . /usr/src/app

# Install app dependencies

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 9090
CMD [ "npm", "start" ]
