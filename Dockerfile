FROM node:22-alpine

WORKDIR /app

# Dependencies installieren
COPY package*.json ./
RUN npm install

# Code kopieren
COPY . .

# Port freigeben
EXPOSE 5173

# Vite Dev Server starten
CMD ["npm", "run", "dev"]