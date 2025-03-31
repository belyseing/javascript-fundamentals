// a. Use the compose(...fns) function to combine your functions in interesting ways.
// Function Composition
const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

// Example 1: Reverse and Capitalize a String
const reverseString = (str) => str.split("").reverse().join("");
const capitalize = (str) => str.toUpperCase();
const reverseAndCapitalize = compose(capitalize, reverseString);

console.log(reverseAndCapitalize("hello"));

// Example 2: Double All Even Numbers in an Array
const filterEvens = (arr) => arr.filter((num) => num % 2 === 0);
const doubleNumbers = (arr) => arr.map((num) => num * 2);
const doubleEvens = compose(doubleNumbers, filterEvens);

console.log(doubleEvens([1, 2, 3, 4, 5, 6]));

// b. Transform an array of objects: maps over the array and adds a new property
function addStatus(students) {
  return students.map((student) => ({
    ...student,
    status: student.grade > 50 ? "Pass" : "Fail",
  }));
}

const students = [
  { name: "Alice", grade: 60 },
  { name: "Bob", grade: 45 },
  { name: "Charlie", grade: 75 },
  { name: "David", grade: 40 },
];

console.log(addStatus(students));

// c. Sorting an Array of Objects
function sortByKeyDescending(arr, key) {
  return arr.sort((a, b) => (b[key] > a[key] ? 1 : -1));
}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];

console.log(sortByKeyDescending(people, "age"));

// d. Filtering by Category: a function that returns only the products in a specified category.
function filterByCategory(products, category) {
  return products.filter((product) => product.category === category);
}

const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
  { name: "Pants", category: "Clothing" },
  { name: "Headphones", category: "Electronics" },
];

console.log(filterByCategory(products, "Electronics"));

// e. Caching Function:stores results of previous calculations to avoid recomputation.
const cacheFunction = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache:", key);
      return cache[key];
    }
    console.log("Computing result:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const factorial = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return 1;
  memo[n] = n * factorial(n - 1, memo);
  return memo[n];
};

const cachedFactorial = cacheFunction(factorial);

console.log(cachedFactorial(5));
console.log(cachedFactorial(6));
