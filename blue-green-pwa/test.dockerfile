#Base image from alpine
FROM node:20.5-alpine

#Create working directory
WORKDIR /app

# Copy package.json and package-lock.json files to working directory
COPY ["package.json", "package-lock.json*", "./"]

# Install IONIC and other dependencies
RUN npm install -g @ionic/cli
# RUN npm install react-scripts

RUN npm install

# Add the apllication
COPY ./ /app/

# Start the application
ENTRYPOINT ["ionic", "serve", "--external", "--consolelogs"]

# Open port
EXPOSE 8100