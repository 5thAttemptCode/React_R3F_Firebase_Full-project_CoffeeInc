# making use of the Node.js version 20 Docker image which is built on top of the Alpine Linux, 
# utilizing its small footprint to provide a minimalist environment where Node.js applications can run.
FROM node:20-alpine

# Working directory of the docker container at any given time
WORKDIR /app

# Copy our package.json file from our local system to the docker image
COPY package.json .

# Run npm install inside the docker image to install all our dependencies
RUN npm install

# Copy the rest of the files into the docker image
COPY . .

# Create a production build of our application
RUN npm run build

# Declaring on which port the application “should” run and not must run.
# For running the image a different port can be used
EXPOSE 5173

# Runs only when the container spins up. It is not part of the Image creation process
CMD [ "npm", "run", "dev" ]