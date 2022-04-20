import {React, useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
 

export default function CurrencyConverter() {
  
//  const [primaryCurr, setPrimaryCurr] = useState([]);
//  const [secondaryCurr, setSecondaryCurr] = useState([]);
 const [state, setState] = useState([{
   p: []
 }]);
 const [primaryValue, setPrimaryValue] = useState('');
 const [secondaryValue, setSecondaryValue] = useState('');

 useEffect(() => {
  axios.get('/market')
    .then((res) => {
    setState(prev => [{...prev, 
      p:res.data,
      s:res.data
    }]);
      }
    )
    .catch((err)=>console.log(err));
},[]);
 const handlePrimaryChange = (event) => {
  setPrimaryValue(event.target.value);
 };
 const handleSecondaryChange = (event) => {
  setSecondaryValue(event.target.value)
 };

console.log('This is state:', state)
const primaryCurrList = state[0].p.map((primary) => {
    return(
      <MenuItem value={primary.id}><img src={primary.image} width = "20"/> {primary.id}</MenuItem>
    )
 
})

 return (
  
   <Box
     sx={{
       width: 500,
       height: 500
     }}
   >
     <FormControl sx={{ m: 1, minWidth: 300 }}>
       <InputLabel id="demo-simple-select-helper-label">From</InputLabel>
       <Select
         labelId="demo-simple-select-helper-label"
         id="demo-simple-select-helper"
         value={primaryValue}
         label="Age"
         onChange={(event) => handlePrimaryChange(event)}
       >
         <MenuItem value="">
           <em>None</em>
         </MenuItem>
         {primaryCurrList}
       </Select>
       <FormHelperText>Primary Currency</FormHelperText>
     </FormControl>
     <FormControl sx={{ m: 1, minWidth: 300 }}>
       <InputLabel id="demo-simple-select-helper-label">To</InputLabel>
       <Select
         labelId="demo-simple-select-helper-label"
         id="demo-simple-select-helper"
         value={secondaryValue}
         label="Age"
         onChange={handleSecondaryChange}
       >
         <MenuItem value="">
           <em>None</em>
         </MenuItem>
         {primaryCurrList}
       </Select>
       <FormHelperText>Secondary Currency</FormHelperText>
     </FormControl>
     <div>
       <Button variant="contained" endIcon={<SendIcon />}>
         Convert
       </Button>
     </div>
   </Box>
 );
}
