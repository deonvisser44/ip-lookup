import React from "react";
import classes from "./SearchBar.module.css";
import { FaSearchLocation } from "react-icons/fa";

function SearchBar(props) {
  return (
    <>
      <form className={classes.searchForm} onSubmit={props.submitHandler}>
        <input
          type="text"
          placeholder="Defaults to user IP"
          onChange={props.handleInputChange}
        />
        <button>
          <FaSearchLocation />
        </button>
      </form>
      <div className={classes.errorDiv}>
        {props.hasError && props.searchIp.length > 0 && (
          <p className={classes.errorMessage}>Enter a valid IP address</p>
        )}
      </div>
    </>
  );
}

export default SearchBar;
