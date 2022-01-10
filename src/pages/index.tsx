import Copyright from '../Footer';
import PhotoPlug from '../PhotoPlug';
import { Card, Grid, Stack, Theme } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';

import { getImageProps } from '../Images';
import ImgixImage from '../ImgixImage';
import Header from '../Header';

export default function Index(props: any) {
  const images = props.images;


  return (
    <Grid container justifyContent="center">
      <Stack
        spacing={4}
        sx={{
          maxWidth: {
            xs: "80vw",
            sm: "90vw",
            md: "90vw",
            lg: "90vw",
            xl: "90vw",
          }
        }}
      >

        <Header />

        <ImageList
          sx={{
            pointerEvents: "none"
          }}
          variant="quilted"
          cols={2}
        >
          {images.map((image: any) => (
            <ImageListItem
              key={image.src}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card raised
                sx={{
                  borderColor: (theme: Theme) => theme.palette.secondary.main,
                  borderWidth: "2px",
                  borderStyle: "solid"
                }}
              >
                <ImgixImage
                  src={image.src}
                  width={600}
                  height={900}
                  quality={25}
                  fit={"crop"}
                />
              </Card>
            </ImageListItem>
          ))}
        </ImageList>

        <PhotoPlug />
        <Copyright />

      </Stack>
    </Grid>
  );
}

export const getStaticProps = getImageProps;