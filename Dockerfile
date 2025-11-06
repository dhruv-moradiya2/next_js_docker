FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

# Build arguments for environment variables
ARG NEXT_PUBLIC_APP_NAME
ARG NEXT_PUBLIC_VERSION  
ARG NEXT_PUBLIC_API_URL

# Set environment variables from build args
ENV NEXT_PUBLIC_APP_NAME=$NEXT_PUBLIC_APP_NAME
ENV NEXT_PUBLIC_VERSION=$NEXT_PUBLIC_VERSION
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]

# docker build -t nextjs-nginx .

# docker run -d -p 8085:80 nextjs-nginx:latest