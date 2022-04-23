// import React from 'react';
// import io from 'socket.io-client';
// import {useEffect, useState} from 'react';
// import Chat from './Chat';
// import Button from '@mui/material/Button';

// const socket = io.connect("http://localhost:8081");

// const Chatroom = (props) => {
//   const [username, setUsername] = useState({});
//   // const [room, setRoom] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   useEffect(() => {
    
//     setUsername(JSON.parse(localStorage.getItem('username')));
    
//   }, []);

//   const joinRoom = () => {
//     if (username.name !== "" && props.roomId !== "") {
//       socket.emit("join_room", props.roomId);
//       setShowChat(true);
//     }
//   };
//   console.log("username.name: ", username.name)
//   return (
//     <div className="App">
//     {!showChat ? (
//       <div className="joinChatContainer">
//         <h3>Join A Chat</h3>
      
//         <Button onClick={joinRoom} variant="contained">
//         Join A Room
//         </Button>
//       </div>
//     ) : (
//       <Chat socket={socket} user={username.name} img={username.img} room={props.roomId} />
//     )}
//   </div>
// );
// }

// export default Chatroom