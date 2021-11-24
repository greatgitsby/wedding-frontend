import * as React from 'react';
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright';
import PhotoPlug from '../PhotoPlug';
import { Grid, ThemeProvider, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles, createTheme } from '@material-ui/core/styles';

import { Variant } from '@material-ui/core/styles/createTypography';
import HeaderButtons from '../HeaderButtons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    banner: {
      textAlign: "center",
      justifyContent: "center"
    },
    root: {
      padding: theme.spacing(3, 2),
      height: 200,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    imageList: {
      transform: 'translateZ(0)',
      [theme.breakpoints.down('sm')]: {
        width: 350,
        height: 500,
      },
      [theme.breakpoints.up('md')]: {
        width: 600,
        height: 600,
      },
      [theme.breakpoints.up('lg')]: {
        width: 1000,
        height: 925,
      }
    },
  }),
);

const typographyTheme = createTheme({
  typography: {
    fontFamily: [
      "audhistine"
    ].join(",")
  }
});

export default function Index() {
  const classes = useStyles();
  const headerSize: Variant = "h3";

  return (
    <Grid container justifyContent="center">
      <Grid item>

        <Box sx={{ my: 10 }}>
          <ThemeProvider theme={typographyTheme}>
            <Typography variant={headerSize} className={classes.banner}>
              trey + avery
            </Typography>
          </ThemeProvider>
        </Box>

        <Box sx={{ my: 4 }} className={classes.buttons}>
          <HeaderButtons />
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography align="center">
            {"Coming soon."}
          </Typography>
        </Box>

        <Box sx={{ my: 1 }}>
          <PhotoPlug />
        </Box>

        <Box sx={{ my: 4 }}>
          <Copyright />
        </Box>

      </Grid>
    </Grid>
  );
}