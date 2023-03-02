const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request made");
});

server.listen(3006, "localhost", () => {
    console.log("listening for request on port 3006");
});