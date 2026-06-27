FROM oven/bun:latest as builder

WORKDIR /app

COPY package*.json ./

RUN bun install

COPY . .

RUN bun run build

# Production stage
FROM oven/bun:latest

WORKDIR /app

RUN bun install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
