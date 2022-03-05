FROM node:12
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm ci
EXPOSE 5000
CMD ["node", "server.js"]