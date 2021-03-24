const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

let count = 0;
// runs when client connects
io.on('connection', socket => {
  //Receives equation data and sends back to client
  socket.on('equation', equ => {
    
    if (count < 10) {
    io.emit('displayEq', equ);
    }
    count++;
    console.log(count);
  })

});


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));