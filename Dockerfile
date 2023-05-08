# Pobierz obraz z Node.js
FROM node:latest

# Utwórz katalog aplikacji
WORKDIR /app

# Skopiuj pliki aplikacji do kontenera
COPY package*.json ./
COPY . .

# Ustaw wartość domyślną zmiennej środowiskowej NODE_ENV na 'development'
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Zainstaluj zależności
RUN npm install

# Otwórz port, na którym działa aplikacja
EXPOSE 3000

# Uruchom aplikację w zależności od zmiennej środowiskowej NODE_ENV
CMD if [ "${NODE_ENV}" = "production" ]; \
    then \
      npm run build && npm run start:prod; \
    else \
      npm run start:dev; \
    fi