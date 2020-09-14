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
9. Возможность использования глобальных переменных ENV
10. **Описание ошибок выводится прямо в браузере**
11. Поддержка **jest** с покрытием кода

----
**если нужна сборка без шаблонизатора, то она тут**
[https://github.com/abyss-soft/webpack-template-base ](https://github.com/abyss-soft/webpack-template-base ) 

**если нужна сборка с Vue и Vuex то она тут**
[https://github.com/abyss-soft/webpack-template-base_vue_vuex](https://github.com/abyss-soft/webpack-template-base_vue_vuex) 


**если нужна простая сборка с gulp 4.0, то она тут**
[https://github.com/abyss-soft/gulp4-html](https://github.com/abyss-soft/gulp4-html) 

----

## Установка

Клонируем к себе репозиторий

Сделайте **git clone**

Смените директорию **cd webpack-template-base_Pug**

Запустите  **npm install**

---

## Работа

###### для включения Smart-grid 

даем команду **npm run smart-grid**

в папке SCSS/UTILS появляется файл **_smart-grid.scss** 

его нужно подключить туда, где хотите применять сетку

----

##### Для разработки:

даем команду **npm run dev**

Получаем комфортную среду для отладки, есть карты кода (source maps)

---
##### Использования глобальных переменных ENV
переменные экспортируются в файле webpack.dev.conf.js

Например:

    APP_ENV: JSON.stringify(process.env.APP_ENV),
    API_KEY: JSON.stringify(process.env.API_KEY)

Использовать в коде можно например так:

    if (APP_ENV === "dev") {..код  для разработки..}

Или так, используя глобальную переменную process.env:

    if (process.env.NODE_ENV !== `production`) {..код только для разработки, в продакшен не попадет..}

---

##### Для продакшена:

если использовали глобальные переменные, то устанавливаем переменную **APP_ENV=prod**

даем команду **npm run prod**

Получаем папку dist содержащую минимизированный / сжатый код

---

##### Для проверки правильности кода:

**npm run lint**

---

##### Для проверки тестов:

**npm run test**
