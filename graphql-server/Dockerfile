FROM node:8.11.1
ARG PORT
ARG PRISMA_ENDPOINT
ARG PRISMA_API_SECRET
ENV PORT "$PORT"
ENV PRISMA_ENDPOINT "$PRISMA_ENDPOINT"
ENV PRISMA_API_SECRET "$PRISMA_API_SECRET"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN echo PORT=${PORT} | cat > .env
RUN echo PRISMA_ENDPOINT=${PRISMA_ENDPOINT} | cat >> .env
RUN echo PRISMA_API_SECRET=${PRISMA_API_SECRET} | cat >> .env
RUN cat .env
RUN npm install
COPY . .
RUN chmod +x ./wait-for-it.sh

EXPOSE ${PORT}
