const fs = require("fs");
const http = require("http");

// // blocking code
// // synchronous Manner
// // 1. Read file:path ,encyrption
// const readData = fs.readFileSync("./txt/start.txt", "utf-8");
// console.log(readData);

// // 2. Write file:path ,data,encyrption
// fs.writeFileSync(
//   `./txt/${readData}.txt`,
//   "This is my content written bu node",
//   "utf-8"
// );

// // Asynchronous Manner/Non-blocking code
// // Read data: path . encyrption , callback function (err,data)

// fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   if (err) return console.log("check file", err);
//   console.log(data);
// });

// // write file : path , data , encyrption , callback function (err)
// fs.writeFile(
//   "./txt/output.txt",
//   "This is written by fs module using async method",
//   "utf-8",
//   (err) => {
//     if (err) return console.log("Error in writing file", err);
//     console.log("File written successfully");
//   }
// );

// Status Codes
// 1XX: 100-199 Informational responses
// 2XX: 200-299 Successful responses
// 3XX: 300-399 Redirection messages
// 4XX: 400-499 Client error responses
// 5XX: 500-599 Server error responses
const productData = fs.readFileSync("./dev-data/index.json", "utf-8");

// Step1 : Create Server
const server = http.createServer((req, res) => {
  //   res.end("Hello from the server");
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(productData);
});

// step 2 : Start the server

server.listen(9000, "127.0.0.1", () => {
  console.log("Server started at port 9000");
});
