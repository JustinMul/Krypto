import { Routes, Route, Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';
import { ClassNames } from '@emotion/react';
import {useState, useEffect} from 'react';



export default function SideBarList (props) {
  // console.log('inside side bar list');
  // const [ username, setUsername] = useState("");
  // useEffect(()=>{
  //   setUsername(localStorage.getItem("userName"))
  // }, [username]);
  const [ name, setName ] = useState(props.user);
  const clearName = () => {
    setName(null);
  }
  return (
    <div>
      <div> 
        <img src="https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png" alt="image"/>
      <div>{name}</div>
      </div>
      <ul>
        <li>
        <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
        <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
        <Link to="/news">News</Link>
        </li>
        <li>
        <Link to="/chatrooms">Chat</Link>
        </li>
        <li>
        <Link to="/cryptotools">Tools</Link>
        </li>
        <li>
        <Link to="/" onClick={() => clearName()}>Logout</Link>
        </li>
      </ul>
      </div>
   
  )
}





