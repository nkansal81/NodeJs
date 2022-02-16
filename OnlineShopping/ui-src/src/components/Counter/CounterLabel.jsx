import React from 'react';
import {
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
    value :{
       backgroundColor: "lightgrey",
    //    border:"2px solid",
       padding:"10px",
       font:"20px",
    }
});

function CounterLabel(props) {
    const classes = useStyles();
    return (
        <div className={classes.value}>
            {props.value}
        </div>
    )
}

export default CounterLabel;