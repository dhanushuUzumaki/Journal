echo "Bootstraping..."
jq '.PRISMA_MANAGEMENT_API_SECRET="'"$PRISMA_MANAGEMENT_API_SECRET"'"' config.json | \
jq '.PRISMA_PORT="'"$PRISMA_PORT"'"' | \
jq '.PRISMA_SERVICE_NAME="'"$PRISMA_SERVICE_NAME"'"' | \
jq '.GRAPHQL_SERVER_PORT="'"$GRAPHQL_SERVER_PORT"'"' | \
jq '.APOLLO_ENGINE_KEY="'"$APOLLO_ENGINE_KEY"'"' > temp.json
mv temp.json config.json
if [ "$DEPLOY_PRISMA" == "true" ]; then
  echo PRISMA_ENDPOINT=${PRISMA_ENDPOINT} | cat > .env
  echo PRISMA_MANAGEMENT_API_SECRET=${PRISMA_MANAGEMENT_API_SECRET} | cat >> .env
  echo ".env file created."
  echo "Running Prisma Deploy.."
  npm run prisma:deploy
fi
echo "Starting application"
npm start
