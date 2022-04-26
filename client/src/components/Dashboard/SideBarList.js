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
import Tooltip from '@mui/material/Tooltip';
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
import Badge from '@mui/material/Badge';
import LogoDevIcon from '@mui/icons-material/LogoDev';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

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

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


export default function SideBarList(props) {
 
  const [textColor, setTextColor] = useState('black');
  const [value, setValue] = useState({});
  const [username, setUsername] = useState({});
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

  const handleSwtich = () => {
    (props.mode === 'dark') ? props.setMode('light') : props.setMode('dark')
  }

  useEffect(() => {
    
    setUsername(JSON.parse(localStorage.getItem('username')));
   
  }, []);

  useEffect(() => {
    if (props.mode === 'dark') {
      setTextColor('white');
    } else if (props.mode === 'light') {
      setTextColor('black');
    }
  }, [props.mode])

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Tooltip title="Menu" placement="right-start" arrow>
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
          </Tooltip>
          <Box display={'flex'} flexGrow={1}>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: textColor}}>
              <img src={'https://simplefx.com/assets/images/headers-img/home-animation.gif'} prop={"img"} width='40' alt="bitcoin-gif"/>
            </Link>
            <Typography fontFamily={'Pacifico'} variant="h5" noWrap component="div" pl={2} pt={1}>
              Hello, {username.name}! 
            </Typography>
          </Box>
          <Box>
            <FormGroup>
              {
                (props.mode === 'light') ? 
                  <Tooltip title="Switch to Dark mode" placement="left-start" arrow>
                    <Brightness4Icon onClick={handleSwtich}/>
                  </Tooltip>
                  : 
                  <Tooltip title="Switch to Light mode" placement="left-start" arrow>
                    <DarkModeIcon onClick={handleSwtich}/>
                  </Tooltip>
              } 
            </FormGroup>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            variant="dot"
            width="5"
          >
            <Avatar alt="Remy Sharp"
              src={username.img}
              sx={{ width: 50, height: 50, border: 1, borderColor: "black" }}
            />
          </StyledBadge>
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
          {
            <Link to="/dashboard" style={{ 
              textDecoration: 'none', color: textColor
              }}>
              <ListItemButton
                key="dashboard"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  <Tooltip title="Dashboard" placement="right-start" arrow>
                    <DashboardIcon style={(props.mode === 'dark') ? { color: 'white' } : { color: "black" }}/>
                  </Tooltip>
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </Link>
          }
          
          {/* button for Chatrooms */}
          {
            <Link to="/chatrooms" style={{ 
              textDecoration: 'none', color:textColor
              }}>        
              <ListItemButton
                key="chatrooms"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  <Tooltip title="Chat" placement="right-start" arrow>
                    <ChatIcon style={
                      (props.mode === 'dark') ? 
                      { color: 'white' } 
                      :   
                      {color: "black"}}/>
                  </Tooltip>
                </ListItemIcon>
                <ListItemText primary="Chatrooms" sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </Link>
          }

            {/* button for news */}
          {
            <Link to="/news" style={{ 
              textDecoration: 'none', 
              color: textColor
              }}> 
              <ListItemButton
                key="news"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  <Tooltip title="News" placement="right-start" arrow>
                    <NewspaperIcon style={
                      (props.mode === 'dark') ? 
                      { color: 'white' } 
                      : 
                      {color: "black"}
                      }/>
                  </Tooltip>
                </ListItemIcon>
                <ListItemText primary="News" sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </Link>
          }
              {/* button for calculators */}
          {
            <Link to="/calculators" style={{ 
              textDecoration: 'none', 
              color: textColor
              }}>    
              <ListItemButton
                key="calculators"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
  
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  <Tooltip title="Converter" placement="right-start" arrow>
                    <SwapVerticalCircleIcon style={(props.mode === 'dark') ? {color: 'white' } : {color: "black"}}/>
                  </Tooltip>
                </ListItemIcon>
                <ListItemText primary="Converter" 
                sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </Link>
          }

          {
            <Link to="/developers" style={{ 
              textDecoration: 'none', 
              color: textColor
              }}>    
              <ListItemButton
                key="Developers"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
  
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  <Tooltip title="Developers" placement="right-start" arrow>
                    <LogoDevIcon style={(props.mode === 'dark') ? {color: 'white' } : {color: "black"}}/>
                  </Tooltip>
                </ListItemIcon>
                <ListItemText primary="Developers" 
                sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </Link>
          }
        </List>
        
        <Divider />
        
        {
          <Link to="/" onClick={() => handleClick()} 
            style={{ 
              textDecoration: 'none', 
              color: textColor
              }}>
                        
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
                }}>
                <Tooltip title="Logout" placement="right-start" arrow>
                  <LogoutIcon style={
                    (props.mode === 'dark') ? 
                    { color: 'white' } 
                    : 
                    {color: "black"}
                    }/>
                </Tooltip>
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
};

