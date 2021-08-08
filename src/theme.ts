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
});

export default theme;
