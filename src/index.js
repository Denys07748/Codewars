// 1. Convert string to camel case

// Завершите метод/функцию, чтобы он преобразовывал слова, разделенные
// тире/подчеркиванием, в верблюжий регистр. Первое слово в выводе должно
// быть написано с заглавной буквы только в том случае, если исходное
// слово было написано с заглавной буквы (известный как верхний верблюжий
// регистр, также часто называемый регистром Паскаля).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {}

// 2.Count Odd Numbers below n

// Учитывая число n, вернуть количество положительных нечетных чисел меньше n

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

function oddCount(n) {
  const arrey = [];

  for (let i = 1; i < n; i += 1) {
    if (i % 2 !== 0) {
      arrey.push(i);
    }
  }

  return arrey.length;
}

// describe('Basic tests', () => {
//   it('Testing for fixed tests', () => {
//     assert.strictEqual(oddCount(15), 7, 'Oops! Wrong.');
//     assert.strictEqual(oddCount(15023), 7511, 'Oops! Wrong.');
//   });
// });
console.log(oddCount(7));

//3. Remove anchor from URL

// Завершите функцию/метод, чтобы он возвращал URL-адрес с чем-либо после удаления привязки (#).

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  let arrey = url.split('');

  if (arrey.includes('#')) {
    const index = arrey.indexOf('#');
    arrey = arrey.slice(0, index);
  }

  return arrey.join('');
}

console.log(removeUrlAnchor('www.codewars.com#about'));
//   'www.codewars.com'

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')),
  //   'www.codewars.com/katas/?page=1'

  console.log(removeUrlAnchor('www.codewars.com/katas/'));
//   'www.codewars.com/katas/'

// 4. Reversed Words

function reverseWords(str) {
  const arrey = str.split(' ');
  const arreyReverse = [];
  let indexLastWord = arrey.length - 1;

  console.log(arrey);
  arrey.map(() => {
    arreyReverse.push(arrey[indexLastWord]);
    indexLastWord -= 1;
  });

  console.log(arreyReverse);

  str = arreyReverse.join(' ');

  console.log(str);

  return str; // reverse those words
}

// function reverseWords(str) {
//   return str.split(' ').reverse().join(' ');
// }

console.log(reverseWords('hello world!'));

// 5.N-th Power

// Вам дан массив с положительными числами и неотрицательным числом N.
// Нужно найти N-ю степень элемента в массиве с индексом N. Если N вне
// массива, то вернуть -1. Не забывайте, что первый элемент имеет индекс 0.

function index(array, n) {
  if (!array[n]) {
    return -1;
  }
  let result = array[n];

  for (let i = 1; i < n; i++) {
    result *= array[n];
  }

  return result;
}

// const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

console.log(index([1, 3, 10, 100], 3));

// 6.Shortest Word

// Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).

// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function findShort(s) {
  const array = s.split(' ');
  let minWord = array[0];

  array.map(el => {
    if (minWord.length > el.length) {
      minWord = el;
    }
  });
  return minWord.length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// 7.Quarter of the year

// Дан месяц как целое число от 1 до 12, вернитесь к тому,
// к какому кварталу года он принадлежит, как целое число.

// Например: 2-й месяц (февраль) является частью первого квартала;
// 6 месяц (июнь) входит во второй квартал; и месяц 11 (ноябрь) является частью четвертого квартала.

const quarterOf = month => {
  if (month > 0 && month < 4) {
    return 1;
  } else if (month > 3 && month < 7) {
    return 2;
  } else if (month > 6 && month < 10) {
    return 3;
  } else if (month > 9) {
    return 4;
  }
};

console.log(quarterOf(7));

// 7.Hamming Distance - Part 1: Binary codes

// Расстояние Хэмминга двух строк одинаковой длины — это количество позиций,
// в которых эти две строки различаются. Другими словами,
// количество замен символов, необходимых для преобразования одной строки в другую.

// Для этой первой Ката вы напишете функцию hamming_distance(a, b) с двумя строками
// одинаковой длины, содержащими только 0 и 1 в качестве параметров.
// Нет необходимости проверять параметры на достоверность (но вы можете, если хотите).
// Выходом функции должно быть расстояние Хэмминга двух строк в виде целого числа.

function hammingDistance(a, b) {
  const array1 = a.split('');
  const array2 = b.split('');
  let total = 0;

  array1.map((el, i, array) => {
    if (el !== array2[i]) {
      total += 1;
    }
  });
  return total;
}

console.log(hammingDistance('1010', '0101'));

// 8. Reverse words

