// Ways to select nodes in the Dom
// 1. Tag name

// let heading = document.getElementsByTagName("h1");
// // array  : HTMLCOllection
// console.log(heading[0]);

// // 2. Using ID
// let para = document.getElementById("a");
// // return a single value and first one
// console.log(para);

// // 3.Using Class
// let classVariables = document.getElementsByClassName("as");
// // array  : HTMLCOllection
// console.log(classVariables[1]);

// // 4. using Query Selector
// // we can use id class and tag name
// let val = document.querySelector(".as");
// // return first matching element
// console.log(val);

// // 5   . using Query Selector All
// let vals = document.querySelectorAll(".as");
// // return all matching element in the form of nodelist
// console.log(vals[0]);

// // Read And Write
// console.log(vals[1].innerHTML);
// console.log(vals[1].textContent);

// vals[1].textContent = "Hello World";

// // class add / remove / toggle
// // vals[1].classList.add("qw");
// // vals[1].classList.remove("asd");

// vals[1].classList.toggle("asd");

// vals[1].style.backgroundColor = "yellow";

// let newElement = document.createElement("ul");
// // let li = document.createElement("li");
// // let li1 = document.createElement("li");
// // li.textContent = "Item 1";
// // li1.textContent = "Item 2";

// // newElement.appendChild(li);
// // newElement.appendChild(li1);
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   let li = document.createElement("li");
//   li.textContent = `Item ${arr[i]}`;
//   newElement.appendChild(li);
// }

// document.body.appendChild(newElement);

let para = document.querySelector(".as");
let input = document.querySelector("input");
let button = document.querySelector("button");
let bodyy = document.querySelector("body");
console.log(para, input, button);

// 1. event 2. callback function
button.addEventListener("click", () => {
  console.log(input.value);

  //   para.textContent = input.value;
  //   bodyy.classList.toggle("ad");
});
