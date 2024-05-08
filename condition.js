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
