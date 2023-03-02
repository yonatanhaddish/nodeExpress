// const fs = require('fs');

// console.log("--------------------------------------------------------------------------");

// ----------reading from files----------
// fs.readFile('./docs/blog01.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("--------------------------------------------------------------------------");

// ----------writing into files----------
// fs.writeFile('./docs/blog01.txt', "hello, Teenage Mutant Ninja Turtles", () => {
//     console.log("File was written successfully into ''docs/blog02.txt'");
// });
// fs.writeFile('./docs/blog02.txt', "hello, The Transformer", () => {
//     console.log("File was written sucessfully into 'docs/blog02.txt'");
// });

// console.log("--------------------------------------------------------------------------");

// ----------creating and deleting directories----------
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Folder created");
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Folder deleted");
//     });
// };

// console.log("--------------------------------------------------------------------------");

// ----------deleting files----------
// if (fs.existsSync('./docs/deleteMe.txt')) {
//     fs.unlink('./docs/deleteMe.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("File deleted");
//     });
// } else {
//     console.log("No file found to be deleted");
// };

// console.log("--------------------------------------------------------------------------");