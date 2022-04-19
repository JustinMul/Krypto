import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';

function Chat({ socket, username, room, img }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        img: img,
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
<div className="chat-window">
      <div className="chat-header">
        <p>Welcome to {room} chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                  <Avatar alt="Remy Sharp"
                    src={messageContent.img}
                    sx={{ width: 80, height: 80 }}
                  />
                  <p id="time">{messageContent.author} sent at: {messageContent.time}</p>
                    <p><strong>{messageContent.message}</strong></p>
                  </div>
                  <div className="message-meta">
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <Button onClick={sendMessage} variant="contained" endIcon={<SendIcon />}>
        Send
        </Button>
      </div>
    </div>
  );
}
export default Chat;