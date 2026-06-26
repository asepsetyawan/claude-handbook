# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# VitePress lastUpdated requires git during the build
RUN apk add --no-cache git

COPY package.json package-lock.json ./
RUN npm ci

COPY docs ./docs
RUN npm run build

# Production stage — Dokploy handles reverse proxy / TLS
FROM node:22-alpine AS production

WORKDIR /app

ENV PORT=8080
ENV HOST=0.0.0.0

COPY package.json package-lock.json ./
RUN npm ci

COPY docs/.vitepress/config.mts docs/.vitepress/config.mts
COPY --from=build /app/docs/.vitepress/dist ./docs/.vitepress/dist

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:8080/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["sh", "-c", "npx vitepress preview docs --host $HOST --port $PORT"]
