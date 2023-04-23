# ---- Base Node ----
FROM node:16 AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm ci

# ---- Build React app ----
FROM dependencies AS build
COPY . .
RUN npm run build

# ---- Nginx & Supervisord ----
FROM nginx:1.21
# Install Node.js
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/server /app/server
COPY --from=build /app/node_modules /app/node_modules
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY supervisord.conf /etc/supervisord.conf
RUN apt-get update && apt-get install -y supervisor

# Expose the API port
EXPOSE 9000

# Start supervisord
CMD ["supervisord", "-c", "/etc/supervisord.conf"]
