import {React, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
 
const Login = () => {
 
 const [values, setValues] = useState({
   password: '',
   showPassword: false,
 });
 
 const handleChange = (prop) => (event) => {
   setValues({ ...values, [prop]: event.target.value });
 };
 
 const handleClickShowPassword = () => {
   setValues({
     ...values,
     showPassword: !values.showPassword,
   });
 };
 
 const handleMouseDownPassword = (event) => {
   event.preventDefault();
 };
 
 const github = () => {
   window.open("http://localhost:3002/dashboard", "_self");
 };
 // Styling for Submit Button
 
 const BootstrapButton = styled(Button)({
   boxShadow: 'none',
   textTransform: 'none',
   fontSize: 16,
   padding: '6px 12px',
   border: '1px solid',
   lineHeight: 1.5,
   backgroundColor: '#0063cc',
   borderColor: '#0063cc',
   fontFamily: [
     '-apple-system',
     'BlinkMacSystemFont',
     '"Segoe UI"',
     'Roboto',
     '"Helvetica Neue"',
     'Arial',
     'sans-serif',
     '"Apple Color Emoji"',
     '"Segoe UI Emoji"',
     '"Segoe UI Symbol"',
   ].join(','),
   '&:hover': {
     backgroundColor: '#0069d9',
     borderColor: '#0062cc',
     boxShadow: 'none',
   },
   '&:active': {
     boxShadow: 'none',
     backgroundColor: '#0062cc',
     borderColor: '#005cbf',
   },
   '&:focus': {
     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
   },
 });
 return (
   <Stack
     direction="row"
     justifyContent="center"
     alignItems="center"
     spacing={2}
   >
     <Box
       component="form"
       sx={{
         '& .MuiTextField-root': { m: 1, width: '25ch' },
       }}
       noValidate
       autoComplete="off"
     >
       <Avatar
       alt="Remy Sharp"
       src=" https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png"
       sx={{ width: 100, height: 100 }}
       />
       <div>
         <TextField
           id="outlined-required"
           label="Username"
         />
       </div>
       <div>
         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
           <OutlinedInput
             id="outlined-adornment-password"
             type={values.showPassword ? 'text' : 'password'}
             value={values.password}
             onChange={handleChange('password')}
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   onClick={handleClickShowPassword}
                   onMouseDown={handleMouseDownPassword}
                   edge="end"
                 >
                   {values.showPassword ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
               </InputAdornment>
             }
             label="Password"
           />
         </FormControl>
       </div>
       <div>
         <BootstrapButton sx={{ m: 1, width: '25ch' }} variant="contained" disableRipple onClick={github}>
           Login
         </BootstrapButton>
       </div>
       <div>
         <BootstrapButton sx={{ m: 1, width: '25ch' }} variant="contained" disableRipple>
           Register
         </BootstrapButton>
       </div>
     </Box>
   </Stack>
 ); 
};
 
export default Login;
