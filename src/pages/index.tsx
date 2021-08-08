import * as React from 'react';
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright';
import PhotoPlug from '../PhotoPlug';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Button, ButtonGroup, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles, createTheme } from '@material-ui/core/styles';
import { AuthFlowImageProps, getImageProps } from '../Images';

import Image from "next/image";
import useMeasure from 'react-use-measure';

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

export default function Index(props: AuthFlowImageProps) {
  const classes = useStyles();
  const images = props.images;
  const [ref, bounds] = useMeasure();

  const pixelGap = 6;

  let numImageColumns = 5;
  let rowsPerImage = 2;

  let imageHeight = 300;

  if (bounds.width == 600) {
    numImageColumns = 2;
    imageHeight = 500;
  } else if (bounds.width == 350) {
    numImageColumns = 1;
    imageHeight = 500;
  }

  let imageWidth = ((bounds.width - (pixelGap * numImageColumns)) / (numImageColumns));

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Box sx={{ my: 10 }}>
          <ThemeProvider theme={typographyTheme}>
            <Typography variant="h3" className={classes.banner}>
              trey + avery
            </Typography>
          </ThemeProvider>
        </Box>
        <Box sx={{ my: 4 }} className={classes.buttons}>
          <ButtonGroup color="secondary" aria-label="">
            <Button>
              Details
            </Button>
            <Button>
              Registry
            </Button>
            <Button href="/login">
              RSVP
            </Button>
          </ButtonGroup>
        </Box>

        <Box sx={{ my: 4 }}>
          <ImageList
            innerRef={ref}
            rowHeight={imageHeight/rowsPerImage}
            className={classes.imageList}
            gap={pixelGap}
            cols={numImageColumns}
          >
            {images.map((item, i) => {
              return (
                <ImageListItem key={i} cols={1} rows={rowsPerImage}>
                  <Image 
                    src={item.src} 
                    alt="" 
                    placeholder="blur" 
                    blurDataURL={item.blurSrc}
                    layout="fixed"
                    width={imageWidth}
                    height={imageHeight}
                    objectFit="cover"
                    objectPosition="50% 0%"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
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

export const getStaticProps = getImageProps;