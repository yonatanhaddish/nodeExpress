const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://netninja:netninja1234@cluster0.stowurf.mongodb.net/note-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3007))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs"); // ejs will look into view folder by default.
// If our ejs files are on different folder other that views folder, then we use the line of code below.

// app.set('views', 'another-folder-myviews'); // if our ejs files are not located in views folder, but located in another-folder-myviews folder.

// listen for requests (and fyi moved in to the call-back function on mongoose.connect function)
// app.listen(3007, () => {
//   console.log(`listening for request on PORT 3007 using express.js`);
// });

// middleware to log HTTP requests and errors
app.use(morgan('dev'));

// middleware & static files (anything inside the folder public will be considered static).
app.use(express.static('public'));

// listen for requests
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: 'All blogs', blogs: result})
    })
})
app.get("/about", (req, res) => {
  // res.send("<h1>About-Me Page</h1>");
  // res.sendFile('./views/about.html', { root: __dirname });
  res.render("about", { title: "About" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});
// redirects
app.get("/about-me", (req, res) => {
  res.redirect("/about", { title: "About" });
});
// 404 error page
app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
