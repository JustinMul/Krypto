import React, { Box, CardContent, Typography, Avatar, Card } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';
import Paper from '@mui/material/Paper';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Developer.scss'

const Developers = (props) => {
  return (     
    <Box mr={4}>  
      <Paper elevation={3}> 
        <Card 
          sx={{ width: 300, mb:4}} 
          align="center" 
          className={
            (props.name === "Justin") ? 
            props.adminColor : 
            (props.name === "Jack") ? 
            props.adminColor2 : 
            (props.name === "Saurabh") && 
            props.adminColor3
          }>
          <Avatar alt={props.name}
            src={props.img}
            sx={{ width: 100, height: 100, border: 1, borderColor: "black" , mt: 3}}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
              <a href={props.github} 
                style={(props.mode === "dark") ? 
                { textDecoration: 'none', color: 'white' } : 
                { textDecoration: 'none', color: 'black' }}>
                <GitHubIcon style={{ fontSize: 50 }}/> 
            </a>
            <a href={props.linkedin} 
              style={(props.mode === "dark") ? 
              { textDecoration: 'none', color: 'white' } : 
              { textDecoration: 'none', color: 'black' }}>
              <LinkedInIcon style={{ fontSize: 50 }}/>
            </a>
            <Typography align="center" fontWeight={"bold"} variant="body1">
              {(props.description) ? props.description :               
              <>
              <Skeleton animation="wave"/>
              <Skeleton animation="wave"/>
              </>
              }

            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  )
}
export default Developers