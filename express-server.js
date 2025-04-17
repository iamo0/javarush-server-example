const express = require("express");
const cors = require("cors");

const PORT = 4001;

const server = express();


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
  res.send("Hello from Express!");
});

router.get("/news", function (req, res) {
  // Chaning
  res
    .status(200)
    .json({
      id: "1",
      title: "Конь-людоед в программе Поле Чудес",
      pic: "",
      url: "/news/1",
    });
});

router.get("/news/:id", function (req, res) {
  const newsID = req.params.id;

  // Chaning
  res
    .status(200)
    .send(`Certain piece of news with id ${newsID}`);
});

server.use(function(req, res, next) {
  res.header("Content-Type", "application/json");
  next();
});

server.use(cors);

server.use(function(req, res, next) {
  const auth = req.headers.get("Authorization");

  if (auth && auth === "iwjdijw98u88u") {
    next();
    return;
  }

  res.send(403);
});

server.use(router);

// Middleware
// 
//            Middleware
// Запрос => [function Auth|function setJson|function setCORS|function] => Отправка


// Запуск сервера
server.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
