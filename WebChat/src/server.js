var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var io = require('socket.io')(server);

var port = 8001;

app.use('/lib', express.static(__dirname + '/lib'));

app.get("/", function(req, res){
    fs.readFile('./WebContent/index.html', function(error,data){
        res.end(data);
    });
});

io.on('connection', function(socket){
    console.log('a user connected');

    // 받는 부분
    socket.on('client', function(msg){
        io.emit('client', msg);
    })

    socket.on('disconnect', function(){
        console.log('a user disconnected'); // user 창 종료 시 disconnect
    })
});

server.listen(port, function(){
    console.log("Hello WebChat Server!");
});