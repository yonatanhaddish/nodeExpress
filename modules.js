const {alphabets, numbers} = require('./people');
const os = require('os');

// console.log(alphabets);
// console.log(numbers);

console.log(`Operating System: ${os.platform()}`, `and Home Directory: ${os.homedir}`);