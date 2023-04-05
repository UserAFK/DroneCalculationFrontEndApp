# Збірка додатка
FROM node:lts-buster AS build

# Установіть git для клонування репозиторію
RUN apt-get update && \
    apt-get install -y git

WORKDIR /app

# Клонуйте ваш репозиторій GitHub
RUN git clone --branch dev https://github.com/UserAFK/DroneCalculationFrontEndApp.git .

# Встановіть залежності та зібрайте ваш додаток
RUN npm ci
RUN npm run build

# Розгортання додатка
FROM nginx:stable-alpine
COPY --from=build /app/dist/front-end-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
