import React from "react";
import classes from "./AddressInfo.module.css";

function AddressInfo(props) {
  return (
    <div className={classes.addressInfo}>
      <div className={classes.left}>
        <p><span className={classes.underline}>Country:</span> {props.country || '-'}</p>
        <p><span className={classes.underline}>Region:</span> {props.region || '-'}</p>
        <p><span className={classes.underline}>City:</span> {props.city || '-'}</p>
        <p><span className={classes.underline}>ISP:</span> {props.isp || '-'}</p>
        <p><span className={classes.underline}>IP:</span> {props.ip || '-'}</p>
        <p><span className={classes.underline}>IP Version:</span> {props.version || '-'}</p>
        <p><span className={classes.underline}>Lat:</span> {props.lat || '-'}</p>
        <p><span className={classes.underline}>Long:</span> {props.long || '-'}</p>
      </div>
    </div>
  );
}

export default AddressInfo;
