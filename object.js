// a.returns the full name of a person object

function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

const person1 = { firstName: "Belyse", lastName: "Ingabire" };

console.log(fullName(person1));

// b. hecks if a person is 18 or older (given property age).
function isAdult(person) {
  if (person.age >= 18) {
    return "You are older";
  } else {
    return "You are young";
  }
}
console.log(isAdult({ firstName: "Belyse", lastName: " keza", age: 20 }));

// c.  filters an array of person objects to keep only those who are at least minAge years old.

function filterByAge(people, minAge) {
  return people.filter((person) => person.age >= minAge);
}

const people = [
  { name: "Belyse", age: 20 },
  { name: "Yvan", age: 18 },
  { name: "Benita", age: 6 },
  { name: "enny", age: 16 },
];

console.log(filterByAge(people, 18));

// // d. adds a new property to an object.   !!!!!!!!!!

function addProperty(obj, key, value) {
  obj[key] = value;
}

let person2 = { firstName: "Ines", lastName: "Ineza" };
addProperty(person2, "age", 26);
console.log(person2);

// e. checks if an object has a specific property.

function hasProperty(obj, key) {
  return obj.hasOwnProperty(key);
}

let person3 = { firstName: "Igor", lastName: "Mpore", age: 24 };
console.log(hasProperty(person3, "age"));
console.log(hasProperty(person3, "City"));

// f.  returns the number of properties in an object

function countProperties(obj) {
  return Object.keys(obj).length;
}

let person4 = {
  firstName: "Ilyse",
  lastName: "Inkindi",
  age: 22,
  country: "Rwanda",
  city: " Kigali"
};

console.log(countProperties(person4));
