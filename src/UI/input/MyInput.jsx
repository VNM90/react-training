import React from "react";
import classes from "./MyInput.module.css"

export default React.forwardRef(function MyInput(props, ref) {
    return(
      <input ref={ref} {...props} className={classes.myInput}/>
    )
})