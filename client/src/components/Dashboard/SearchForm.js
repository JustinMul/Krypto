import React from 'react'
import { CircularProgress, Grid } from "@mui/material";

const SearchForm = (props) => {

  return (
    <Grid container justifyContent="center">
    <form>
      <input value={props.search} onChange={props.onChange} name="value" placeholder="Enter the crypto you want to search for">
      </input>
    </form>
    </Grid>
  )
}

export default SearchForm