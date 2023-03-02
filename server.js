const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write("<p>Hello, Ninja</p>");
    res.write("<p>Hello, Teenage Mutant Ninja Turtles</p>");
    res.end();
});

server.listen(3006, "localhost", () => {
    console.log("listening for request on port 3006");
});