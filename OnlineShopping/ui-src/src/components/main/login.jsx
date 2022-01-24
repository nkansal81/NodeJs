import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
          <TextField label="Username"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type={'password'}></TextField>
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
          <Button fullWidth> Login </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginPage;