// Завершите функцию, которая принимает строковый параметр и переворачивает
// каждое слово в строке. Все пробелы в строке должны быть сохранены.

function reverseWordsLetters(str) {
  const array = str.split(' ');
  const arrayReverse = [];

  array.map(word => arrayReverse.push(word.split('').reverse().join('')));

  return arrayReverse.join(' ');
}

console.log(
  reverseWordsLetters('The quick brown fox jumps over the lazy dog.')
);

// 9.Square Every Digit

// Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их.

// Например, если мы пропустим через функцию 9119, получится 811181, потому что 92 — это 81, а 12 — это 1.

// Примечание. Функция принимает целое число и возвращает целое число.

function squareDigits(num) {
  const arraySquareEvDigit = [];
  const numString = num + '';

  console.log(numString);

  numString.split('').map(digit => arraySquareEvDigit.push(digit ** 2));

  console.log(arraySquareEvDigit);

  return Number(arraySquareEvDigit.join(''));
}

console.log(squareDigits(3212));

// 10.Don't give me five!

// В этом ката вы получаете начальный номер и конечный номер региона и
// должны вернуть количество всех чисел, кроме номеров с 5 в нем.
// Начальный и конечный номер включительно!
// Результат может содержать пятерки. ;-)
// Начальный номер всегда будет меньше конечного. Оба числа могут быть и отрицательными!

function dontGiveMeFive(start, end) {
  const array = [];
  for (let i = start; i <= end; i++) {
    const str = i + '';
    if (!str.split('').includes('5')) {
      array.push(i);
    }
  }
  return array.length;
}

console.log(dontGiveMeFive(4, 17));

// 11.DNA to RNA Conversion

// Рибонуклеиновая кислота, РНК, является основной молекулой-мессенджером в клетках.
// РНК немного отличается от ДНК своей химической структурой и не содержит тимина.
// В РНК тимин заменен другой нуклеиновой кислотой урацилом («U»).

// Создайте функцию, которая переводит заданную строку ДНК в РНК.

// function DNAtoRNA(dna) {
//   return dna.replace(/T/g, 'U');
// }

function DNAtoRNA(dna) {
  return dna.split('T').join('U');
}

// 12.Strong Number (Special Numbers Series #2)

//Сильное число — это число, сумма факториала его цифр равна самому числу.
// Например, 145 сильно, так как 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Учитывая число, найдите, является ли оно сильным или нет, и верните либо «СИЛЬНОЕ !!!!» или "Не Сильный!!".

function strong(n) {
  const total = String(n)
    .split('')
    .reduce((previousValue, value) => {
      let factorial = 1;
      for (let i = 1; i <= value; i++) {
        factorial *= i;
      }
      return previousValue + factorial;
    }, 0);

  return n === total ? 'STRONG!!!!' : 'Not Strong !!';
}

console.log(strong(145));

// 13.Wilson primes

// Простые числа Вильсона удовлетворяют следующему условию. Пусть P представляет собой простое число.
// Затем, ((P-1)! + 1) / (P * P)
// должен дать целое число.
// Ваша задача — создать функцию, возвращающую истину, если заданное число является простым числом Вильсона.

function amIWilson(p) {
  let factorial = 1;
  for (let i = 1; i < p; i++) {
    factorial *= i;
  }
  return (factorial + 1) % p ** 2 === 0 ? true : false;
}

console.log(amIWilson(5));

// 14.Area of a Square

// Завершите функцию, которая вычисляет площадь красного квадрата,
// когда в качестве входных данных задана длина дуги окружности A.
// Возвращает результат, округленный до двух знаков после запятой.

function squareArea(A) {
  return Number((((180 * A) / (Math.PI * 90)) ** 2).toFixed(2));
}

console.log(squareArea(14.05));

// 15.Deodorant Evaporator

// Эта программа проверяет срок службы испарителя, содержащего газ.

// Мы знаем содержимое испарителя (содержимое в мл), процент пены или газа,
// теряемый каждый день (evap_per_day) и пороговое значение (threshold) в процентах,
// выше которого испаритель становится бесполезным. Все числа строго положительные.

// Программа сообщает n-й день (в виде целого числа), когда испаритель не будет использоваться.

// Example:
// evaporator(10, 10, 5) -> 29

// Примечание:
// Содержимое по сути не обязательно в теле функции "испаритель",
// вы можете использовать его или не использовать, как хотите.
// Кто-то предпочитает рассуждать содержанием, кто-то — только процентами.
// Это зависит от вас, но вы должны оставить его в качестве параметра,
// потому что тесты используют его в качестве аргумента.

