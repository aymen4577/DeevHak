# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies with legacy peer deps
<<<<<<< HEAD

RUN npm install 

=======
RUN npm install 
>>>>>>> 9a7cfe2f855d49e5ff44cb13e5e384b1c2104c39
# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Build the app

RUN npm run build

# Expose port 8081 for the app to listen on
EXPOSE 8081

# Start the app
CMD ["npm", "start"]
