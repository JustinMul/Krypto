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

export default function CurrencyConverter(props) {
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

  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });

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
    // console.log("PrimaryValue:",event.target.value);
    console.log("PrimaryValue:",event.target.value);
    setPrimary({
      price:event.target.value.price,
      name:event.target.value.name,
      image:event.target.value.image
    })
    setResult('')
    
    // console.log('primary values', event.target.value.current_price, event.target.value.id)
  }

  const amount = number * primary.price;

  const handleResult = () => {
 
    let final = 0;
    
    final = amount/secondary.price;
    
    setResult(final);
  }
  // console.log(result);

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
    <div>
          <ThemeProvider theme={darkTheme}>
    <Header mode={props.mode} setMode={props.setMode}/>
    <SideBarList mode={props.mode} setMode={props.setMode}/>
    <Box
      sx={{
        width: 500,
        height: 500
      }}
    >
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
            }
           

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
            }
           

          }}
        >
          <MenuItem value="">
            <em>Select a Coin</em>
          </MenuItem>
          {cryptoList}
        </Select>
        <FormHelperText>Secondary Currency</FormHelperText>
      </FormControl>
      <div>
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleResult}>
          Convert
        </Button>
        <Button variant="contained" endIcon={<RefreshIcon />} onClick={handleRefresh}>
          Clear
        </Button>
      </div>
      <div>
      {result ? `${number} ${primary.name} = ${result} ${secondary.name}` : null}
      </div>
    </Box>
    </ThemeProvider>
    </div>
  );
}