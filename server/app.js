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
// const validation = {
//   name: "",
//   wishlist: []
// };
//this is for validating log in
app.put('/user-data',(req, res) => {
  let data = {
    email:req.body.data.email,
    password:req.body.data.password
  };

  db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [data.email,data.password])
    .then(response => res.send(response.rows[0]))
    .catch(e => console.error(e.stack));
});




//used to insert into watchlist
app.put('/user-fav',(req, res) => {
  let response = req.body.data;
  console.log("req.body for fav: " , req.body);
  db.query(`INSERT INTO watchlists (user_email, crypto_id, user_email_cyrpto_id)
  VALUES ($1, $2, $3) RETURNING *;`, [req.body.user.email,req.body.data,`${req.body.user.email}${req.body.data}`])
    .catch((error) => console.log("Error: ", error));
});

//used to retrive all the favs from the watchlist database
app.put('/fav-list',(req, res) => {
  let response = req.body.user.email;
  console.log("this is the response: " , response);
  db.query(`select crypto_id FROM watchlists where user_email = $1`, [response])
    .then(response => res.send(response.rows));
});


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
