import * as React from 'react';
import Box from '@mui/material/Box';
import Copyright from '../Footer';
import { Grid, Typography } from '@mui/material';
import { getWeddingStyles } from '../theme';
import Top from '../Top';

export default function Details() {
  const classes = getWeddingStyles();

  return (
    <Grid container justifyContent="center">
      <Grid item>

        <Top classes={classes} />

        <Box sx={{ my: 4 }}>
          <Typography align="center" fontFamily="Roboto">
            {"6-11-2022"}
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Copyright />
        </Box>

      </Grid>
    </Grid>
  );
}