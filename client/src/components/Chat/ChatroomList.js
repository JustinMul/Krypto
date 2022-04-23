import { React, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 
import Chat from './Chat';
import SideBarList from '../Dashboard/SideBarList'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
 
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 
import io from 'socket.io-client';
const socket = io.connect("http://localhost:8081");
 
 
const ChatRooms = () => {
 const [room, setRoom] = useState("");
 const [user, setUser] = useState({});
 
 
 useEffect(() => {
  
   setUser(JSON.parse(localStorage.getItem('username')));
  
 }, []);
 
 const joinRoom = (room) => {
   setRoom(room);
 };
 
 useEffect(()=>{
   socket.emit("join_room", room);
 },[room])
 const theme = createTheme();
 const button = () => {
   console.log('this is the value of room', room)
   if (room === "") {
     return (
       <ThemeProvider theme={theme}>
         <Grid container component="main" sx={{ height: '90vh' }}>
           <CssBaseline />
             <Grid
               item
               xs={false}
               sm={4}
               md={7}
               sx={{
                 backgroundImage: 'url(/Login.png)',
                 backgroundRepeat: 'no-repeat',
                 backgroundColor: (t) =>
                   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
               }}
             />
             <Grid item xs={12} sm={8} md={5}>
             <Grid container spacing={2}>
 
               <Grid item xs={6}>
                 <Card sx={{ maxWidth: 300 , height: 280 }}>
                   <CardMedia
                     component="img"
                     height="140"
                     image="trending.jpeg"
                     alt="green iguana"
                   />
                   <CardContent>
 
                     <Typography variant="body2" color="text.secondary">
                       Join the Room to talk about what's hot in the crypto market.
                     </Typography>
                   </CardContent>
                   <CardActions>
                     <Button size="medium" variant="contained" onClick={()=>{joinRoom('trending')}} >Join Room</Button>
                   </CardActions>
                 </Card>
               </Grid>
 
               <Grid item xs={6}>
                 <Card sx={{ maxWidth: 300 , height: 280 }}>
                   <CardMedia
                     component="img"
                     height="140"
                     image="/investment.jpeg"
                     alt="green iguana"
                   />
                   <CardContent>
 
                     <Typography variant="body2" color="text.secondary">
                     Join the Room to talk about what's hot in the crypto market.
                     </Typography>
                   </CardContent>
                   <CardActions >
                     <Button size="medium" variant="contained" onClick={()=>{joinRoom('investments')}} >Join Room</Button>
                   </CardActions>
                 </Card>
               </Grid>
 
               <Grid item xs={6}>
                 <Card sx={{ maxWidth: 300 , height: 280 }}>
                   <CardMedia
                     component="img"
                     height="140"
                     image="/crypto.jpeg"
                     alt="green iguana"
                   />
                   <CardContent>
 
                     <Typography variant="body2" color="text.secondary">
                       Join the Room to share your thoughts and talk crypto in general.
                     </Typography>
                   </CardContent>
                   <CardActions>
                     <Button size="medium" variant="contained" onClick={()=>{joinRoom('general')}} >Join Room</Button>
                   </CardActions>
                 </Card>
               </Grid>
 
               <Grid item xs={6}>
                 <Card sx={{ maxWidth: 300 , height: 280 }}>
                   <CardMedia
                     component="img"
                     height="140"
                     image="/bitcoin.jpeg"
                     alt="green iguana"
                   />
                   <CardContent>
 
                     <Typography variant="body2" color="text.secondary">
                       Join the Room to talk about various crypto events happening around the globe.
                     </Typography>
                   </CardContent>
                   <CardActions>
                     <Button size="medium" variant="contained" onClick={()=>{joinRoom('events')}} >Join Room</Button>
                   </CardActions>
                 </Card>
               </Grid>
             </Grid>
           </Grid>
         </Grid>
     </ThemeProvider>
     );
   } else {
     return (
       <Box>
         <Chat socket={socket} user={user.name} img={user.img} room={room} />
         <Button variant="contained" onClick={()=> {setRoom('')}}>Leave Room</Button>
       </Box>
 
     );
   }
 }
 
 return (
   <div>
 
     <SideBarList/>
     {button()}
    
   </div>
 )
}
 
export default ChatRooms;
