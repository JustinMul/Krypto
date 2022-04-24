import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import {useEffect} from 'react';
import { Avatar } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const drawerWidth = 195;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});


const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function SideBarList(props) {
 
      const [textColor, setTextColor] = useState('black');
      const [value, setValue] = useState({});
      const [open, setOpen] = useState(false);
      const theme = useTheme();
    
    const handleClick = () => {
      setValue(localStorage.removeItem('username'));
    }
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const [username, setUsername] = useState({});
    const handleSwtich = () => {
      (props.mode === 'dark') ? props.setMode('light') : props.setMode('dark')
    }
  
    useEffect(() => {
      setUsername(JSON.parse(localStorage.getItem('username')));
    }, []);

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box display={'flex'} flexGrow={1}>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'grey'}}>
            <img src={'https://simplefx.com/assets/images/headers-img/home-animation.gif'} prop={"img"} width='40'/>
          </Link>
          <Typography variant="h6" noWrap component="div" pl={2} pt={1}>
             Hello {username.name}   
          </Typography>
              </Box>
              <Box>
          <FormGroup >  
            {
              (props.mode === 'light') ? 
              <Brightness4Icon onClick={handleSwtich}/> : 
              <DarkModeIcon onClick={handleSwtich}/>
            } 
          </FormGroup> 
          
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <Avatar alt="Remy Sharp"
                    src={username.img}
                    sx={{ width: 50, height: 50, border: 1, borderColor: "black" }}
                  />
          <Typography variant="h6" noWrap component="div" pl={2} pt={1}>
            {username.name}   
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <List>
          {/* button for dashboard */}
          {<Link to="/dashboard" style={{ textDecoration: 'none', color: 'grey'}}>
            
            <ListItemButton
              key="dashboard"
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >

              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            </Link>
          }
          
            {/* button for Chatrooms */}
            {<Link to="/chatrooms" style={{ textDecoration: 'none', color: 'grey'}}>
                        
              <ListItemButton
                key="chatrooms"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText primary="Chatrooms" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
                        </Link>
              }

               {/* button for news */}
              {<Link to="/news" style={{ textDecoration: 'none', color: 'grey'}}>
                        
                <ListItemButton
                  key="news"
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
  
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <NewspaperIcon />
                  </ListItemIcon>
                  <ListItemText primary="News" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                          </Link>
                }

                {/* button for calculators */}
                {<Link to="/calculators" style={{ textDecoration: 'none', color: 'grey'}}>
                        
                  <ListItemButton
                    key="calculators"
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
    
                <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <SwapVerticalCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Converter" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                          </Link>
                  }
              
        </List>
        <Divider />
        
        {<Link to="/" onClick={() => handleClick()} style={{ textDecoration: 'none', color: 'grey'}}>
                        
                        <ListItemButton
                          key="/"
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                          }}
                          onClick ={handleClick}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                            >
                            <LogoutIcon/>
                           
                          </ListItemIcon>
                          <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                                  </Link>
                        }
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}


//  <li>
//         <Link to="/dashboard" style={{ textDecoration: 'none', color: textColor }}>Dashboard</Link>
//         </li>
//         <li>
//         <Link to="/watchlist" style={{ textDecoration: 'none', color: textColor }}>Watchlist</Link>
//         </li>
//         <li>
//         <Link to="/news" style={{ textDecoration: 'none', color: textColor }}>News</Link>
//         </li>
//         <li>
//         <Link to="/chatrooms" style={{ textDecoration: 'none', color: textColor }}>Chat</Link>
//         </li>
//         <li>
//         <Link to="/calculators" style={{ textDecoration: 'none', color: textColor }}>Calculators</Link>
//         </li>
//         <li>
//         {/* <Link to="/" onClick={() => clearName()}>Logout</Link> */}
//         <Link to="/" style={{ textDecoration: 'none', color: textColor }} onClick ={handleClick}>Logout</Link>
//         </li>
