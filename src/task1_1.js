// 1. CSV representation of array

// Создайте функцию, которая возвращает CSV-представление двумерного числового массива.

// Example: input: [
//   [0, 1, 2, 3, 4],
//   [10, 11, 12, 13, 14],
//   [20, 21, 22, 23, 24],
//   [30, 31, 32, 33, 34],
// ];

// output: '0,1,2,3,4\n' +
//   '10,11,12,13,14\n' +
//   '20,21,22,23,24\n' +
//   '30,31,32,33,34';

function toCsvText(array) {
  return array.flatMap(e => e + '').join('\n');
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);

// 2. Sum of differences in array

// Ваша задача — просуммировать различия между последовательными парами в массиве в порядке убывания.

// Пример
// [2, 1, 10]  -->  9

function sumOfDifferences(arr) {
  const arrSort = arr.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < arrSort.length - 1; i++) {
    sum += arrSort[i + 1] - arrSort[i];
  }
  return sum;
}

console.log(
  sumOfDifferences([-13, 4, -19, 5, 15, -12, -20, 1, -13, -10, -7, -9, -5])
);

// 3. Another card game

// Двенадцать карточек с оценками от 0 до 11, случайным образом разделенных между 3 игроками:
// Фрэнком, Сэмом и Томом, по 4 карточки каждому. Игра состоит из 4 раундов.
// Цель раунда — пройти по карте с наибольшим количеством очков.
// В первом раунде первый игрок, у которого есть карта с 0 очков, делает первый ход,
// и он начинает с этой картой. Затем второй игрок (очередь — Фрэнк -> Сэм -> Том -> Фрэнк и т. д.)
// может ходить любой своей картой (каждая карта используется только один раз за игру,
// и нет правил, требующих от игроков делать только лучшие ходы).
// Третий игрок делает свой ход после второго игрока, и он видит предыдущие ходы.
// Победитель предыдущего раунда делает первый ход в следующем раунде любой оставшейся картой.
// Игрок, выигравший 2 раунда первым, побеждает в игре.

// Задача
// Верните true, если у Фрэнка есть шанс выиграть игру.
// Верните false, если у Фрэнка нет шансов.

// Вход
// 3 массива по 4 уникальных числа в каждом (числа в массиве отсортированы по возрастанию).
// Ввод всегда действителен, не нужно проверять.

function solution(frank, sam, tom) {
  return (
    Math.max(...frank) > Math.min(...sam) &&
    Math.max(...frank) > Math.min(...tom)
  );
}

console.log(solution([0, 1, 4, 5], [2, 6, 7, 8], [3, 9, 10, 11]));

// 4.Numbers Which Sum of Powers of Its Digits Is The Same Number

// Не считая числа 1, число 153 является первым целым числом, обладающим этим свойством:
// сумма третьей степени каждой его цифры равна 153. Посмотрите: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27. = 153

// Следующее число, которое экспериментирует с этим конкретным поведением, — 370 с той же мощностью.

// Напишите функцию eq_sum_powdig(), которая находит числа ниже заданного верхнего предела hMax (включительно),
// удовлетворяющие этому свойству, но с разными показателями степени в качестве степени цифр.

// eq_sum_powdig(hMax, exp): ----> последовательность чисел (отсортированный список) (номер один не должен учитываться).

function eqSumPowdig(hMax, exp) {
  const arr = [];
  for (let i = 2; i <= hMax; i++) {
    if (
      (i + '').split('').reduce((pre, el) => pre + Math.pow(+el, exp), 0) === i
    ) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(eqSumPowdig(370, 3));

// 5.Survive the attack

// Каждый солдат атакует солдата противника с тем же индексом массива. Выживший - это число с наибольшим значением.
// Если значение одинаковое, они оба погибают
// Если одно из значений пусто (различная длина массива), солдат с непустым значением выживает.
// Чтобы выжить, обороняющаяся сторона должна иметь больше выживших, чем атакующая сторона.
// В случае, если с обеих сторон одинаковое количество выживших,
// побеждает команда с наибольшей начальной силой атаки. Если общая сила атаки обеих сторон одинакова, верните true.
// Начальная сила атаки представляет собой сумму всех значений в каждом массиве.

// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]
//0 survivors                4 survivors
//return true

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]
//1 survivors                3 survivors
//return true

function hasSurvived(attackers, defenders) {
  const attPowAt = attackers.reduce((pre, el) => pre + el, 0);
  const attPowDef = defenders.reduce((pre, el) => pre + el, 0);
  let attServ = 0;
  let defServ = 0;

  if (attackers.length >= defenders.length) {
    attackers.map((el, i) =>
      el > defenders[i]
        ? attServ++
        : el < defenders[i]
        ? defServ++
        : el == defenders[i]
        ? 0
        : attServ++
    );
  } else {
    defenders.map((el, i) =>
      el > attackers[i]
        ? defServ++
        : el < attackers[i]
        ? attServ++
        : el == attackers[i]
        ? 0
        : defServ++
    );
  }

  return attServ < defServ
    ? true
    : attServ > defServ
    ? false
    : attPowAt <= attPowDef;
}

console.log(hasSurvived([2, 9], [1, 1, 3, 8]));
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]));

// ## Example 6 - Опертор % и методы строк

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

const totalMinutes = 450;

const hours = (Math.floor(totalMinutes / 60) + '').padStart(2, '0');
const minutes = ((totalMinutes % 60) + '').padStart(2, '0');

const time = `${hours}:${minutes}`;

console.log(time);
