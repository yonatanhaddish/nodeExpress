var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

var messages = [
    {name: 'Tim', message: "Hi"},
    {name: 'Jane', message: "Hello"}
];

app.get('/messages', (req, res) => {
    res.send(messages)
});

app.post('/messages', (req, res) => {
    var newMessage = JSON.stringify(req.body);
    console.log(newMessage);
    console.log(messages);
    messages.push(newMessage);
    res.sendStatus(200);
})

var server = app.listen(3008, () => {
    console.log('Server is listening on port', server.address().port)
});
