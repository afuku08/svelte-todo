# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Run
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/build ./build
COPY --from=builder /app/.svelte-kit ./svelte-kit
COPY --from=builder /app/static ./static
COPY --from=builder /app/src ./src
COPY --from=builder /app/svelte.config.js ./
COPY --from=builder /app/vite.config.ts ./

EXPOSE 3000

CMD ["node", "build"]
