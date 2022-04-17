import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import Chatroom from './Chatroom';
const ChatroomList = (props) => {

  return (
    <div>
      <Link to ={`/chatrooms/trending`}>
        <Button variant="contained"># Trending Crypto</Button>
      </Link>
      <Link to ={`/chatrooms/investments`}>
        <Button variant="contained"># Investments</Button>
      </Link>
      <Link to ={`/chatrooms/general`}>
        <Button variant="contained"># General</Button>
      </Link>
      <Link to ={`/chatrooms/events`}>
        <Button variant="contained"># Events</Button>
      </Link>

      <Chatroom/>
    </div>
  )
}

export default ChatroomList
