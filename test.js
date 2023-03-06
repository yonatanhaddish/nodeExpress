// const greet = (employee) => {
//     console.log(`Hello, ${employee}`);
// }
// const greetQuestion = () => {
//     console.log(`How have you guys been?`);
// }

// greet("Yoni");
// greet("Semu");
// greet("Hani");
// greet("Noli");
// greet("Aru");
// greetQuestion();

// console.log(global);

// console.log(`dir name: ${__dirname}`);
// console.log(`file name: ${__filename}`);

const blogs = [
    {title: 'Title 01', snippet: 'Snippet 01'},
    {title: 'Title 02', snippet: 'Snippet 02'},
    {title: 'Title 03', snippet: 'Snippet 03'},
];

if (blogs.length > 0) {
    blogs.forEach(blog => {
        <div>
            <h3>{blog.title}</h3>
            <p>{blog.snippet}</p>
        </div>
    })
} else {
    <p>There are no blogs to display...</p>
}

<% if (blogs.length > 0) { %>
    <% blogs.forEach(blog => { %>
        <h3 class="title"><%= blog.title %></h3>
        <p class="snippet"><%= blog.snippet %></p>
    <% }) %>
<% } else { %>
<p>There are no blogs to display...</p>
<%> } %>
