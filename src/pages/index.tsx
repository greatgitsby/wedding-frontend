import * as React from 'react';
import Box from '@mui/system/Box';
import Copyright from '../Footer';
import PhotoPlug from '../PhotoPlug';
import { Grid } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';

import { getImageProps } from '../Images';
import { getWeddingStyles } from '../theme';
import ImgixImage from '../ImgixImage';
import Header from '../Header';

export default function Index(props: any) {
  const classes = getWeddingStyles();
  const images = props.images;

  return (
    <Grid container justifyContent="center">
      <Grid item>

        <Header classes={classes} />
        
        <Box sx={{ my: 4 }}>
          <ImageList
            sx={{
              width: {
                xs: 350,
                sm: 550,
                md: 750,
                lg: 1000,
                xl: 1200
              },
              height: "100%",
              pointerEvents: "none"
            }}
            variant="quilted"
            cols={2}
          >
            {images.map((image: any) => (
              <ImageListItem
                key={image.src}
                cols={1}
              >
                <ImgixImage
                  src={image.src}
                  width={600}
                  height={900}
                  quality={25}
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