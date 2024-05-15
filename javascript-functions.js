//function declaration
// function greeting() {}

// // arrow functions

// const greeting = () => {};

// greeting example

function greet() {
  console.log("good morning");
}

greet();

//write a function that greets you good morning and welcome to class
//name should be in a variable
// greeting should be in a variable

const name = "Miles";
const greeting = "good morning and welcome to class";

const greetme = () => {
  console.log(`Hello ${name}, ${greeting}`);
};

greetme();

// write a function that sums numbers , multiplies same numbers

function mathp() {
  let sum = 3 + 4;
  let product = 3 * 4;

  console.log(sum);
  console.log(product);
}

mathp();

function mathagain(a, b, c) {
  console.log(a, b, c);
  let sum = a + b + c;
  let product = a * b * c;

  console.log(sum);
  console.log(product);
}

mathagain(3, 4, 6);
mathagain(7, 4);

//calculate the average of an array of 6 numbers.Use dynamic functions to solve this

function average(numberArray) {
  const sum = numberArray.reduce((acc, curr) => acc + curr, 0);
  const averagesum = sum / numberArray.length;
  console.log(averagesum);
}

average([2, 4, 5, 3, 5, 6]);
average([2, 4, 5, 3, 5, 6, 6, 4, 3, 6, 7, 8, 9, 5, 6, 8, 9, 6]);

// const theArray = (numberarray) => {
//   const sum = numberarray.reduce((acc, curr) => acc + curr, 0);
//   const averageSum = sum/numberarray.length;
//   console.log(averageSum);
// };

// theArray([4, 2]);

function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

  const passgen = Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
  return passgen;
}

console.log(generatePassword(10));

function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

  const passgen = Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
  console.log(passgen);
}

generatePassword(10);
