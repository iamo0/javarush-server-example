const { assert, test } = require("./tester");
const { below, clamp } = require("./math");

// Юнит-тесты — тесты отдельных частей кода
// Интеграционные тесты — тесты на то, как разные части кода соотносятся между собой
// e2e — End 2 end — тесты, которые тестируют сквозные сценарии


// Мы можем:
// 1. Не спрашивать разработчика как должна работать функция
//    1.1. Какой интерфейс у этой функции? (как ее вызывать)
//    1.2. Я знаю как работает эта функция не запуская ее, если запуск этого
//         файла не выдает ни одной ошибки
// 2. Запустить этот файл на разных копьютерах разных разработчиков 
//    в разных средах
//    2.1. Можно убедиться что этот код будет работать у других разработчиков
//           - c другой ОС
//           - с другими версиями бибилотек, ноды и т. д.
//    2.2. Можно убедиться что этот код будет корректно работать на сервере
//         на котором хостится этот файл

// Еще один плюс такого файла заключается в том
// что мы гарантируем, что интерфейс функции
// работает вне зависимости от имплементации

// Ассертивно
// Assert

// Более декларативный

// TLD (Test-Last Development) — тесты потом

// expect(clamp(20, 10, 100)).toEqual(20);
// expect(clamp(20, 10, 100)).toBeLessThan(Infinity);
// expect([1, [1, 23], 3]).toEqual([1, [1, 23], 3]);

// Test Driven Development ==> BDD

test("Testing clamp function with values 20, 10, 100. Expecting 20...", () => {
  assert(
    clamp(20, 10, 100) === 20, // Что меня интересует
    "Clamp function with passed value 20 doesn't work correctly" // Что говорить
    // если это не так
  );
});

test("Testing clamp function with values 5, 10, 100. Expecting 10...", () => {
  assert(
    clamp(5, 10, 100) === 10, // Что меня интересует
    "Clamp function with passed value 5 doesn't work correctly" // Что говорить
    // если это не так
  );
});

test("Testing clamp function with values -5, 10, 100. Expecting 10...", () => {
  assert(
    clamp(-5, 10, 100) === 10, // Что меня интересует
    "Clamp function with passed value -5 doesn't work correctly" // Что говорить
    // если это не так
  );
});

test("Testing clamp function with values -Infinity, 10, 100. Expecting 10...", () => {
  assert(
    clamp(-Infinity, 10, 100) === 10, // Что меня интересует
    "Clamp function with passed value -Infinity doesn't work correctly" // Что говорить
    // если это не так
  );
});

// clamp(Infinity, 10, 100);
// clamp(NaN, 10, 100);
// clamp(5, -Infinity, 100);
// clamp(5, 10, Infinity);
// clamp(5, NaN, 100);
// clamp(5, 10, NaN);



// 


// Как сравнивать массивы
// Как сравнивать объекты

/*
  TDD (Test-Driven Development)
  Если у вас есть тесты, вы можете писать код сначала в тестах
  1. Можно сразу перечислить все корнер-кейсы
  2. Пока я пишу вызов функции, я сразу придумываю ее интерфейс
*/

// Assertion Library — библиотека, которая предоставляет
// ассертивные функции в большом объеме

// Test Runner — программа, которая запускает тестовые файлы
// math.test.js

// __tests__
//   > math.js


// 1. Установить test runner
// 2. Установить assertion lib
// 3. Запустить тесты