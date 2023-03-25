// console.log('hello world');



const fs = require('fs');
// read file
// fs.readFile('file.txt', 'utf-8', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

//file writing
fs.writeFile(
    "file.text",
    "This is testing of file writing",
    function(error,data){
        if(error) throw error;
        console.log("File written successfully");
    }
);
