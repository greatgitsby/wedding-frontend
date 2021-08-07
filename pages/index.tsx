import * as React from 'react';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Button, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles, createTheme } from '@material-ui/core/styles';
import { AuthFlowImageProps, getAuthFlowImageProps } from '../src/Images';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      height: 200,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    imageList: {
      [theme.breakpoints.down('sm')]: {
        width: 350,
        height: 500,
      },
      [theme.breakpoints.up('md')]: {
        width: 450,
        height: 600,
      },
      [theme.breakpoints.up('lg')]: {
        width: 900,
        height: 900,
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

/* Randomize array in-place using Durstenfeld shuffle algorithm */
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default function Index(props: AuthFlowImageProps) {
  const classes = useStyles();
  const images = props.images;

  shuffleArray(images);

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Box sx={{ my: 12 }}>
          <ThemeProvider theme={typographyTheme}>
            <Typography variant="h3" align="center">
              avery + trey
            </Typography>
          </ThemeProvider>
        </Box>

        <Box sx={{ my: 4 }}>
          <ImageList
            rowHeight={275}
            className={classes.imageList}
            cols={4}
          >
            {images.map((item, i) => {
              const cols = 2;

              return (
                <ImageListItem key={i} cols={cols}>
                  <img src={item} />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Box>
        
        <Box sx={{ my: 4 }}>
          <Button fullWidth variant="contained" color="primary" href="/">
            Coming Soon
          </Button>
        </Box>
      
        <Box sx={{my: 4 }}>
          <Copyright />
        </Box>
        
      </Grid>
    </Grid>
  );
}

export const getStaticProps = getAuthFlowImageProps;