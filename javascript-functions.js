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

function average2(numberArray) {
  const filteredPeople = numberArray.filter(
    (aperson) => aperson.student === true
  );
  console.log("the filtered people => ", filteredPeople);

  const sum = numberArray.reduce((acc, curr) => acc + curr.age, 0);
  const z = sum / numberArray.length;
  console.log("all people age average >=", z);

  const sum2 = filteredPeople.reduce((acc, curr) => acc + curr.age, 0);
  const z2 = sum2 / filteredPeople.length;
  console.log("all student people age average >=", z2);
}

average2(people);

// the function asynchronous javascript
const count = "Miles";

let countValue = new Promise(function (resolve, reject) {
  if (count === "Miles") {
    resolve("There is a count value");
  } else {
    reject("There is no count value");
  }
});

console.log("the count value is =>", countValue);

// using then callback
countValue.then((result) => {
  console.log("the result => ", result);
});

//async await
function fetchRandomData() {
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      {
        const data = { success: false, message: "Miles name blabla" };

        if (data?.success) {
          resolve(data);
        } else {
          reject("It did not come.");
        }
      }
    }, 5000);
  });
  return newPromise;
}

// the asyc await
async function fetchData() {
  try {
    console.log("Fetching data ......");
    const response = await fetchRandomData();
    //console.log("the raw response => ", response);
    return response;
  } catch (error) {
    //console.log("the response error => ", error);
    throw error;
  }
}

fetchData()
  .then((blabla) => {
    console.log("the result of the promise call => ", blabla);
  })
  .catch((error) => {
    console.log("the fail safe => ", error);
  });

async function fetchActualData() {
  try {
    console.log("Fetching data ......");
    const response = await fetch(
      "https://cohort2-blog-api.onrender.com/post/all-posts"
    );
    //console.log("the raw response => ", response);
    return response.json();
  } catch (error) {
    //console.log("the response error => ", error);
    throw error;
  }
}

fetchActualData()
  .then((blabla) => {
    console.log("the result of the promise call => ", blabla);

    const lengthofposts = blabla?.posts.length;
    const first5posts = blabla?.posts.slice(0, 5);
    const lengthof5 = first5posts.length;
    const title = blabla?.posts[1].title;

    const prduct = lengthofposts * lengthof5;

    // log out all the data u query
  })
  .catch((error) => {
    console.log("the fail safe => ", error);
  });
