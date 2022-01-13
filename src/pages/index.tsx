import Copyright from '../Footer';
import { Card, Grid, Link, Stack, Typography } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';

import { getImageProps } from '../Images';
import ImgixImage from '../ImgixImage';
import Header from '../Header';

export default function Index(props: any) {
  const images = props.images;

  return (
    <Grid container justifyContent="center">
      <Stack
        spacing={3}

        // Add additional spacing to bottom of site
        marginBottom={3}
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
              <Card raised>
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

        <Typography variant="subtitle1" align="center" fontFamily="Roboto">
          {'Animation by '}
          <Link color="inherit" href="https://www.instagram.com/fireflyavenuestudio/" target="_blank">
            Emily Pulver
          </Link>
        </Typography>

        <Typography variant="subtitle1" align="center" fontFamily="Roboto">
          {'Photos by '}
          <Link color="inherit" href="https://www.instagram.com/a.roley/" target="_blank">
            Alex Roley
          </Link>
        </Typography>

        <Copyright />

      </Stack>
    </Grid>
  );
}

export const getStaticProps = getImageProps;