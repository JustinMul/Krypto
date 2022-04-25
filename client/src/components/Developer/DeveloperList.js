import React from 'react'
import SideBarList from '../Dashboard/SideBarList'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';
import { Card } from '@mui/material';
import Paper from '@mui/material/Paper';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Dashboard/TrendingCrypto.scss';
import { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Developers from './Developers';

const DeveloperList = (props) => {
  const username = JSON.parse(localStorage.getItem('username'));
  const [adminColor, setAdminColor] = useState("admin");
  const [adminColor2, setAdminColor2] = useState("admin2");
  const [adminColor3, setAdminColor3] = useState("admin3");
  useEffect(()=> {
    if (props.mode === "dark"){
    setAdminColor("adminDark")
    setAdminColor2("adminDark2")
    setAdminColor3("adminDark3")
    }
    else {
    setAdminColor("admin")
    setAdminColor2("admin2")
    setAdminColor3("admin3")
    }
  }, [props.mode])

  const admins = [
    {
      name: "Justin",
      github: "https://github.com",
      linkedin: "https://www.linkedin.com",
      img: "J",
      description: ""
    },
    {
      name: "Jack",
      github: "https://github.com/Jackthz97?tab=repositories",
      linkedin: "https://www.linkedin.com/in/tianhao-zhang-b49a5b226/",
      img: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/238895873_1250827202017389_3723395007403731988_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=85Pb-LL4UhgAX_7Tq7y&_nc_ht=scontent.fyzd1-2.fna&oh=00_AT_QukIE_3-Ob9oYJoo4ct_4PAVsuoNYxqYVhnhNTjOedw&oe=62661B6F",
      description: "I love to create and develop websites! Please hire me!"
    },
    {
      name: "Saurabh",
      github: "https://github.com",
      linkedin: "https://www.linkedin.com",
      img: "S",
      description: ""
    }]
const developers = admins.map((dev) => {
  return (
    <Developers
    key={dev.name}
    name={dev.name}
    img={dev.img}
    github={dev.github}
    description={dev.description}
    linkedin={dev.linkedin}
    adminColor={adminColor}
    adminColor2={adminColor2}
    adminColor3={adminColor3}
    mode={props.mode}
    />
  );
})
  return (
    <div>
      <SideBarList mode={props.mode} setMode={props.setMode}/>
      <Typography align="center" variant="h3" fontFamily={'Pacifico'} mr={3.5}>
        Krypto
      </Typography>
      <Typography align="center" variant="h3"  fontFamily={'Pacifico'} mr={3.5} mt={1}>
        Developers
      </Typography>
      <Grid container direction={"row"} justifyContent={"center"} mt={2}>
      {developers}
        </Grid>
          <Typography align="center" variant="h4" noWrap component="div" mr={3} mt={1}>Built with</Typography> 
        <Grid container direction={"row"} justifyContent={"center"} mt={5}>
          <Typography mr={4}><img src={"reactIcon.jpg"} alt={"React"} width={62}/></Typography> 
          <Typography mr={4}><img src={"psqlIcon.png"} alt={"psql"} width={70}/></Typography> 
          <Typography mr={4}><img src={"socketio.png"} alt={"socket.io"} width={70}/></Typography> 
          <Typography mr={5}><img src={"js.webp"} alt={"Js"} width={65}/></Typography> 
          <Typography mr={4}><img src={"html.png"} alt={"html"} width={65}/></Typography> 
          <Typography mr={2}><img src={"css.png"} alt={"css"} width={65}/></Typography> 
          <Typography mt={1} mr={1}><img src={"sass.png"} alt={"sass"} width={103}/></Typography> 
          <Typography><img src={"mui.png"} alt={"mui"} width={80}/></Typography> 
        </Grid> 
    </div>
  )
}
export default DeveloperList