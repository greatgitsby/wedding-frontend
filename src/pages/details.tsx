import * as React from 'react';
import Box from '@mui/material/Box';
import Copyright from '../Footer';
import { Grid, Typography } from '@mui/material';
import { getWeddingStyles } from '../theme';
import Top from '../Top';

export default function Details() {
  const classes = getWeddingStyles();
  const lines = [
    "6-11-2022",
    "Contact us at hello <at> owen2moen <dot> com"
  ];

  return (
    <Grid container justifyContent="center">
      <Grid item>

        <Top classes={classes} />

        <Box sx={{ my: 4 }}>
          {lines.map((line) => (
            <Typography key={line} align="center" fontFamily="Roboto">
              {line}
            </Typography>
          ))}
        </Box>

        <Box sx={{ my: 4 }}>
          <Copyright />
        </Box>

      </Grid>
    </Grid>
  );
}