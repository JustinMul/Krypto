import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import Chatroom from './Chatroom';
import Header from '../Header/Header';
import SideBarList from '../Dashboard/SideBarList';
const ChatroomList = (props) => {

  const [room, setRoom] = useState("");
  const button = () => {
    console.log('this is the value of room', room)
    if (room === "") {
      return (
        <div>
        <Button variant="contained" onClick={()=> {setRoom('trending')}}># Trending Crypto</Button>
        <Button variant="contained" onClick={()=> {setRoom('investment')}}># Investments</Button>
        <Button variant="contained"onClick={()=> {setRoom('general')}}># General</Button>
        <Button variant="contained" onClick={()=> {setRoom('events')}}># Events</Button>
        </div>
      );
    } else {
      return (
        <div>
      <Button variant="contained"onClick={()=> {setRoom('')}}>Leave Room</Button>
      <Chatroom roomId={room}/>
      </div>
      );
    }
  }

  return (
    <div>
      <Header/>
      <SideBarList/>
      {button()}
      
    </div>
  )
}

export default ChatroomList
