import Box from '@material-ui/core/Box';
import Copyright from '../Copyright';
import PhotoPlug from '../PhotoPlug';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { AuthFlowImageProps, getImageProps } from '../Images';

import { Variant } from '@material-ui/core/styles/createTypography';
import Image from 'next/image';
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
    headerButtons: {
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
      [theme.breakpoints.down('xs')]: {
        width: 400,
        height: 700,
      },
      [theme.breakpoints.up('sm')]: {
        width: 600,
        height: 500,
      },
      [theme.breakpoints.up('md')]: {
        width: 800,
        height: 600,
      },
      [theme.breakpoints.up('lg')]: {
        width: 1200,
        height: 1000,
      },
      [theme.breakpoints.up('xl')]: {
        width: 1200,
        height: 1000,
      }
    },
  }),
);

export default function Index(props: AuthFlowImageProps) {
  const classes = useStyles();
  const theme = useTheme();
  const images = props.images;

  const isExtraSmallWidth = useMediaQuery(theme.breakpoints.up("xs"));
  const isSmallWidth = useMediaQuery(theme.breakpoints.up("sm"));
  const isMediumWidth = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeWidth = useMediaQuery(theme.breakpoints.up("lg"));

  const pixelGap = 6;
  let rowsPerImage = 2;
  let containerWidth = 0;

  // Default values for XL
  let headerSize: Variant = "h3";
  let imageHeight = 800;
  let numImageColumns = 4;

  if (isLargeWidth) {
    containerWidth = theme.breakpoints.values["lg"];
  } else if (isMediumWidth) {
    containerWidth = theme.breakpoints.values["md"];
    numImageColumns = 4;
  } else if (isSmallWidth) {
    containerWidth = theme.breakpoints.values["sm"];
    numImageColumns = 3;
    headerSize = "h4";
    imageHeight = 500;
  } else if (isExtraSmallWidth) {
    containerWidth = theme.breakpoints.values["xs"];
    numImageColumns = 1;
    headerSize = "h4";
    imageHeight = 600;
  }

  let imageWidth = (containerWidth * rowsPerImage) / numImageColumns;

  console.log(imageWidth, imageHeight);

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Box sx={{ my: 10 }}>
          <Typography variant={headerSize} className={classes.banner}>
            trey + avery
          </Typography>
        </Box>
        <Box sx={{ my: 4 }} className={classes.buttons}>
          <HeaderButtons />
        </Box>

        <Box sx={{ my: 4 }}>
          <ImageList
            rowHeight={imageHeight/rowsPerImage}
            className={classes.imageList}
            gap={pixelGap}
            cols={numImageColumns}
          >
            {images.map((item, i) => {
              item.width = imageWidth;
              item.height = imageHeight;
              
              return (
                <ImageListItem key={i} cols={1} rows={rowsPerImage}>
                  <Image 
                    src={item.relativePath} 
                    alt="" 
                    placeholder="blur" 
                    blurDataURL={item.imgBase64}
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