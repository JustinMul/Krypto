# Krypto

## Overview
The idea behind this website was to ultimately address the overwhelming number of crypto information sources out there and provide users with a smooth & seamless experience.

## User Stories

### Login (username: mark@gmail.com : password: 123)
- User can login <br />
![""](https://github.com/JustinMul/Krypto/blob/main/docs/loginGif.gif?raw=true)

### Dashboard
- User can toggle dark and light mode
- User can access latest crypto trends
- User can add/delete items from watchlist
- User can search for particular cryptos they're interested in <br />
![""](https://github.com/JustinMul/Krypto/blob/main/docs/dashboard.gif?raw=true)

### Crypto information page
- User can click on any crypto to open specific crypto details page
- User can view date specific price trends on a chart
- User can filter the date range for the price chart 
- User can view detailed crypto metrics <br />
![""](https://github.com/JustinMul/Krypto/blob/main/docs/singleCrypto.gif?raw=true)

### Chat Room 
- User can join a chat room
- User can send and receive messages <br />
![""](https://github.com/JustinMul/Krypto/blob/main/docs/chatroom.gif?raw=true)

### News
- User can browse news articles
- User can select particular news article to be redirected to the source <br />
![""](https://github.com/JustinMul/Krypto/blob/main/docs/news.gif?raw=true)

### Currency Converter
- Use can specify amount of the primary currency
- User can select a primary currency from a drop down
- User can select a secondary currency from a  secondary  dropdown
- User can check/clear the conversion result <br />
![""](https://github.com/JustinMul/Krypto/blob/main/docs/cryptoConverter.gif?raw=true)

### Dark mode showcase
![""](https://github.com/JustinMul/Krypto/blob/main/docs/darkmode.gif?raw=true)

## Setup
List of dependencies

### Client Side:
- "@emotion/react": "^11.9.0",
- "@emotion/styled": "^11.8.1",
- "@mui/icons-material": "^5.6.1",
- "@mui/material": "^5.6.1",
- "@testing-library/jest-dom": "^5.16.4",
- "@testing-library/react": "^13.0.1",
- "@testing-library/user-event": "^13.5.0",
- "axios": "^0.26.1",
- "chart.js": "^3.7.1",
- "react": "^18.0.0",
- "react-chartjs-2": "^4.1.0",
- "react-dom": "^18.0.0",
- "react-router-dom": "^6.3.0",
- "react-scripts": "5.0.1",
- "react-scroll-to-bottom": "^4.2.0",
- "sass": "^1.50.1",
- "socket.io-client": "^4.4.1",
- "web-vitals": "^2.1.4"

**cd** into client folder to execute **npm** **install** the dependencies.


### Server Side:

- "axios": "^0.26.1",
- "body-parser": "^1.18.3",
- "cookie-parser": "~1.4.4",
- "cookie-session": "^2.0.0",
- "cors": "^2.8.5",
- "debug": "~2.6.9",
- "dotenv": "^16.0.0",
- "express": "~4.16.1",
- "ikea-name-generator": "^1.0.3",
- "morgan": "~1.9.1",
- "passport": "^0.5.2",
- "passport-github2": "^0.1.12",
- "pg": "^8.7.3",
- "socket.io": "^4.4.1"


**cd** into server folder to execute **npm** **install** the dependencies.


## Create and seed the databases
**npm run db:reset**
