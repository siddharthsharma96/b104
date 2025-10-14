// // var: global scope
// console.log(aa);
// // Hoisting
var aa = 12;
console.log(typeof aa);

aa = "sid";

console.log(typeof aa);

// // es6 let
// // block scope
// // console.log(b); //refernce error
// // temporal dead zone(tdz)
let b = 13;
// b = 879;
// console.log(b);

// // {
// //   //   console.log(b);

// //   let b = 23;
// //   console.log(b);
// //   //   var aa = 45;
// //   //   console.log(aa);
// // }

// // console.log("Value of aa", aa);

// // console.log(b);

// // es6 const
// // block scope
// const c = 32;
// c = 34;//Type Error
// console.log(c);

// functions

// 1. Named function
// printValues();

// step 1 Function Declaration
function printValues() {
  console.log("Hello world 1");
  console.log("Hello world 2");

  console.log("Hello world 3");
}

// STep 2 Function Invoke
// printValues();

// 2. function Expression
// printUsingVar();

const printUsingVar = function () {
  console.log("Hello world 1");
  console.log("Hello world 2");

  console.log("Hello world 3");
};
// printUsingVar();

// 3.Arrow Function
const printUsingArrow = () => {
  console.log("Hello world 1");
  console.log("Hello world 2");

  console.log("Hello world 3");
};

printUsingArrow();

//4. Annonymous Function /Callback Function
// no name or identity
// pass as an argument to another function

// 5.IIfe - Immediately Invoked Function Expression

(() => {
  console.log("IIFE");
})();

// dynamic function
let sumOfTwo = (parameter1, parameter2) => {
  //   let a = parameter1;
  //   let b = parameter2;
  console.log(parameter1 + parameter2);
};

sumOfTwo(12, 45);
sumOfTwo(34, 67);

sumOfTwo(45, 90);
