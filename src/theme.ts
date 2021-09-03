import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#a6d4fa',
      main: '#90caf9',
      dark: '#648dae'
    },
    secondary: {
      main: '#f48fb1',
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

export default theme;
