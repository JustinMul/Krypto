import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

const SearchForm = (props) => {

  return (
    <Grid container justifyContent="center">
    <form>
  
      <Input style={{width: 400, height: 40 }} 
      inputProps={{ style: {textAlign: 'center'} }}
      value={props.search}
      onChange={props.onChange} 
      name="value" 
      placeholder="Enter the crypto you want to search" 
      startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}

      >
      </Input>
    </form>
    </Grid>
  )
}

export default SearchForm