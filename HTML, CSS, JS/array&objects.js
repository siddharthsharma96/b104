// // Array: []
// // ordered list

// // how to declare an array
// // let a = [1, 2, 3, 4, 5, 6, 7, 8, 7];
// // console.log(a);

// // console.log(a[2]);
// // console.log(a.length);
// // console.log(a[a.length - 2]); //last element

// // // how to insert an element
// // a.push(20); //to insert at back
// // console.log(a);
// // a.unshift(34); //to insert at the front
// // console.log(a);

// // // how to remove an element
// // a.pop(); //to remove from back

// // console.log(a);
// // a.shift(); //to remove from front
// // console.log(a);

// // // a.splice(1, 2, 800);
// // // console.log(a);

// // // for loop
// // for(initialization of a variable;condition;increment/decrement){
// //code
// // }
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 7];
// for (let i = 0; i < a.length; i++) {
//   console.log("index value is ", i, " and the value is ", a[i]);
//   //   a[i] = a[i] * 2;
// }

// console.log(a);

// // es6+
// // iterate for all the elements of an array
// // map(caalback function  element,index,array)
// const b = a.map((v, i) => {
//   return 5 * 2;
// });
// console.log(a);
// console.log(b);

// //filter works on truthy condition
// const even = a.filter((val) => {
//   return val % 2 == 0;
// });

// console.log(even);
// const odd = a.filter((val) => {
//   return val % 2 == 1;
// });
// console.log(odd);

// let price = [300, 1000, 3000, 2000, 30, 80, 70, 80, 90];

// let filteredPrice = price.filter((po) => {
//   return po > 990;
// });

// console.log(filteredPrice);

// let str = ["apple", "mango", "banana", "grapes", "kiwi"];

// let s = str.filter((fruit) => {
//   return fruit.length <= 5;
// });

// console.log(s);

// // reduce generate a single value from an array
// // callback function(accumulator,currentValue,index,array)
// let sumOfPrice = price.reduce((accumulator, currentValue, index) => {
//   console.log(accumulator, currentValue);

//   return accumulator + currentValue;
// }, 0);

// console.log(sumOfPrice);
// let f = [1, 2];
// let g = [3, 4];
// let h = f.concat(g);
// console.log(h);

// objects {}
// key value pairs
let obj = {
  name: "ertr",
  age: 23,
  favouriteSports: {
    cricket: "virat",
    football: "messi",
  },
};

console.log(obj.favouriteSports);
console.log(Object.values(obj));
