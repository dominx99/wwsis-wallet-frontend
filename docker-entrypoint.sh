chown -R node:node /application/node_modules

npm install

if [ "$APP_ENV" = "dev" ]; then
    npm run start
else
    npm run build
    npm install -g serve
    serve -s build -l 8090
fi
