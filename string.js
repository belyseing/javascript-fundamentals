// 1. string transformation

// a.capitalizes the first letter of a string.

function capitalize(str) {
  if (!str) return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("belyse"));

// b. reverse a given string

function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("Belyse"));

// c .checks if a string is a palindrome(reads the same backward as forward).

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// d. counts the number of words in a given string.
function wordCount(str) {
  if (!str.trim()) return 0;

  return str.trim().split(/\s+/).length;
}
console.log(wordCount("Hello world to Day"));

// e. converts a string to snake_case
function toSnakeCase(str) {
  return str.trim().replace(/\s+/g, "_");
}
console.log(toSnakeCase("Hello World"));

// f.converts a string to camelCase.

function toCamelCase(str) {
  let words = str.split(" ");
  for (i = 1; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join("");
}

console.log(toCamelCase("hello belyse inga"));

// g. finds the longest word in a given string.

function longestWord(str) {
  let words = str.split(" ");

  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord("Hello Belyse Ingabire"));

// h. counts the number of times a specific letter appears in a string.

function countLetter(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("hello Bellyse ", "l"));
