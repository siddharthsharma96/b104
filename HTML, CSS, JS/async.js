// setTimeout(() => {
//   console.log("Hello after 2 seconds");
// }, 0);

// // callback hell example
// // nested Functions
// // setTimeout(() => {
// //   console.log("First callback function");
// //   setTimeout(() => {
// //     console.log("Second callback function");
// //     setTimeout(() => {
// //       console.log("third callback function");
// //       setTimeout(() => {
// //         console.log("fourth callback function");
// //       }, 2000);
// //     }, 2000);
// //   }, 2000);
// // }, 2000);

// // Promises
// // State
// // Pending
// // Fulfilled
// // Rejected
// const myPromise = new Promise((resolve, reject) => {
//   let Win = false;
//   if (Win == true) {
//     resolve("You have to give the party");
//   } else {
//     reject("Now my friend give me party");
//   }
// });

// // .then and .catch
// // Chaining process
// myPromise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //   Async/Await
// // function works like a function
// // Remove chaining process
// // inbuilt error handling
// // try catch block

// const myFunc = async () => {
//   try {
//     console.log("gghkjsfgjk");

//     const msg = await myPromise;
//     console.log(msg);
//     console.log("check which line runs first");
//   } catch (err) {
//     console.log(err);
//   }
// };

// myFunc();

// Fetch API

const handleApi = async () => {
  try {
    const repsonse = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(repsonse);
    const data = await repsonse.json();
    console.log(data);
    const tablebody = document.getElementById("tableBody");
    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.email}</td>`;
      tablebody.appendChild(row);
    });
  } catch (err) {
    console.log(err);
  }
};

handleApi();
