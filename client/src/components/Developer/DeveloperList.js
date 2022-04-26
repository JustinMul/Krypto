import React from 'react'
import SideBarList from '../Dashboard/SideBarList'
import { Grid } from '@mui/material'
import { Typography, Tooltip } from '@mui/material';
import '../Dashboard/TrendingCrypto.scss';
import { useState, useEffect } from 'react';
import Developers from './Developers';
import "./Developer.scss"

const DeveloperList = (props) => {
  // const username = JSON.parse(localStorage.getItem('username'));
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
      github: "https://github.com/JustinMul",
      linkedin: "https://www.linkedin.com/in/justin-m-67321bb8/",
      img: "/justin.jpeg",
      description: "Full Stack Developer with Passion to create dynamic websites"
    },
    {
      name: "Jack",
      github: "https://github.com/Jackthz97?tab=repositories",
      linkedin: "https://www.linkedin.com/in/tianhao-zhang-b49a5b226/",
      img: "Jack.png",
      description: "Full Stack Developer that loves to create & develop websites!"
    },
    {
      name: "Saurabh",
      github: "https://github.com/saurabhdabas",
      linkedin: "https://www.linkedin.com/in/saurabh-dabas-a3617b15a/",
      img: "saurabh.jpg",
      description: "Full Stack Developer with Passion to create dynamic websites"
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
        Krypto        Developers
      </Typography>

      <Grid container direction={"row"} justifyContent={"center"} mt={2.5}>
      {developers}
        </Grid>
          <Typography align="center" variant="h4" noWrap component="div" mr={3} mt={1}>Built with</Typography> 
        <Grid container direction={"row"} justifyContent={"center"} mt={3}>
        <Tooltip title="React Js" arrow>
          <Typography className='anime' mr={4}><img src={"reactIcon.jpg"} alt={"React"} width={62}/></Typography> 
          </Tooltip>
          <Tooltip title="PostgreSQL" arrow>
          <Typography className='anime' mr={4}><img src={"psqlIcon.png"} alt={"psql"} width={70}/></Typography> 
          </Tooltip>
          <Tooltip title="Socket.io" arrow>
          <Typography className='anime' mr={4}><img src={"socketio.png"} alt={"socket.io"} width={70}/></Typography> 
          </Tooltip>
          <Tooltip title="Node Js" arrow>
          <Typography className='anime' mr={4.5}><img src={"node.png"} alt={"Node Js"} width={70}/></Typography> 
          </Tooltip>
          <Tooltip title="JavaScript" arrow>
          <Typography className='anime' mr={5}><img src={"js.webp"} alt={"Js"} width={65}/></Typography> 
          </Tooltip>
          <Tooltip title="HTML" arrow>
          <Typography className='anime' mr={4}><img src={"html.png"} alt={"html"} width={65}/></Typography> 
          </Tooltip>
          <Tooltip title="CSS" arrow>
          <Typography className='anime' mr={2}><img src={"css.png"} alt={"css"} width={65}/></Typography> 
          </Tooltip>
          <Tooltip title="SASS" arrow>
          <Typography className='anime' mt={1}><img src={"sass.png"} alt={"sass"} width={103}/></Typography> 
          </Tooltip>
          <Tooltip title="Material UI" arrow>
          <Typography className='anime' mr={3}><img src={"mui.png"} alt={"mui"} width={80}/></Typography> 
          </Tooltip>
          <Tooltip title="Express Js" arrow>
          <Typography mt={2}><img className='rounded' src={"expressjs.png"} alt={"Express Js"}/></Typography>
          </Tooltip>
        </Grid> 
    </div>
  )
}
export default DeveloperList