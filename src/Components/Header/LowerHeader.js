import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import classes from "./heder.module.css" 

function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li><IoMenuOutline /></li>
        <li>All</li>
        <li>Today's deals</li>
        <li>customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader