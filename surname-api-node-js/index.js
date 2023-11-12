const express = require('express')
const app = express()
const port = 5001

const person = 'Янковская'
  
  // Рут для метода DELETE
  app.delete('/person', (req, res) => {
    res.send(`Фамилия: ${person}`);
  });
  
  // Слушаем порт
  app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
  });