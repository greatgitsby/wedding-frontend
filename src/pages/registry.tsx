import Copyright from '../Footer';
import { Grid, Stack } from '@mui/material';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
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
    <Grid container justifyContent="center">
      <Stack spacing={4}>
        <Header />

        <Grid
          container
          rowSpacing={2}
          justifyContent={"center"}
          justifyItems={"center"}
          justifySelf={"center"}
          sx={{
            maxWidth: {
              xs: "80vw",
              sm: "90vw"
            }
          }}
        >
          {registryItems.map((item, i) => (
            <Grid
              item
              key={i}
              sx={{
                // Goofy, but it fixes the mobile view where cards
                // are slightly askew right
                paddingLeft: {
                  xs: 0,
                  sm: "16px"
                }
              }}
            >
              <Card raised>
                <CardActionArea href={item.href} target="_blank">
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title={item.alt}
                    sx={{width: 300}}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}

        </Grid>

        <Copyright />
      </Stack>
    </Grid>
  );
}