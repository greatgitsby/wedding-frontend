import * as React from 'react';
import Box from '@mui/system/Box';
import Copyright from '../Footer';
import PhotoPlug from '../PhotoPlug';
import { Grid } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';

import { getImageProps } from '../Images';
import { getWeddingStyles } from '../theme';
import ImgixImage from '../ImgixImage';
import Top from '../Top';

export default function Index(props: any) {
  const classes = getWeddingStyles();
  const images = props.images;

  function getGalleryDims(image: any) {
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

        <Top classes={classes} />
        
        <Box sx={{ my: 4 }}>
          <ImageList
            rowHeight={"auto"}
            sx={{
              width: {
                xs: 350,
                sm: 550,
                md: 800,
                lg: 900,
                xl: 1100 
              },
              height: {
                xs: 350,
                sm: 550,
                md: 700,
                lg: 700,
                xl: 800 
              }
            }}
            variant="quilted"
            cols={4}
          >
            {images.map(getGalleryDims).map((image: any) => (
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