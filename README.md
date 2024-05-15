# test dashboards

**Смотреть документацию**

backend : Django, DRF, Python

frontend : React, Tailwindcss, js, 

Локальная база для разработки : sqlite 

https://mui.com/x/react-charts/pie/  - js библиотека для дашбордов

_/apps_ - код приложений

_/core_ - общие настройки

_/frontend/pages/Dashboard.js_ - пример дашборда
____________________________________________________
**backend api**

_apps/dashboards/models.py_ - модель данных в БД

_apps/dashboards/url.py_ - маршрутизация, url для получения данных

_apps/dashboards/serializer.py_ - сериализация данных из БД в json

_apps/dashboards/view.py_ - логика получения данных   (связывает url и serializer )

_core/settings.py_ - общие настройки проекта (например, подключение к БД)

_apps/users_ - код, если нужно прикрутить авторизацию

**frontend**

_frontend/src/api/fetchDashboard.js_ - получение данных на уровне клиента

_frontend/src/pages/Dashboard.js_ - непосредственно код дашборда (React)

_frontend/template/frontend/index.html_ - шаблон html, формирует страницу с использованием React - компонентов (подключает сформированный js и css файлы)

_frontend/src/frontend/App.js_ - маршрутизация на уровне клиента

_frontend/src/css/input.css_  - свои стили

_frontend/static/frontend/output.css_ - стили собранные из классов  Tailwindcss + input.css  (файл, который непосредственно подключается к странице)

_frontend/static/frontend/main.js_ - скомпилированные React компоненты (файл, который непосредственно подключается к странице)
______________________________________________________________________________

**Как использовать в разработке**

1) Склонировать проект
2) Установить зависимости
    - pip install -r requirements.txt
    - cd frontend
    - npm install
3) Сделать миграции
    - ./manage.py makemigrations
    - ./manage.py migrate
4) Запуск сервера для разработки
    - ./manage.py runserver (запускаем в отдельной консоли)
    - 127.0.0.1:8000 - после запуска, должна быть доступна страница с тестовым дашбордом
    - При изменении кода в backend части, он перезапускается автоматически, иногда рестартить руками
5)  Запускаем отслеживание изменений js файлов (Собираем main.js)
    - cd frontend
    - npm run build-watch  (запускаем в отдельной консоли)

6) Запускаем отслеживание изменений css файлов (Собираем output.css)
    - cd frontend
    - npx tailwindcss -i ./src/css/input.css -o ./static/frontend/output.css --watch  (запускаем в отдельной консоли) 

7) Разработка
