import React from 'react';
import { useSelector } from 'react-redux';
import { incAge, decAge} from "../../redux/actions/age.action";
import CounterLabel from './CounterLabel';
import CounterButton from './CounterButton';
import {
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
   root:{
    width:"100vw",
    height:"100vh",
   },
   row :{
      flexDirection:"row",
      height: "80vh",
      display: "flex",
      alignItems: "center", 
      justifyContent: "center",
      "& div":{
        //   height:"50%"
      }
   },

});

const Counter = () => {
    const classes = useStyles();
    const myStateCounter = useSelector((state)=>state.ageReducer.counter);
    
    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <CounterButton
                    clicked={incAge(5)}
                    label="Increment Age By 5"/>
                <CounterLabel value={myStateCounter}/>
                <CounterButton
                    clicked={decAge(2)}
                    label="Decrement Age By 2"/>
            </div>
         </div>
    )
}

export default Counter;