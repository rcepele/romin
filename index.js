//using require method
//const numbers = require("./numbers.json")

//console.log(numbers);
let val;
let arr2 = [6,7,8];
//Using the fs module
const fs = require("fs");
//read users.json file
fs.readFile("numbers.json", function(err,data) {
    //check for errors
    if (err) throw err;

    //converting to Json
    const numbers = JSON.parse(data);

    let array3 = numbers.concat(arr2);
    let sum = 0;
    for (let i = 0 ; i<array3.length ; i++){
        sum = sum + array3[i];
    }

    console.log(numbers);
    console.log(array3);
    console.log(sum);
});
