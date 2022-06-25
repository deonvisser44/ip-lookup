import React from 'react'
import classes from './SearchBar.module.css'

function SearchBar(props) {

  return (
    <>
    <form className={classes.searchForm} onSubmit={props.submitHandler}>
      <input type='text' placeholder='Defaults to user IP' onChange={props.handleInputChange}/>
      <button>Search</button>
    </form>
    {props.hasError && <p className={classes.errorMessage}>Enter a valid IP address</p>}
    </>
  )
}

export default SearchBar