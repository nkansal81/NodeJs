import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    button :{
       backgroundColor: "lightblue",
       font:"20px",
    }
});

function CounterButton(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Button
            type="button"
            onClick={() => dispatch(props.clicked)}
            className={classes.button}>
            {props.label}
        </Button>
    )
}
export default CounterButton;