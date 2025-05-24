FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose backend port
EXPOSE 4000

# Start the backend server
CMD [ "npm", "run", "dev" ]
