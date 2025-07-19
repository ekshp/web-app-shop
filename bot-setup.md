# Настройка Telegram Bot для Web App

## 1. Настройка через @BotFather

### Шаг 1: Установите Web App
```
/setmenubutton
@your_bot_username
```
Введите название кнопки: "Открыть магазин"
Введите URL: https://el-buyer-usernameesh.amvera.io

### Шаг 2: Настройте команды
```
/setcommands
@your_bot_username
```
Введите:
```
start - Открыть магазин
help - Помощь
```

### Шаг 3: Настройте описание
```
/setdescription
@your_bot_username
```
Введите описание вашего магазина.

## 2. Альтернативный способ - inline кнопка

Если у вас есть серверная часть, добавьте обработчик команды /start:

```javascript
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🛍 Открыть магазин',
            web_app: { url: 'https://el-buyer-usernameesh.amvera.io' }
          }
        ]
      ]
    }
  };
  bot.sendMessage(chatId, 'Добро пожаловать в наш магазин!', opts);
});
```

## 3. Проверка

1. Найдите вашего бота в Telegram
2. Нажмите /start
3. Должна появиться кнопка "Открыть магазин" или кнопка меню
4. При нажатии откроется ваше Web App

## Текущие настройки:
- Bot Token: 7634995766:AAG0BmXY8d5W2GXtzOElxIm0Q65dZoz-MF8
- Web App URL: https://el-buyer-usernameesh.amvera.io
- Backend URL: https://el-buyer-usernameesh.amvera.io
