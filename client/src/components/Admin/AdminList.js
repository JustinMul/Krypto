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
import { Admins } from './Admins';

export const AdminList = (props) => {
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
    <Admins
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
      <Typography align="center" variant="h3" noWrap component="div" mr={3.5}>
        Krypto
      </Typography>
      <Typography align="center" variant="h3" noWrap component="div" mr={3.5}>
        Developers
      </Typography>
      <Grid container direction={"row"} justifyContent={"center"} mt={5}>
      {developers}
        </Grid>
    </div>
  )
}
