# Pobierz obraz z Node.js
FROM node:latest

# Utwórz katalog aplikacji
WORKDIR /app

# Skopiuj pliki aplikacji do kontenera
COPY package*.json ./
COPY . .

# Zainstaluj zależności
RUN npm install

# Otwórz port, na którym działa aplikacja
EXPOSE 3000

# Uruchom aplikację
CMD ["npm", "run", "start:dev"]