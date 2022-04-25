import { Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

const SearchForm = (props) => {

  return (
    <Grid container justifyContent="center">
    <form>
      <Input style={{width: 400, height: 40 }} 

      value={props.search}
      onChange={props.onChange} 
      name="Search Crypto" 
      color="primary"
      placeholder="Search Cryptos..." 
      startAdornment={<InputAdornment position="start"><SearchIcon style={(props.mode === "dark") ? {color: "white"} : {color: "black"}}/></InputAdornment>}
      />

    </form>
    </Grid>
  )
}

export default SearchForm