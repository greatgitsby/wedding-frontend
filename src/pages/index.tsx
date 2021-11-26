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

export default function Index(props: any) {
  const classes = getWeddingStyles();
  const images = props.images;

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
            rowHeight={500}
            className={classes.imageList}
            gap={25}
            cols={1}
            style={{margin: 0}}
          >
            {images.map((item: any, i: number) => {
              const width = 350;
              const height= 500;

              let url = "https://owen2moen.imgix.net";
              url += item.path;
              url += `?w=${width}&h=${height}&fit=crop`;

              return (
                <ImageListItem key={i} cols={1} rows={1}>
                  <img
                    src={url}
                    alt="Gallery image"
                    width={width}
                    height={height}
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