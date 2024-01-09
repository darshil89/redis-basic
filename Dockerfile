# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json into the Docker image
COPY package*.json ./

# Install application dependencies in the Docker image
RUN npm install

# Copy the rest of the application code into the Docker image
COPY . .

# Expose port 8080 in the Docker image
EXPOSE 8080

# Define the command to run the application
CMD [ "node", "server.js" ]