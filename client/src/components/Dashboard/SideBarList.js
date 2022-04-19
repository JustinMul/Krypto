import { Routes, Route, Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';
import { ClassNames } from '@emotion/react';
import {useState, useEffect} from 'react';
import { Avatar } from '@mui/material';



export default function SideBarList (props) {
  // console.log('inside side bar list');
  // const [ username, setUsername] = useState("");
  // useEffect(()=>{
  //   setUsername(localStorage.getItem("userName"))
  // }, [username]);
  // const [ name, setName ] = useState(props.user);
  // const clearName = () => {
  //   setName(null);
  // }
  const [value, setValue] = useState({});
  useEffect(() => {
    
    setValue(JSON.parse(localStorage.getItem('username')));
    
  }, []);

  const handleClick = () => {
    setValue(localStorage.removeItem('username'));
  }

  return (
    <div>
      <div> 
        {/* <img src="https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png" alt="image"/>
      <div>{name}</div> */}
      <Avatar
        alt="Remy Sharp"
        src={value.img}
        sx={{ width: 80, height: 80 }}
        />
        <p>{`${value.name}`}</p>
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
        {/* <Link to="/" onClick={() => clearName()}>Logout</Link> */}
        <Link to="/" onClick ={handleClick}>Logout</Link>
        </li>
      </ul>
      </div>
   
  )
}





