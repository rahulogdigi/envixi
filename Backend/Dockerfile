# the base image from which the app is built upon
FROM node:14.18.1

# Runs the mkdire command to create /usr/src/app inside docker container
RUN mkdir -p /usr/src/app

# Sets the work directory to /usr/src/app 
WORKDIR /usr/src/app

# Copies the contents of the current directory into the working directory inside the # docker container
COPY . /usr/src/app

ENV PORT=3000
ENV JWT_SECRET="ilovemyindia"
ENV JWT_TIMEOUT_DURATION="1800s"
ENV JWT_TIMEOUT_DURATION_REF="3600s"
ENV NODE_ENV="development"
ENV BASE_URL = "http://localhost:3000/api"
ENV SENDER_EMAILD="envixibrsr@gmail.com"
ENV SENDER_EMAILD_PASSWORD="kwohjybybmdwbxfx"

# Exposes port 3000 outside the docker container
EXPOSE 3000

# Runs the npm install command to install dependencies
RUN npm install

# Provides the command required to run the application
CMD ["npm", "start"]