// array transformations

// a. a function that doubles every number in an array.
function double(arr) {
  return arr.map((num) => num * 2);
}
console.log(double([1, 2, 3, 4, 5]));

// b. filters out even numbers from an array.

function filterEven(arr) {
  return arr.filter((num) => num % 2 !== 0);
}
console.log(filterEven([1, 2, 3, 4, 5]));

// c. calculates the sum of all numbers in an array.

function sum(arr) {
  return arr.reduce((add, num) => add + num, 0);
}
console.log(sum([1, 2, 3, 4, 5]));

//  d. average of all numbers in an array.
function average(arr) {
  return arr.reduce((add, num) => add + num / arr.length, 0);
}

console.log(average([1, 2, 3, 4, 5]));

// e. returns the largest number in an array.
function findMax(arr) {
  max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 2, 3, 4, 5]));

// f.returns the smallest number in an array.

function findMin(arr) {
  min = arr[0];

  for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([1, 2, 3, 4, 5]));

// g. removes duplicate values from an array.
//
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));

// h. returns the index of a given value in an array (or -1 if not found).

function findIndex(arr, value) {
  return arr.indexOf(value);
}

console.log(findIndex([1, 3, 2, 5], 2));
