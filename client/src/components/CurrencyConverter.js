import {React, useState, useEffect} from 'react';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import RefreshIcon from '@mui/icons-material/Refresh';
import TextField from '@mui/material/TextField';
import Header from './Header/Header';
import SideBarList from './Dashboard/SideBarList';
import { cyan } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Typography } from "@mui/material";
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';


export default function CurrencyConverter() {
  const [ state, setState] = useState([{data:[]}]);
  const [ primary, setPrimary] = useState({
    price:"",
    name:"",
    image:""
  });
  const [ secondary, setSecondary] = useState({
    price:"",
    name:"",
    image:""
  });
  const [ number, setNumber] = useState(1);
  const [ result, setResult] = useState(0);

  useEffect(() => {
    axios.get('/market') 
      .then((res) => {
        setState((prev)=>[{ ...prev,
          data:res.data
        }])
        }
      )
      .catch((err)=>console.log(err));
  },[]);

  const cryptoList = state[0].data.map((crypto)=>{
  
    return (
      <MenuItem key ={crypto.name} value={{name:crypto.name, price: crypto.current_price, image: crypto.image}}>{crypto.name}<img src={crypto.image}alt = "crypto" width = '30' ></img></MenuItem>
    );
  })
  const handleChange = (event) => {
    if(Math.sign(event.target.value)){

      setNumber(event.target.value)
    }
    setResult('')
  }
  const handleSecondary = (event) => {
    console.log("SecondaryValue:",event.target.value);
    setSecondary({
      price:event.target.value.price,
      name:event.target.value.name,
      image:event.target.value.image
    })
    setResult('')
  };
  const handlePrimary = (event)=>{
    console.log("PrimaryValue:",event.target.value);
    setPrimary({
      price:event.target.value.price,
      name:event.target.value.name,
      image:event.target.value.image
    })
    setResult('');
  }

  const amount = number * primary.price;

  const handleResult = () => {
    let final = 0;
    
    final = amount/secondary.price;
    
    setResult(final);
  }
  
  const handleRefresh = () => {
    setNumber("");

    setPrimary({
      name: "",
      price: "",
      image: ""
    });
    setSecondary({
    price:"",
    name:"",
  image:""});
    setResult("");
  }

  return (
    <>
    {/* <Header/> */}
    <SideBarList/>
    
    <Box
      sx={{
        m:'auto',
        width: 500,
        height: 500,
        display: 'grid',
        gridTemplateRows: 'repeat(4, 1fr)',
        alignItems:'center',
        // justifyItems:'center'
      }}
    >
      <Typography variant="h4" textAlign={'center'}>Crypto Currency Converter</Typography> 
      <TextField sx={{ m: 1, minWidth: 300 }}
        id="outlined-number"
        value={number}
        label="Enter Amount to Convert"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">From</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={primary}
          renderValue={(crypto)=> {
            if(crypto.image) {
              return(
              <MenuItem key ={crypto.name} value={{name:crypto.name, price: crypto.price, image: crypto.image}}>{crypto.name}<img src={crypto.image}alt = "crypto" width = '30' ></img></MenuItem>
              )
            };
          }}
          label="Primary"
          onChange={handlePrimary}
        >
          <MenuItem value="">
            <em>Select a Coin</em>
          </MenuItem>
          {cryptoList}
        </Select>
        <FormHelperText>Primary Currency</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">To</InputLabel>
        <Select
          
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={secondary}
          label="Secondary"
          onChange={handleSecondary}
          renderValue={(crypto)=> {
            if(crypto.image) {
              return(
                <MenuItem key ={crypto.name} value={{name:crypto.name, price: crypto.price, image: crypto.image}}>{crypto.name}<img src={crypto.image}alt = "crypto" width = '30' ></img></MenuItem>
              )
            };
          }}
        >
          <MenuItem value="">
            <em>Select a Coin</em>
          </MenuItem>
          {cryptoList}
        </Select>
        <FormHelperText>Secondary Currency</FormHelperText>
      </FormControl>
      <Stack spacing={35} direction='row' m={2}>
        <Button variant="contained" size="medium" endIcon={<SwapVerticalCircleIcon />} onClick={handleResult}>
          Convert
        </Button>
        <Button variant="contained" endIcon={<RefreshIcon />} onClick={handleRefresh}>
          Clear
        </Button>
      </Stack>
      <Box
        sx={{
          m:'auto',
          width: 500,
          height: 50,
          display:'grid',
          alignItems:'center',
          justifyItems:'center'
        }}>
      {result ?
      <Chip p={5} color="success" label={<Typography variant="h6" textAlign={'center'}>{`${number} ${primary.name} = ${result} ${secondary.name}`}</Typography>}> 
      </Chip>: null}
      </Box>
    </Box>
    
    </>
  );
}