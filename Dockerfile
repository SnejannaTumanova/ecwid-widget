# Используем образ Node.js
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь проект
COPY . .

# Сборка приложения
RUN npm run build

# Запуск сервера
CMD ["npm", "start"]
