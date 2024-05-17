// conditional statements
// if condition

const name = "name";
//  = this represents an assignment
// == this represents equality
// === this represents strict equality

// const w = 2 == "2";
// console.log(w);

// if (4 === 3) {
//   console.log("yes this is true");
// } else {
//   console.log("this is not true");
// }

const name2 = "Miles";
const age = 12;

const name3 = "Alex";

// if (name2 === name3) {
//   console.log("names are the same");
// } else {
//   console.log("names are not the same");
// }

// && means and
// || means or

// if (name2 !== name3) {
//   console.log("names are the same");
// } else if (name2 === "Miles" && age === 12) {
//   console.log("yes");
// } else if (name3 === "Alex") {
//   console.log("ok");
// } else if (name2 !== "Miles" || name3 === "ALEX") {
//   console.log("ok ok ok");
// } else {
//   console.log("nothing worked");
// }

// if (name2 !== "Miles" && (age === 12 || name3 === "ALEX")) {
//   console.log("ok ok ok");
// } else {
//   console.log("nothing worked");
// }

// if (name3 === "ALEX") {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// //array
// const array = [1, 2, 3, 4, 5, 6, 7];

// console.log("the first array => ", array);

// const arraylength = array.length;
// console.log("array length ", arraylength);

// const fourthItem = array[3];
// console.log(fourthItem);

// // check if index 0 is equal to index 7

// const addeditem = array.push(8);

// console.log("added item ", addeditem);

// console.log("the new array ", array);

// const takeout = array.shift();
// console.log("the new array again ", array);

// const remove = array.pop();
// console.log(remove);
// console.log("the new array again and again ", array);

// // slice

// const slicedarray = array.slice(2, 4);
// console.log(slicedarray);

//objects
// key and value
const person = {
  name: "Miles",
  age: 12,
  student: true,
  hobby: "Problem solving with code",
};

// const myname = person.name;
// console.log(myname);

// if (person.name === "Miles" && person.student === true) {
//   console.log("jdjdjdjdjdjd");
// } else {
//   console.log("jdjdsjsjkjdj");
// }

const people = [
  {
    name: "Miles",
    age: 12,
    student: true,
    hobby: "Problem solving with code",
  },
  {
    name: "Sophia",
    age: 25,
    student: false,
    hobby: "Painting landscapes",
  },
  {
    name: "Ethan",
    age: 18,
    student: true,
    hobby: "Playing guitar",
  },
  {
    name: "Ava",
    age: 30,
    student: false,
    hobby: "Reading novels",
  },
  {
    name: "Noah",
    age: 22,
    student: true,
    hobby: "Photography",
  },
  {
    name: "Olivia",
    age: 27,
    student: false,
    hobby: "Traveling",
  },
  {
    name: "Liam",
    age: 35,
    student: false,
    hobby: "Cooking gourmet meals",
  },
  {
    name: "Emma",
    age: 20,
    student: true,
    hobby: "Dancing",
  },
];

const lengthofpersons = people.length;
console.log("length of people => ", lengthofpersons);

const hobby = people[3].hobby;
console.log("avas hobby is ", hobby);

//if west shares 500 naira to all people aged 20 and above, how many students will get the money and how much in total will west spend..

// forloops
for (initialexpression; condition; updateexpression) {
  // for the loop body
}

// const n = 5;

// // loop from 1 to 5 and logsomething as it loops
// for (let m = 1; m <= n; m++) {
//   console.log("this is javascript");
// }

// const score = 50;

// // if score is below 40 log failed
// // if score is above 40 log passed

// const scores = [10, 20, 30, 40, 42, 50];
// for (let m = 0; m < scores.length; m++) {
//   if (scores[m] > 40) {
//     console.log("passed");
//   } else {
//     console.log("failed");
//   }
// }

// structire for a while loop
// while (condition) {
//   // body of the while
// }

// const n = 5;
// while (n <= 10) {
//   console.log("this is java");
//   n++;
// }

// // do while loop
// do {
//   console.log("this is javascript");
//   n++;
// } while (n <= 5);

// find the sum of positive numbers entered

let sum = 0;
let number = 0;

do {
  sum += number * 3;
  // sum = sum + number
  number = parseInt(prompt("Enter number.."));
} while (number >= 0 && number !== 0);

console.log("the sum is  ", sum);

//switch statement
switch (variable / expression) {
  case value1:
    //body of value 1
    break;

  case value2:
    //body of value 2
    break;

  default:
  //body of the default
}

// example with switch statement
let t = 3;

switch (t) {
  case "1":
    t = 1;

    break;

  case 2:
    t = 2;
    break;
  case "3":
    t = 3;
    break;
  case 3:
    t = 3;

    break;
  default:
    console.log("nothing worked!!");
}

const operator = prompt("Enter operator either + - * /");

const num1 = parseInt(prompt("enter first number"));
const num2 = parseInt(prompt("enter second number"));

switch (operator) {
  case "+":
    result = num1 + num2;
    console.log(`the sum of numbers is = ${result}`);
    break;
  case "-":
    result = num1 - num2;
    console.log(`the difference of numbers is = ${result}`);
    break;
  case "*":
    result = num1 * num2;
    console.log(`the product of numbers is = ${result}`);
    break;
  case "/":
    result = num1 / num2;
    console.log(`the quotien of numbers is = ${result}`);
    break;
  default:
    console.log("invalid operator");
}
