# test dashboards

Смотреть документацию

backend : Django, DRF, Python
frontend : React, Tailwindcss, js, 
Локальная база для разработки : sqlite 

https://mui.com/x/react-charts/pie/  - библиотека для дашбордов

/apps - код приложений
/core - общие настройки
/frontend/pages/Dashboard.js - пример дашборда


Подготовка окружения

pip install -r requirements.txt
npm install

./manage.py makemigrations
./manage.py migrate

Запуск

Локальный запуск : ./manage.py runserver   
127.0.0.1:8000  - страница с тестовым дашбордом

Для разработки frontend части
cd frontend
npm run build-watch  - пересборка js файлов при изменении

Пересборка css файлов
npx tailwindcss -i ./src/css/input.css -o ./static/frontend/output.css --watch 