import React from 'react'
import socketIoClient from 'socket.io-client';
import {useEffect, useState} from 'react';

const ENDPOINT = 'http://localhost:8081'
const connection = socketIoClient(ENDPOINT);

const Chatroom = (props) => {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    connection.on('INITIAL', (data) => {
      console.log('HELLO MESSAGE HAS COME IN!!');
      console.log(data);
      setUser(prev => data.name);
      setUsers(prev => data.users);
    })

    connection.on('NEW_USER_CONNECTION', (data) => {
      setUsers(prev => [...prev, data]);
    })
  
    connection.on("DISCONNECT", (data) => {
      setUsers(prev => prev.filter(name => name !== data));
    })

  }, [connection]); 




  return (
    <div >
      <h1>hello world!</h1>
      <h1>Current User:{user}</h1>
      <h3>User List</h3>
      {users.map(user => <li>{user}</li>)}
      <button onClick={() => connection.emit("CLICKED", 'clicked')}>Click me</button>
  </div>
//     <div>
//       <body>
//   <div className="chat-container">
//     <header className="chat-header">
//       <h1><i className="fas fa-smile"></i> ChatCord</h1>
//       <a href="index.html" className="btn">Leave Room</a>
//     </header>
//     <main className="chat-main">
//       <div className="chat-sidebar">
//         <h3><i className="fas fa-comments"></i> Room Name:</h3>
//         <h2 id="room-name">JavaScript</h2>
//         <h3><i className="fas fa-users"></i> Users</h3>
//         <ul id="users">
//           <li>Brad</li>
//           <li>John</li>
//           <li>Mary</li>
//           <li>Paul</li>
//           <li>Mike</li>
//         </ul>
//       </div>
//       <div className="chat-messages">
// 					<div className="message">
// 						<p className="meta">Brad <span>9:12pm</span></p>
// 						<p className="text">
// 							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
// 							repudiandae.
// 						</p>
// 					</div>
// 					<div className="message">
// 						<p className="meta">Mary <span>9:15pm</span></p>
// 						<p className="text">
// 							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
// 							repudiandae.
// 						</p>
// 					</div>
//       </div>
//     </main>
//     <div className="chat-form-container">
//       <form id="chat-form">
//         <input
//           id="msg"
//           type="text"
//           placeholder="Enter Message"
//           required
//           autocomplete="off"
//         />
//         <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
//       </form>
//     </div>
//   </div>

//   <script src="js/main.js"></script>
// </body>
//     </div>
  )
}

export default Chatroom
