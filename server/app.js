const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {Server} = require('socket.io');

const http = require('http');

const db = require('./configs/db.config');
const cors = require('cors');

const indexRouter = require('./routes/index');
const marketRouter = require('./routes/market');
const cryptoRouter = require('./routes/singleCrypto');
const chartRouter = require('./routes/chart');

const ikea = require('ikea-name-generator');

const app = express();

// const server = require('./bin/www');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
// app.use('/TrendingCrypto', usersRouter(db));
app.use('/Market', marketRouter(db));
app.use('/crypto', cryptoRouter(db));
app.use('/chart', chartRouter(db));

console.log(`running on port`);


// Step 3: wrap the app in the HTTP createServer();
app.use(cors());
const server = http.createServer(app);
// const io = require('socket.io')(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     method: ['GET', 'POST']
//   }
// });
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST']
  }
});

// someone has connected listener!

// let users = [];
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });


  // // first param stands for MESSAGE TYPE
  // // payload
  // const name = ikea.getName();
  // users.push(name);
  // socket.emit('INITIAL', {name, users});
  // socket.name = name;
  // socket.broadcast.emit('NEW_USER_CONNECTION', name);

  // socket.on('disconnect', (data) => {
  //   console.log(data);
  //   console.log('someone has disconnected!!', socket.name);
  //   users = users.filter(name => name !== socket.name);
  //   socket.broadcast.emit('DISCONNECT', socket.name);
  // });

  // socket.on('CLICKED', (data) => {
  //   console.log("someone has a clicked the button!");
  // });

});

// server.listen(8081);

module.exports = {app, server};
