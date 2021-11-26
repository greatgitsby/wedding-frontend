import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link"
import { useForm } from 'react-hook-form';

import Copyright from '../Copyright';
import { getAuthStyles } from '../theme';

interface LoginForm {
  email: string;
  password: string;
}

export default function LogIn() {
  const classes = getAuthStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (form: LoginForm) => {
    // TODO Handle form submit
    alert(JSON.stringify(form, null, 4));
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.imageBackground}>
        {/* <Image src="" alt="" layout="fill" objectFit="cover" /> */}
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in to RSVP
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              {...register("email")}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              {...register("password")}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log in
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"No account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}