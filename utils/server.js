// HTTP — протокол передачи данных по принципу клиент-сервер
// Сеть состоит из узлов
// У каждого узлов сети есть адрес
// У каждого узла сети есть много портов
//   — часто когда вы делаете HTTP-запрос вы делаете его на 80 порт 8080


// Node
// умеет работать с ОС компьютера
// — файлы
// — ос
// — сетевое оборудование

// Сервер
// — программа на компьютере, которая "слушает" определенный порт
//   на который могут прийти запросы

// HTTP-сервер
// — программа на компьютере, которая "слушает" определенный порт
//   (чаще всего 80 или 8080), на который гарантированно приходят
//   HTTP-запросы
// — задача этой программы — сформировать адекватный запросу 
//   HTTP-ответ


// GET /news HTTP/1.1
/**
{
  id: "1",
  title: "Конь-людоед в программе Поле Чудес",
  pic: "",
  url: "/news/1",
}
 */

// GET /news/1 HTTP/1.1
// GET /news/2 HTTP/1.1
// GET /news/3 HTTP/1.1
// GET /news/4 HTTP/1.1
// GET /news/5 HTTP/1.1
// GET /news/6 HTTP/1.1
// GET /news/7 HTTP/1.1
// GET /news/Ivan HTTP/1.1
// GET /news/100 HTTP/1.1
// GET /news/1337 HTTP/1.1

// POST /news HTTP/1.1
// GET /users HTTP/1.1
// GET /weather HTTP/1.1


// Архитектура сервера
// [Разбиратор урлов] (Route Handler) ==> Формирование ответа


// Импортируем модуль 'http'
const http = require('http');

// Определяем hostname и порт
const HOSTNAME = '127.0.0.1'; // Локальный адрес
const PORT = 4000;



// Логика построения сервера
// PHP => (Apache | Nginx)
// Python
// Node.js (JavaScript)
// Java


// Express


// Создаем сервер
const server = http.createServer(async function(req, res) {
  // res
  // res.statusCode
  // res.headers
  // res.body
  // res.end => ответ пользователю отправлен

  const headers = {
    'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };

  switch(req.url) {
    case "/":
      if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
      }

      if (['GET', 'POST'].indexOf(req.method) > -1) {
        res.writeHead(200, headers);
        res.setHeader("Content-Type", "application/json");
        res.end('Hello World');
        console.log("Hello from after response is sent");
      }
    break;

    case "/news/":
    case "/news":
      res.statusCode = 200;
      res.writeHead(200, headers);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(
        {
          id: "1",
          title: "Конь-людоед в программе Поле Чудес",
          pic: "",
          url: "/news/1",
        }
      ));
    break;

    case "/events/":
    case "/events":
      res.statusCode = 200;
      res.writeHead(200, headers);
      res.setHeader("Content-Type", "application/json");
      res.end();
    break;

    case "/pay/":
    case "/pay":
      res.statusCode = 200;
      res.writeHead(200, headers);
      res.setHeader("Content-Type", "application/json");
      res.end();
    break;

    case "/404":
    case "/404/":
    default:
      console.warn("Wrong URL");

      res.statusCode = 404;
      res.writeHead(200, headers);
      res.setHeader("Content-Type", "application/json");
      res.end();
      break;
  }

  console.log("Hello from way after response is sent");

  setTimeout(() => {
    console.log("Hello from waaaaaaaaaay after response is sent");
  }, 5000);
});

// Запускаем сервер и выводим сообщение в консоль
server.listen(PORT, HOSTNAME, function() {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
