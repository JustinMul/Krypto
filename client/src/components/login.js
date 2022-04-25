// import {React,useState} from 'react';
// import { useNavigate } from 'react-router';
// import Box from '@mui/material/Box';

// import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { Stack } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import axios from 'axios';

// const Login = () => {

//   const [values, setValues] = useState({
//     email : '',
//     password: '',
//     img:'',
//     showPassword: false,
//   });

//   const handleEmail = (event) => {
    
//     setValues({
//       ...values ,
//       email: event.target.value
//     });
//   };
//   const handlePassword = (event) => {

//     setValues({
//       ...values ,
//       password: event.target.value
//     });
//   };
//   // console.log("values:",values);
//   const handleClickShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   let navigate = useNavigate();
//   const submitHandler = (event) => {
//     event.preventDefault();
    
//     axios.put(`http://localhost:8081/user-data`, {data: values}).then((response)=> {
//       console.log("email:",response.data.email);
//       console.log("password:",response.data.password);
//       if(response.data.email && response.data.password){
//         localStorage.setItem('username',JSON.stringify(response.data));
        
//       navigate('/dashboard');
//       }
//     });
//   }


//   // Styling for Submit Button

//   const BootstrapButton = styled(Button)({
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 16,
//     padding: '6px 12px',
//     border: '1px solid',
//     lineHeight: 1.5,
//     backgroundColor: '#0063cc',
//     borderColor: '#0063cc',
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       backgroundColor: '#0069d9',
//       borderColor: '#0062cc',
//       boxShadow: 'none',
//     },
//     '&:active': {
//       boxShadow: 'none',
//       backgroundColor: '#0062cc',
//       borderColor: '#005cbf',
//     },
//     '&:focus': {
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
//   });
 
//   return (
//     <Stack
//       direction="row"
//       justifyContent="center"
//       alignItems="center"
//       spacing={2}
//     >
//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <Avatar
//         alt="Remy Sharp"
//         src="	https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png"
//         sx={{ width: 100, height: 100 }}
//         />

//         <div>
//           <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//             <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
//             <OutlinedInput
              
//               id="outlined-adornment-email"
//               value={values.email}
//               onChange={handleEmail}
//               label="Email"
//             />
//           </FormControl>
//           <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//             <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//             <OutlinedInput
//               id="outlined-adornment-password"
//               type={values.showPassword ? 'text' : 'password'}
//               value={values.password}
//               onChange={handlePassword}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               label="Password"
//             />
//           </FormControl>
//         </div>
//         <div>
//           <BootstrapButton sx={{ m: 1, width: '25ch' }} variant="contained" disableRipple onClick={submitHandler}>
//             Login
//           </BootstrapButton>
//         </div>
//         <div>
//           <BootstrapButton sx={{ m: 1, width: '25ch' }} variant="contained" disableRipple>
//             Register
//           </BootstrapButton>
//         </div>
//       </Box>
//     </Stack>
//   );  
// };

// export default Login;

import * as React from 'react';

import { useNavigate } from 'react-router';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        krypto
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const values = {
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log("data:",values);

    axios.put(`http://localhost:8081/user-data`, {data:values}).then((response)=> {
      console.log("email:",response.data.email);
      console.log("password:",response.data.password);
      if(response.data.email && response.data.password){
        localStorage.setItem('username',JSON.stringify(response.data));
        
      navigate('/dashboard');
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/undraw_login_re_4vu2.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize:'1170px 900px',
            backgroundPosition: 'center',
            
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box

            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
              <img src="/KRYPTO_free-file.png" height='70' alt ="logo"></img>
            {/* </Avatar> */}
            {/* <Typography component="h1" variant="h5" sx={{  mt: 3 }} >
              Sign in
            </Typography> */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
              <TextField
                sx={{ mt: 4, mb: 2}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                color='primary'
                name="email"
                autoComplete="email"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" color='error'>
                      <EmailIcon sx={{ color: 'error', mr: 1, my: 0.5 }} style={{ color: "#1976D2" }}/>
                    </InputAdornment>
                  ),
                }}

              />
              <TextField
                sx={{ mt: 6, mb: 2 }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                variant='outlined'
                color='primary'
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" color='primary'>
                      <LockIcon sx={{ color: 'error', mr: 1, my: 0.5 }} style={{ color: "#1976D2" }}/>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                
                color="primary"
                sx={{ mt: 5, mb: 2 }}
                // startIcon={}
                size="large"
              >
              <IconButton aria-label="fingerprint" color="primary" size="medium">
                <Fingerprint style={{ color: "white" }}/>
              </IconButton>
                Sign In
              </Button>
              <Grid container sx={{ mt: 10 }}>
                <Grid item xs>
                  <Link href="#" variant="body2" >
                    <Typography color="primary">Forgot password?</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 8 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}