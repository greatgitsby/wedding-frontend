import * as React from 'react';
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Button, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles, createTheme } from '@material-ui/core/styles';
import { AuthFlowImageProps, getImageProps } from '../Images';

import Image from "next/image";
import useMeasure from 'react-use-measure';

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

export default function Index(props: AuthFlowImageProps) {
  const classes = useStyles();
  const images = props.images;
  const [ref, bounds] = useMeasure();

  const pixelGap = 6;

  let numImageColumns = 5;
  let rowHeight: number | "auto" = "auto";

  if (bounds.width == 600) {
    numImageColumns = 2;
    rowHeight = 300;
  } else if (bounds.width == 350) {
    numImageColumns = 1;
    rowHeight = 400;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Box sx={{ my: 10 }}>
          <ThemeProvider theme={typographyTheme}>
            <Typography variant="h4" align="center">
              trey + avery
            </Typography>
          </ThemeProvider>
        </Box>

        <Box sx={{ my: 4 }}>
          <ImageList
            innerRef={ref}
            rowHeight={rowHeight}
            className={classes.imageList}
            gap={pixelGap}
            cols={numImageColumns}
          >
            {images.map((item, i) => {
              return (
                <ImageListItem key={i} cols={1} rows={2}>
                  <Image 
                    src={item.src} 
                    alt="" 
                    placeholder="blur" 
                    blurDataURL={item.blurSrc}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 0%"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Box>
        
        <Box sx={{ my: 4 }}>
          <Button fullWidth variant="contained" color="primary" href="/login">
            View RSVP
          </Button>
        </Box>
      
        <Box sx={{my: 4 }}>
          <Copyright />
        </Box>
        
      </Grid>
    </Grid>
  );
}

export const getStaticProps = getImageProps;