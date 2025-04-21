const fs = require("fs");
const express = require("express");

const PORT = 4001;

const server = express();


const News = {
  "1": {
    title: "Конь-Людоед в программе Поле Чудес",
    date: "2024-10-10",
    text: "<p>Гаишник дал взятку сотруднику ГАИ</p>",
  },
  "2": {
    title: "Прошла лекция по программированию",
    date: "2025-04-21",
    text: "<p>Лекция прошла на немецком</p>",
  },
  "3": {
    title: "Добавилась новость",
    date: "2025-04-21",
    text: "<p>Лектор были в восторге</p>",
  },
};


// Express
// Koa

// Express использует штуку
// которая называется Router
// — разбирает урлы (умным способом)
//   - есть паттерн матчинг
// - отправляет стандартные ошибочные запросы

const router = express.Router();

// Маршрут для главной страницы
router.get("/", function (req, res) {
  try {
    const data = fs.readFileSync('./views/index.nehtml', { encoding: 'utf8', flag: 'r' });
    res.status(200);
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get("/news/", function(req, res) {
  try {
    res.status(200);
    res.setHeader("Content-Type", "text/html");
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/css/main.css" type="text/css" />
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <h1>Свежайшие новости</h1>

  <ul>${
    Object.entries(News).map(([id, n]) => `<li><date>${n.date}</date><a href="/news/${id}">${n.title}</a></li>`).join("")
  }

</body>
</html>
`);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get("/news/:newsId", function(req, res) {
  try {
    const pieceOfNews = News[req.params.newsId];

    if (pieceOfNews === undefined) {
      return res.sendStatus(404);
    }

    res.status(200);
    res.setHeader("Content-Type", "text/html");
    res.render(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <h1>${pieceOfNews.title}</h1>
  <date>${pieceOfNews.date}</date>

  <article>${pieceOfNews.text}</article>

</body>
</html>
`);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get("/:addr", function (req, res) {
  try {
    const data = fs.readFileSync(`./views/${req.params.addr}.nehtml`, { encoding: 'utf8', flag: 'r' });
    res.status(200);
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  } catch (err) {
    res.sendStatus(500);
  }
});


// Middleware
server.use(express.static("static"));
server.use(router);

// Middleware
// 
//            Middleware
// Запрос => [function Auth|function setJson|function setCORS|function] => Отправка


// Запуск сервера
server.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
