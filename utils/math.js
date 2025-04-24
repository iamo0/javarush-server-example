function clamp(val, min, max) {
  if (isNaN(val)) {
    return min;
  }

  if (val < min) {
    return min;
  }

  if (val - max > 0) {
    return max;
  }

  return val;
}

// (c) У __меня__ локально все работает
// - разные среды
// Я запустил у себя в Ноде
// - какая ОС? Mac
// - какая версия? 15.4.1 (sequoia)
// - где запускал? в терминале
// - какая версия ноды? 23.11

// Ubuntu
// LTS (22)
// Node LTS (20.12.2)

// x, min, max =>
// x > min && x < max ==> x
// x < min ==> min
// x > max ==> max

// 5, 10, 100 ==> 5
// -5
// 0b001
// 08
// 0xFF
// Infinity
// -Infinity
// NaN

// 1. За каждым кодом стоит бизнес-задача
// 2. У каждой бизнес-задачи есть условия
// 3. Эти условия бывают нормальными (средними, популярными, общими, обычными),
//    а бывают т.н. corner case, т.е. пограничные состояния

function below(val, arr) {
  if (typeof val !== "number") {
    throw new TypeError("Given value should be of type 'number'");
  }

  return arr.filter((el) => el < val);
}

module.exports = {
  below,
  clamp
};
