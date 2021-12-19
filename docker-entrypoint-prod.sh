chown -R node:node /application/node_modules

npm install
npm run build

npm install -g serve
serve -s build -l 80
