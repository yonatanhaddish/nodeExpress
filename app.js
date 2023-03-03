const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs'); // ejs will look into view folder by default. 
                                // If our ejs files are on different folder other that views folder, then we use the line of code below.

// app.set('views', 'another-folder-myviews'); // if our ejs files are not located in views folder, but located in another-folder-myviews folder.

// listen for requests
app.listen(3007, () => {
    console.log(`listening for request on PORT 3007 using express.js`);
});

// listen for requests
app.get('/', (req, res) => {
    // res.send("<h1>Home Page</h1>");
    // res.sendFile('./views/index.html', { root: __dirname });
    res.render('index');
});
app.get('/about', (req, res) => {
    // res.send("<h1>About-Me Page</h1>");
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about');
});
app.get('/blogs/create', (req, res) => {
    res.render('create');
})
// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});
// 404 error page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404');
});