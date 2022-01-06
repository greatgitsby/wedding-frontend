import Box from '@mui/material/Box';
import Copyright from '../Footer';
import { Grid, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Header from '../Header';
import { getWeddingStyles } from '../theme';

export default function Details() {
  const classes = getWeddingStyles();
  let registryItems = [
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
      title: "Crate and Barrel",
      href: "https://www.crateandbarrel.com/gift-registry/avery-owen-and-trey-moen/r6423626",
      image: "https://owen2moen.imgix.net/assets/crateandbarrel.png",
      alt: "CB2 logo"
    },
    {
      title: "Target",
      href: "https://www.target.com/gift-registry/gift/owen2moen",
      image: "https://owen2moen.imgix.net/assets/target.png",
      alt: "Target logo"
    },
    {
      title: "HoneyFund",
      href: "https://www.honeyfund.com/wedding/owen2moen",
      image: "https://owen2moen.imgix.net/assets/honeyfund.png",
      alt: "HoneyFund logo"
    }
  ].sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>
        <Header classes={classes} />
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          maxWidth={1000}
        >
          {registryItems.map((item, i) => (
            <Grid item key={i}>
              <Card
                sx={{
                  width: 350
                }}
              >
                <CardActionArea href={item.href} target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title={item.alt}
                  />
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