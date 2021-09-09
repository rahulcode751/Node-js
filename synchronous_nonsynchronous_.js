// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

/*
const fs = require("fs");
fs.readFile("dele.txt", "utf-8");  /* it will give error bcoz ye jo readfile function h ye ek callback function expect krega
console.log("This is a message");
   */

const fs1 = require("fs");
fs1.readFile("dele .txt", "utf-8", (a, b) => {   // dele.text ki jageh koi or file dal de jo tune nahi bna rakhi to ye error dega me                                                  
                                                  /* ye hmne readfile function ko ek function de diya ab ye run hoga error nahi dega 
                                                  a yha pr error hota h or b h data agr isme error hoga to vo  a me a jayga for file ka content b me a jayga ye syntax ah*/
                                                /*  to callback se hm asynconus behaviour achive krte h */
     console.log(a,b);
});
console.log("This is a message");
   

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data) => {
    console.log(err, data);
});
console.log("This is a message");
