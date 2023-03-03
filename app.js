const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3007, () => {
    console.log(`listening for request on PORT 3007 using express.js`);
});

// listen for requests
app.get('/', (req, res) => {
    // res.send("<h1>Home Page</h1>");
    res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
    // res.send("<h1>About-Me Page</h1>");
    res.sendFile('./views/about.html', { root: __dirname });
});
// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});
// 404 error page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});