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
  // const [textColor, setTextColor] = useState('black');
  const [value, setValue] = useState({});
  useEffect(() => {
    
    setValue(JSON.parse(localStorage.getItem('username')));
    
  }, []);
  const [textColor, setTextColor] = useState('black');
  useEffect(() => {
    if (props.mode === 'dark') {
      setTextColor('rgb(171, 171, 171)');
    } else if (props.mode === 'light') {
      setTextColor('black');
    }
  }, [props.mode])

  const handleClick = () => {
    setValue(localStorage.removeItem('username'));
  }

  return (
    <div>
      <div> 
      <Avatar
        alt="Remy Sharp"
        src={value.img}
        sx={{ width: 80, height: 80 }}
      />
        <p>{`${value.name}`}</p>
      </div>
      <ul>
        <li>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: textColor }}>Dashboard</Link>
        </li>
        <li>
        <Link to="/watchlist" style={{ textDecoration: 'none', color: textColor }}>Watchlist</Link>
        </li>
        <li>
        <Link to="/news" style={{ textDecoration: 'none', color: textColor }}>News</Link>
        </li>
        <li>
        <Link to="/chatrooms" style={{ textDecoration: 'none', color: textColor }}>Chat</Link>
        </li>
        <li>
        <Link to="/calculators" style={{ textDecoration: 'none', color: textColor }}>Calculators</Link>
        </li>
        <li>
        {/* <Link to="/" onClick={() => clearName()}>Logout</Link> */}
        <Link to="/" style={{ textDecoration: 'none', color: textColor }} onClick ={handleClick}>Logout</Link>
        </li>
      </ul>
      </div>
   
  )
}





