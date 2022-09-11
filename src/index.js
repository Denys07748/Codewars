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
