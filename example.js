
// let a = 5
// let b = 33
// let c = 32
// let d = 13

// // add = a + b;
// // document.getElementById("demo1").innerHTML = add;

// // console.log(add);

// multiply = a * b;
// document.getElementById("demo2").innerHTML = multiply;

// console.log(multiply);

// // subtract = a - b;
// // document.getElementById("demo3").innerHTML = subtract;

// // console.log(subtract);

// // let greeting = "Hello";
// // let globe = "World";
// // document.getElementById("demo4").innerHTML = message = greeting + " " + globe;

// // console.log(message);

// // a++;
// // a++;
// // a++;
// // document.getElementById("demo5").innerHTML = a;

// // console.log(a);

// // equals = a == b;
// // document.getElementById("demo6").innerHTML = equals;

// // console.log(equals);

// // lessThan = a < b;
// // document.getElementById("demo7").innerHTML = lessThan;

// // console.log(lessThan);

// // notEqual = a != b;
// // document.getElementById("demo8").innerHTML = notEqual;

// // console.log(notEqual);

// and = (a < 10 && a > 0);
// document.getElementById("demo9").innerHTML = and;

// // console.log(and);

// // myArray = [1, 2, 3, 4, 5, 6];
// // myArray.length();
// // document.getElementById(`demo1`).innerHTML = myArray.length();

// // const factorial = function fac(n) {
// //     return n < 2 ? 1 : n * fac(n - 1);
// //   };

// //   console.log()

// // let firstName = `Antonia`;
// // let lastName = `Francesca`;

// // let fullName = function (first, last) {
// //     return `${first} ${last}`;
// // }

// // (firstName, lastName) => `${firstName} ${lastName}`;


// // document.getElementById(`fullName`).innerHTML = fullName(firstName, lastName);

// // const array = [15, 16, 17, 18, 19];

// // function reducer(accumulator, currentValue, index) {
// //   const returns = accumulator + currentValue;
// //   console.log(
// //     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
// //   );
// //   return returns;
// // }

// // array.reduce(reducer);

// // let names = [`Nancey`, `Blessing`, `Jorge`, `Svetlana`, `Bob`]

// // let namesB = names.filter(name => name.charAt(0) === `B`);
// // let namesLength = names.map(name => name.length);
// // console.log(namesLength);
// // let namesReduce = names.reduce((total, names) => total + names.length, 0) / names.length;
// // console.log(namesReduce)

// // const buttonElement = document.getElementById("submitButton");

// // // modify the copyInput callback to receive the event object
// // function copyInput(event) {
// //     // take a look at the event!
// //     console.log(event);
// //     const inputElement = document.getElementById("inputBox");
// //     const outputElement = document.getElementById("output");
// //     outputElement.innerHTML = inputElement.value;
// //   }

// // buttonElement.addEventListener("click", copyInput);

// const log = document.querySelector("#log");

// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   // how do we know which key was pressed?
//   console.log(e);
//   // checkout e.code, e.key, and e.keyCode
//   // what is the difference?
// }

// let scores = [56, 78, 95, 77, 65, 86];
// let target = scores.indexOf(87);
// console.log(target)

// const nums = [1,20,10,22,30,44,100,11,411];


// function num(a,b) {
//     return a - b;
// }
// nums.sort(num);

// nums.sort((a, b) => a - b);


// document.querySelector(`#demo10`).innerHTML = nums;

// function calculate(a, b, callback) {
//     callback(a + b);
//   }
  
//   function displayResult(result) {
//     console.log('The result is: ' + result);
//   }

// console.log(calculate(2, 3, displayResult));

// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//       console.log('Hello said ${this.name} the ${this.breed}');
//     }
//   }
  
//   const cat2 = {
//     name : 'Grindlewalde',
//     breed : 'Calico',
//     color : 'striped',
//     greeting: function() {
//       console.log('Hello said ${this.name} the ${this.breed}');
//     }
//   }

//   const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// let results = null;
// async function getPokemon(url) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     doStuff(data);
//   }
// }
// function doStuff(data) {
//   results = data;
//   console.log("first: ", results);
// }
// getPokemon(url);
// console.log("second: ", results);

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for (let i = 0; i < studentReport.length; i++) {
//   if (studentReport[i] < LIMIT) {
//     console.log(studentReport[i])
//   }
// }

// let i = 0;
// while (i < studentReport.length) {
//   if (studentReport[i] < LIMIT) {
//     console.log(studentReport[i]);
//   }
//   i++;
// }

studentReport.forEach(grade => {
  if (grade < LIMIT) {
    console.log(grade);
  }
});

// for (let i in studentReport) {
//   if (studentReport[i] < LIMIT) {
//     console.log(studentReport[i]);
//   }
// }

