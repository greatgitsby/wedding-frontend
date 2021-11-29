import Box from '@mui/material/Box';
import Copyright from '../Footer';
import { Grid, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Top from '../Top';
import { getWeddingStyles } from '../theme';

export default function Details() {
  const classes = getWeddingStyles();
  const registryItems = [
    {
      title: "Amazon",
      href: "https://www.amazon.com/wedding/share/owen2moen",
      image: "https://owen2moen.imgix.net/assets/amazon.png",
      alt: "Amazon logo"
    },
    {
      title: "CB2",
      href: "https://www.cb2.com/gift-registry/avery-owen-and-trey-moen/r6363522",
      image: "https://owen2moen.imgix.net/assets/cb2.png",
      alt: "CB2 logo"
    },
    {
      title: "Target",
      href: "https://www.target.com/gift-registry/gift/owen2moen",
      image: "https://owen2moen.imgix.net/assets/target.jpeg",
      alt: "Target logo"
    }
  ]

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>

        <Top classes={classes} />

        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          {registryItems.map((item, i) => (
            <Grid item key={i}>
              <Card sx={{
                width: {
                  xs: 325,
                  sm: 350,
                  ":default": 400
                }
              }}>
                <CardActionArea href={item.href} target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title={item.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {`Tap to view our ${item.title} registry!`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}

        </Grid>

        <Box sx={{ my: 4 }}>
          <Copyright />
        </Box>

      </Grid>
    </Grid>
  );
}