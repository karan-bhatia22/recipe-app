FROM --platform=arm64 node:16-alpine
WORKDIR /home/node/image-upload
COPY . /home/node/image-upload/
RUN npm install --production
CMD node dist/index.js