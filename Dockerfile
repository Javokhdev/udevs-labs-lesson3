# FROM node:16
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .

# CMD ["node", "src/server.js"]
# Build stage
FROM node:16-alpine as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Production stage
FROM node:16-alpine

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app /app

# Run the application
CMD ["node", "src/server.js"]
