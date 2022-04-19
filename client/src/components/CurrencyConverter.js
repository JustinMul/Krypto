import {React, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
 
 
export default function CurrencyConverter() {
 const [age, setAge] = useState('');
 
 const handleChange = (event) => {
   setAge(event.target.value);
 };
 
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
         value={age}
         label="Age"
         onChange={handleChange}
       >
         <MenuItem value="">
           <em>None</em>
         </MenuItem>
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
       </Select>
       <FormHelperText>Primary Currency</FormHelperText>
     </FormControl>
     <FormControl sx={{ m: 1, minWidth: 300 }}>
       <InputLabel id="demo-simple-select-helper-label">To</InputLabel>
       <Select
         labelId="demo-simple-select-helper-label"
         id="demo-simple-select-helper"
         value={age}
         label="Age"
         onChange={handleChange}
       >
         <MenuItem value="">
           <em>None</em>
         </MenuItem>
         <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
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
