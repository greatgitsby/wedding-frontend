import Box from '@material-ui/core/Box';
import Copyright from '../Copyright';
import { Button, Grid, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles, createTheme , ThemeProvider } from '@material-ui/core/styles';
import { Variant } from '@material-ui/core/styles/createTypography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HeaderButtons from '../HeaderButtons';

import Cb2 from "../../public/img/cb2.png";
import Target from "../../public/img/target.jpg";

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
    cardMedia: {
      height: 140,
    }
  }),
);

const typographyTheme = createTheme({
  typography: {
    fontFamily: [
      "audhistine"
    ].join(",")
  }
});

export default function Details() {
  const classes = useStyles();
  const registryItems = [
    {
      title: "CB2",
      description: "View our CB2 home registry by clicking the button below!",
      href: "#",
      image: Cb2.src,
      imageAlt: "CB2 logo"
    },
    {
      title: "Target",
      description: "View our Target registry by clicking the button below!",
      href: "#",
      image: Target.src,
      imageAlt: "Target logo"
    }
  ]

  let headerSize: Variant = "h3";

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Box sx={{ my: 10 }}>
          <ThemeProvider theme={typographyTheme}>
            <Typography variant={headerSize} className={classes.banner}>
              trey + avery
            </Typography>
          </ThemeProvider>
        </Box>
        <Box sx={{ my: 5 }} className={classes.buttons}>
          <HeaderButtons />
        </Box>

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