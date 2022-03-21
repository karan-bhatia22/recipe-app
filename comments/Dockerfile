FROM --platform=arm64 node:16-alpine
WORKDIR /home/node/comments
COPY . /home/node/comments/
RUN npm install --production
CMD node dist/index.js