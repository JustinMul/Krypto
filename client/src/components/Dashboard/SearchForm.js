import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

const SearchForm = (props) => {

  return (
    <Grid container justifyContent="center">
    <form>
    <TextField id="outlined-search" label="Search field" type="search" style={{width: 400, height: 40 }} e={props.search} onChange={props.onChange} />
      {/* <input style={{width: 400, height: 40 }} e={props.search} onChange={props.onChange} name="value" placeholder="Enter the crypto you want to search for">
      </input> */}
    </form>
    </Grid>
  )
}

export default SearchForm