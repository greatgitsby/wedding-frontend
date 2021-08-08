import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link"
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import Image from "next/image";

import Copyright from '../src/Copyright';
import { AuthFlowImageProps, getImageProps } from '../src/Images';

interface LoginForm {
  email: string;
  password: string;
}

export default function LogIn(props: AuthFlowImageProps) {
  const randomImage = props.images[Math.floor(Math.random() * props.images.length)];

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    imageBackground: {
      position: "relative"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (form: LoginForm) => {
    // TODO Handle form submit
    alert(JSON.stringify(form, null, 4));
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.imageBackground}>
        <Image src={randomImage.src} alt="" blurDataURL={randomImage.blurSrc} placeholder="blur" layout="fill" objectFit="cover" />
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
                <Link href="/forgot" variant="body2">
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

export const getStaticProps = getImageProps;