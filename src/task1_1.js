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
