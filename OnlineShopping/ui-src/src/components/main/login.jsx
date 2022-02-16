import React, { useState } from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import fetchLogin from '../../redux/actions/login.action';
import {Link,useNavigate} from 'react-router-dom';

const useStyles = makeStyles(()=>({
  palette: {
    primary: {
      main: '#800080'
    },
    secondary: {
      main: '#1E90FF'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiButton: {
      variant: 'contained',
      disableRipple: true,
      color: 'primary'
    },
    MuiTextField: {
      variant: 'outlined',
      InputLabelProps: {
        shrink: true
      }
    },
    MuiPaper: {
      elevation: 0
    }
  }
}));

const LoginPage = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [checked, setChecked] = React.useState(true);
  const handleUsername = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  const handleLogin = async(e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    }
    const {token} = await fetchLogin(payload);
    if(token){
      localStorage.setItem('token',JSON.stringify(token));
      navigate(`/inventory/${token}`);    
    }
  }

  return (
    <Paper style={{ padding: 30 }}>
      <Grid
        container
        spacing={3}
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid item xs={12}>
          <TextField 
            label="Email"
            onChange={handleUsername}
            value = {email}
          >
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Password" 
            type={'password'}
            onChange = {handlePassword}
            value ={password}
            >
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                label={'Keep me logged in'}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Keep me logged in"
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            fullWidth
            onClick={handleLogin}
          >
            Login </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginPage;
