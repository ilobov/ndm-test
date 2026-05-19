const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    // Получаем заголовок (регистр не важен)
    const xForwardedFor = req.headers['x-forwarded-for'];
    
    res.json({
        'X-Forwarded-For': xForwardedFor || 'Заголовок отсутствует'
    });
});

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));

