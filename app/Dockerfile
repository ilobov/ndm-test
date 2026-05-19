FROM node:20-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=production
USER node
EXPOSE 3000
CMD ["node", "server.js"]
