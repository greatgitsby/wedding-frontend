import * as React from 'react';
import Box from '@mui/system/Box';
import Copyright from '../Copyright';
import PhotoPlug from '../PhotoPlug';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';

import { typography } from '../theme';
import HeaderButtons from '../HeaderButtons';
import { getImageProps } from '../Images';
import { getWeddingStyles } from '../theme';
import ImgixImage from '../ImgixImage';

export default function Index(props: any) {
  const classes = getWeddingStyles();
  const images = props.images;

  function getGalleryDims(image) {
    let rows = 1;
    let cols = 1;

    if (image.width > image.height) {
      cols++;
    } else {
      rows++;
    }

    return { rows, cols, ...image };
  }

  return (
    <Grid container justifyContent="center">
      <Grid item>

        <Box sx={{ my: 10 }}>
          <ThemeProvider theme={typography}>
            <Typography className={classes.banner}>
              trey + avery
            </Typography>
          </ThemeProvider>
        </Box>

        <Box sx={{ my: 4 }} className={classes.buttons}>
          <HeaderButtons />
        </Box>

        <Box sx={{ my: 4 }}>
          <ImageList
            rowHeight={"auto"}
            sx={{
              width: {
                xs: 400,
                sm: 550,
                md: 700,
                lg: 800,
                xl: 900 
              },
              height: {
                xs: 400,
                sm: 550,
                md: 700,
                lg: 800,
                xl: 900 
              }
            }}
            variant="quilted"
            cols={4}
          >
            {images.map(getGalleryDims).map((image) => (
              <ImageListItem key={image.src} cols={image.cols} rows={image.rows}>
                <ImgixImage
                  src={image.src}
                  width={220*image.cols}
                  height={250*image.rows}
                  quality={75}
                  fit={"crop"}
                />
              </ImageListItem>
            ))}
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