const fs = require('fs');

fs.readFile('./docs/blog01.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log("---------- message printed after readFile ----------");

