FROM mcr.microsoft.com/playwright:v1.63.0-noble
WORKDIR /app
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y build-essential \
    && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
