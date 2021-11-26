import * as React from 'react';
import Box from '@mui/material/Box';
import Copyright from '../Copyright';
import { Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Variant } from '@mui/material/styles/createTypography';
import HeaderButtons from '../HeaderButtons';
import { getWeddingStyles, typography } from '../theme';

export default function Details() {
  const classes = getWeddingStyles();
  const headerSize: Variant = "h3";

  return (
    <Grid container justifyContent="center">
      <Grid item>

        <Box sx={{ my: 10 }}>
          <ThemeProvider theme={typography}>
            <Typography variant={headerSize} className={classes.banner}>
              trey + avery
            </Typography>
          </ThemeProvider>
        </Box>
        <Box sx={{ my: 4 }} className={classes.buttons}>
          <HeaderButtons />
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography align="center">
            {"Coming soon."}
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Copyright />
        </Box>

      </Grid>
    </Grid>
  );
}