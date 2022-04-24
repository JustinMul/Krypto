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
const { SocketAddress } = require('net');


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
app.put('/insert-watchlist',(req, res) => {
  let response = req.body.data;
  console.log("req.body for fav: " , req.body);
  db.query(`INSERT INTO watchlists (user_email, crypto_id, user_email_cyrpto_id)
  VALUES ($1, $2, $3) RETURNING *;`, [req.body.user.email, req.body.id, `${req.body.user.email}${req.body.id}`])
    .then((res) => res.send(res))
    .catch((error) => res.send(error));
});

//used to delete from watchlist
app.put('/user-delete',(req, res) => {
  let response = req.body.data;
  console.log("req.body for fav: " , req.body);
  db.query(`DELETE FROM watchlists WHERE user_email = $1 and crypto_id = $2;`, [req.body.user.email,req.body.data])
    .then((res) => res.send(res))
    .catch((error) => res.send(error));
});



//used to retrive all the favs from the watchlist database
app.put('/watchlist',(req, res) => {
  let response = req.body.user.email;
  console.log("this is the response: " , response);
  db.query(`select crypto_id FROM watchlists where user_email = $1`, [response])
    .then(response => res.send(response.rows))
    .catch((error) => res.send(error));
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
const STATIC_CHANNELS = [{
  name: 'Trending',
  img: 'https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/1597430564.8627.jpg?itok=k7m8PyxC',
  dis: "Join the room to talk about what's hot in the crypto market.",
  participants: 0,
  id: 1,
  sockets: []
}, {
  name: 'Market',
  img: 'https://mtltimes.ca/wp-content/uploads/2022/02/crypto-market.jpg',
  dis: "Join the room to talk about anything related to the crypto Market.",
  participants: 0,
  id: 2,
  sockets: []
}, {
  name: 'Events',
  img: 'https://www.altcoinbuzz.io/wp-content/uploads/2022/01/Top-crypto-news-1200-x-630-px.jpg',
  dis: "Join the room to talk about any events related to any crypto.",
  participants: 0,
  id: 3,
  sockets: []
}, {
  name: 'General',
  img: 'https://image.cnbcfm.com/api/v1/image/106837526-1612866638564-gettyimages-1294702554-yn_cryptoimages_016.jpeg?v=1638814215&w=1920&h=1080',
  dis: "Join the room to talk about anything related to crypto.",
  participants: 0,
  id: 4,
  sockets: []
}];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
// someone has connected listener!
io.on('connection', (socket) => { // socket object may be used to send specific messages to the new connected client
  console.log('new client connected');
  socket.emit('connection', null);
  socket.on('channel-join', id => {
    console.log('channel join', id);
    STATIC_CHANNELS.forEach(c => {
      if (c.id === id) {
        
        if (c.sockets.indexOf(socket.id) === (-1)) {
          c.sockets.push(socket.id);
          c.participants++;
          io.emit('channel', c);
        }
      } else {
        let index = c.sockets.indexOf(socket.id);
     
        if (index !== (-1)) {
          c.sockets.splice(index, 1);
          c.participants--;
          io.emit('channel', c);
        }
      }
    });

    return id;
  });
  socket.on('send-message', message => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    STATIC_CHANNELS.forEach(c => {
      let index = c.sockets.indexOf(socket.id);
    
      if (index !== (-1)) {
        c.sockets.splice(index, 1);
        c.participants--;
        io.emit('channel', c);
      }
    });
  });

});



/**
* @description This methos retirves the static channels
*/
app.get('/getChannels', (req, res) => {
  res.json({
    channels: STATIC_CHANNELS
  });
});

module.exports = {app, server};
