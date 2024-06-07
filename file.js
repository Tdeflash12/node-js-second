const fs = require("fs");
const os = require ("os");
console.log(os.cpus().length);
// Non -Blocking
 fs.readFile("contact.txt","utf-8", (err,result) =>{
//   console.log(result);
  });

// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// Default Thread Pool Size =4

