import { typography } from './theme';
import HeaderButtons from './HeaderButtons';
import { ThemeProvider, Typography } from '@mui/material';
import Box from '@mui/system/Box';

export default function Top(props: any) {
  const classes = props.classes;

  return (
    <>
      <Box sx={{ my: 8 }}>
        <ThemeProvider theme={typography}>
          <Typography
            sx={{
              fontSize: {
                xs: "2em",
                sm: "2.5em",
                md: "2.5em",
                lg: "2.5em",
                xl: "2.5em"
              }
            }}
            className={classes.banner}
          >
            trey + avery
          </Typography>
        </ThemeProvider>
      </Box>

      <Box sx={{ my: 4 }} className={classes.buttons}>
        <HeaderButtons />
      </Box>
    </>
  );

}