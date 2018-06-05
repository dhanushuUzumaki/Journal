echo "Bootstraping..."
echo PRISMA_ENDPOINT=${PRISMA_ENDPOINT} | cat > .env
echo PRISMA_MANAGEMENT_API_SECRET=${PRISMA_MANAGEMENT_API_SECRET} | cat >> .env
echo ".env file created."
cat .env
echo "Running Prisma Deploy.."
npm run prisma:deploy
echo "Starting application"
npm start