// function evaporator(content, evap_per_day, threshold) {
//   const thresholdMl = content * (threshold / 100);
//   let currentAmount = content;
//   let days = 0;
//   let counter = content * (evap_per_day / 100);
//   console.log(thresholdMl, currentAmount, counter);

//   for (let i = currentAmount; i > thresholdMl; i -= counter) {
//     days++;
//     currentAmount -= currentAmount * (evap_per_day / 100);
//     counter = currentAmount * (evap_per_day / 100);
//     console.log(currentAmount);
//   }
//   return days;
// }

function evaporator(content, evap_per_day, threshold) {
  var days = 0;
  var gas = 100;
  while (gas >= threshold) {
    gas -= (gas * evap_per_day) / 100;
    days++;
  }
  return days;
}

console.log(evaporator(10, 10, 5));

// 16.The Poet And The Pendulum

// Задача
// Учитывая массив/список [] из n целых чисел, расположите их так же, как движение маятника туда-сюда.

// Наименьший элемент списка целых чисел должен находиться в центре массива/списка.

// Высшее, чем наименьшее, идет вправо.
// Следующее большее число идет слева от минимального числа и так далее, туда-сюда, как в маятнике.

// способ 1 (свой)
// function pendulum(values) {
//   let val = [...values];
//   let newArr = [];
//   for (let i = 1; i <= values.length; i++) {
//     let minInd = val.indexOf(Math.min(...val));
//     let arr = val.splice(minInd, 1);
//     i % 2 === 0 ? (newArr = newArr.concat(arr)) : (newArr = arr.concat(newArr));
//   }
//   return newArr;
// }

// способ 2
// function pendulum(values) {
//   let sort = values.slice().sort((a, b) => a - b),
//     parts = { left: [], right: [] };

//   for (let i = 0; i < sort.length; i++)
//     parts[i % 2 ? 'right' : 'left'].push(sort[i]);

//   return parts.left.reverse().concat(parts.right);
// }

// способ 3
// const pendulum = values =>
//   values
//     .sort((a, b) => a - b)
//     .reduce((pre, val) => (pre.length % 2 ? [...pre, val] : [val, ...pre]), []);

// способ 4
function pendulum(a) {
  let list = [],
    arr = [];
  a.sort((b, c) => b - c).forEach((e, i) => (i % 2 ? arr : list).push(e));
  console.log(list, arr);
  return list.reverse().concat(arr);
}

console.log(pendulum([8, 7, 10, 3]));
console.log(pendulum([27, 27, 19, 21, 22, 28, 24]));

// 17.Determine if the poker hand is flush

// Определите, является ли покерная рука флешем, то есть являются ли пять карт одной масти.

// Вашей функции будет передан список/массив из 5 строк, каждая из которых представляет
// покерную карту в формате «5H» (пятерка червей), что означает значение карты, за которым
// следует начальная буква ее масти (червы, пики, бубны или клубы). Джокеры не включены.

// Ваша функция должна возвращать true, если рука представляет собой флеш, и false в противном случае.

function isFlush(cards) {
  const suitFirst = cards[0][cards[0].length - 1];
  let boolean = true;

  cards.map(e => {
    let suit = e[e.length - 1];
    suitFirst === suit ? boolean : (boolean = false);
  });

  return boolean;
}

// способ 2
// function isFlush(cards) {
//   return cards.every(a => cards[0].slice(-1) === a.slice(-1));
// }

console.log(isFlush(['AS', '3S', '9S', 'KS', '4S']));
console.log(isFlush(['AD', '4S', '7H', 'KC', '5S']));

// 18.Expressions Matter

// Даны три целых числа a ,b ,c, вернуть наибольшее число,
// полученное после вставки следующих операторов и скобок: +, *, ()
// Другими словами, попробуйте каждую комбинацию a,b,c с [*+()]
// и верните максимальное полученное значение

// Заметки
// Цифры всегда положительные.
// Числа находятся в диапазоне (1  ≤  a, b, c  ≤  10).
// Вы можете использовать одну и ту же операцию более одного раза.
// Необязательно расставлять все знаки и скобки.
// Возможно повторение цифр.
// Вы не можете поменять местами операнды.
// Например, в данном примере нельзя получить выражение (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * (b + c), a * b * c, a + b * c, (a + b) * c);
}

console.log(expressionMatter(2, 1, 3));
console.log(expressionMatter(2, 1, 1));

// 19.Removing Elements

// Возьмите массив и удалите каждый второй элемент из массива.
// Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

function removeEveryOther(arr) {
  return arr.filter((el, ind) => ind % 2 === 0);
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
