const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // res.write("<p>Hello, Ninja</p>");
    // res.write("<p>Hello, Teenage Mutant Ninja Turtles</p>");
    // res.end();

    // lodash
    const num = _.random(1,100);
    console.log(`Random Number: ${num} and the request is ${req.url}`);



    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

});

server.listen(3006, "localhost", () => {
    console.log("listening for request on port 3006 using node.js");
});