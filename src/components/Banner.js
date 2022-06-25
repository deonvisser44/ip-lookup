import React from "react";
import classes from "./Banner.module.css";

function Banner() {
  return (
    <div className={classes.message}>
      <h1>Look up IP address information.</h1>
      <p>
        If you have the IPv4 or IPv6 address of an Internet user, you
        can get info on where in the world they're at by using our IP Lookup
        tool.
      </p>
      <p>Simply enter the IP address into the search bar and hit Search!</p>
    </div>
  );
}

export default Banner;
