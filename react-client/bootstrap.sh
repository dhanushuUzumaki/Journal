echo "Bootstraping..."
jq '.GRAPHQL_ENDPOINT="'"$GRAPHQL_ENDPOINT"'"' config.json | \
jq '.REACT_CLIENT_PORT="'"$REACT_CLIENT_PORT"'"' > temp.json
mv temp.json config.json
echo "updated config.json"
cat config.json
echo "Building.."
npm run build
echo "Starting application"
npm start
