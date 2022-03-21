FROM --platform=arm64 node:16-alpine
WORKDIR /home/node/recipes
COPY . /home/node/recipes/
RUN npm install --production
CMD node dist/index.js
EXPOSE 8080