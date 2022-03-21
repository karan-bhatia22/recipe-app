FROM --platform=arm64 node:16
WORKDIR /home/node/recipes
COPY . /home/node/recipes/
RUN npm install
CMD npm run dev
EXPOSE 8080