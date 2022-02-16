import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@mui/material';
import fetchRegister from "../../redux/actions/register.action";
import {Link,useNavigate} from 'react-router-dom';

const Register = () => {
  const classes = useStyles();
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  let navigate = useNavigate();

  const handleName = (e) => {
    setUsername(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleRegister = async(e) => {
    e.preventDefault();
    const payload = {
      username: username,
      email: email,
      password: password,
    }
    const {token} = await fetchRegister(payload);
    if(token){
      // navigate(`/inventory/${token}`,{ state:{
      //   token:token
      // }});
      localStorage.setItem('registerToken',JSON.stringify(token));
      navigate(`/login`);
    }
  }

  return(
    <>
      <header className={classes.header}>
        <h2>
          Register User
        </h2>
      </header>
      <div className={classes.page}>
        <div>
          <form className={classes.form}>
            <div className={classes.label}>
              <div>
                <label className={classes.username}>Username:</label>
              </div>
              <br></br>
              <div>
                <label className={classes.username}>Email</label>
              </div>
              <br></br>
              <div>
                <label className={classes.username}>Password</label>
              </div>
              <br></br>
            </div>
            <div className={classes.value}>
              <div>
                <input 
                  type="text" 
                  onChange={handleName}
                  value={username}>
                </input>
              </div>
              <br></br>
              <div>
                <input 
                  type="text" 
                  onChange={handleEmail}
                  value={email}
                  >
                </input>
              </div>
              <br></br>
              <div>
                <input 
                  type="text" 
                  onChange={handlePassword}
                  value={password}
                >
                </input>
              </div>
              <br></br>
              <div>
                <Button 
                  style={{
                    margin: "1rem -4rem",
                    borderRadius: 35,
                    backgroundColor: "#21b6ae",
                    padding: "5px 15px",
                    fontSize: "18px"
                  }}
                  variant="contained" onClick={handleRegister}>
                  Register
                </Button>
              </div>
              <div className={classes.foot}>
                <h3>Already a user ? {" "}
                  <Link to={"/login"}>Login</Link>
                </h3> 
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className={classes.foot}>
        {/* <div>
            <h3>Already</h3>
        </div> */}
      </footer>
    </>
  );
}

export default Register;

const useStyles = makeStyles((theme) => ({
  header:{
   display : "flex",
   padding: "2%",
   justifyContent: "center",
  },
  page:{
   display: "flex",
   flexDirection: "column",
  },
  form:{
   width: "100%",
   position: "relative",
   padding: "2%",
  },
  label :{
    display: "block",
    position: "fixed",
    left: "40%",
    // padding: "2%",
    width: "50%",
  },
  value:{
     position: "fixed",
     right: "0%",
     width: "50%"
  },
  login:{
    color:"blue"
  },
  foot:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"left",
    marginLeft:"-5rem"
    // position:"fixed",
    // left:"43%"
  }
}));