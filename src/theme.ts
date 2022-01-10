import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const typography = createTheme({
  typography: {
    fontFamily: [
      "audhistine"
    ].join(",")
  }
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff"
    },
    primary: {
      light: "#a6d4fa",
      main: "#90caf9",
      dark: "#648dae"
    },
    secondary: {
      main: "#cf7694",
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const getWeddingStyles = makeStyles((theme: Theme) => ({
  banner: {
    textAlign: "center",
    justifyContent: "center",
  },
  root: {
    padding: theme.spacing(3, 2),
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  cardMedia: {
    height: 140
  }
}));

const getAuthStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
  },
  imageBackground: {
    position: "relative",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default theme;
export { typography, getWeddingStyles, getAuthStyles };