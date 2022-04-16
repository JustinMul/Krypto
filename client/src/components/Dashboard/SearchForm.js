import React from 'react'

const SearchForm = (props) => {

  return (
    <form>
      <input value={props.search} onChange={props.onChange} name="value" placeholder="Enter the crypto you want to search for">
      </input>
    </form>
  )
}

export default SearchForm