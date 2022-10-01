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

// describe('Tests', () => {
//   it('test', () => {
//     Test.assertEquals(
//       toCamelCase(''),
//       '',
//       'An empty string was provided but not returned'
//     );
//     Test.assertEquals(
//       toCamelCase('the_stealth_warrior'),
//       'theStealthWarrior',
//       "toCamelCase('the_stealth_warrior') did not return correct value"
//     );
//     Test.assertEquals(
//       toCamelCase('The-Stealth-Warrior'),
//       'TheStealthWarrior',
//       "toCamelCase('The-Stealth-Warrior') did not return correct value"
//     );
//     Test.assertEquals(
//       toCamelCase('A-B-C'),
//       'ABC',
//       "toCamelCase('A-B-C') did not return correct value"
//     );
//   });
// });

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
