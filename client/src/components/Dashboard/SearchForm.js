import React from 'react'
import { CircularProgress, Grid } from "@mui/material";


const SearchForm = (props) => {

  return (
    <Grid container justifyContent="center">
    <form>
      <input style={{width: 400, height: 40 }} e={props.search} onChange={props.onChange} name="value" placeholder="Enter the crypto you want to search for">
      </input>
    </form>
   
    </Grid>
  )
}

export default SearchForm