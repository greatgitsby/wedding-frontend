import Box from '@mui/material/Box';
import Copyright from '../Footer';
import { Button, Grid, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Top from '../Top';
import { getWeddingStyles } from '../theme';

export default function Details() {
  const classes = getWeddingStyles();
  const registryItems = [
    {
      title: "CB2",
      description: "View our CB2 home registry by clicking the button below!",
      href: "#",
      image: "https://owen2moen.imgix.net/assets/cb2.png",
      imageAlt: "CB2 logo"
    },
    {
      title: "Target",
      description: "View our Target registry by clicking the button below!",
      href: "#",
      image: "https://owen2moen.imgix.net/assets/target.jpg",
      imageAlt: "Target logo"
    }
  ]

  return (
    <Grid container justifyContent="center">
      <Grid item>

        <Top classes={classes} />

        <Grid container spacing={2}>
          {registryItems.map((item, i) => (
            <Grid item key={i}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title={item.imageAlt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href={item.href} target="_blank">
                    View
                  </Button>
                </CardActions>
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