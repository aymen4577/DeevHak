# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies with legacy peer deps


RUN npm install --force

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Build the app

RUN npm run build

# Expose port 8081 for the app to listen on
EXPOSE 8081

# Start the app
CMD ["npm", "start"]
