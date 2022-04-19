const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {Server} = require('socket.io');
const bodyParser = require('body-parser');

const http = require('http');

const db = require('./configs/db.config');
const cors = require('cors');

const indexRouter = require('./routes/index');
const marketRouter = require('./routes/market');
const cryptoRouter = require('./routes/singleCrypto');
const chartRouter = require('./routes/chart');

const cookieSession = require("cookie-session");


const app = express();

// const server = require('./bin/www');


app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
// app.use('/TrendingCrypto', usersRouter(db));
app.use('/Market', marketRouter(db));
app.use('/crypto', cryptoRouter(db));
app.use('/chart', chartRouter(db));

app.use(cors());
//add new user
const validation = {
  name: "",
  wishlist: []
};
//this is for validating log in
app.put('/user-data',(req, res) => {
  let responds = req.body.data;
  console.log("req.body from client: " , responds.user);

  db.query(`SELECT * FROM users WHERE email = $1`, [responds.user])
    .then(data => {
      
      if (data.rows[0]) {
        console.log("user: ", data.rows[0]);
        validation.name = data.rows[0].name;
      }
    });
  res.send(validation);
});


//
app.put('/user-fav',(req, res) => {
  let response = req.body.data;
  console.log("req.body for fav: " , req.body);
  db.query(`INSERT INTO users WHERE email = $1`, [response.user])
    .then(data => {
      
      if (data.rows[0]) {
        console.log("user: ", data.rows[0]);
        validation.name = data.rows[0].name;
      }
    });
  res.send(validation);
 
  res.send(validation);
});
/*

*/


console.log(`running on port`);


// Step 3: wrap the app in the HTTP createServer();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST']
  }
});

// someone has connected listener!
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

});

module.exports = {app, server};
