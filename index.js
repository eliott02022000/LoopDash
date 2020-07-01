const express = require('express'),
    homeRouter = require('./routes/home'),
    bodyParser = require('body-parser')

const app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use((request, response, next) => {
    request.io = io;
    next();
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(homeRouter);


server.listen(8080);