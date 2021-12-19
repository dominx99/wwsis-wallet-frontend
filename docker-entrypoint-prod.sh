chown -R node:node /application/node_modules

npm install
npm run build

node server
