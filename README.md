# Готовая сборка webpack с шаблонизатором PUG

В ней есть оптимизация и минимизация:

1. JavaScript (babel)
2. SCSS
3. HTML
4. Сжатие картинок
5. Работа со шрифтами
6. Проверка кода **ESLint**
7. Webpack-dev-server
8. Поддержка сетки **smart-grid** (это миксины, которые облегчают адаптивную верстку проекта, как в bootstrap: xs,sm,md,lg,xl)
9. **Описание ошибок выводится прямо в браузере**

## Установка

Клонируем к себе репозиторий

Сделайте **git clone**
Смените директорию **cd webpack-template-base_Pug**
Запустите  **npm install**

## Работа

###### Smart-grid включается
даем команду **npm run smart-grid**
в папке SCSS/UTILS появляется файл **_smart-grid.scss** 
его нужно подключить туда, где хотите применять сетку


##### Для разработки:

даем команду **npm run dev**

Получаем комфортную среду для отладки, есть карты кода (source maps)

##### Для продакшена:

даем команду **npm run prod**

Получаем минимизированный / сжатый код

##### Для проверки правильности кода:

**npm run lint**
