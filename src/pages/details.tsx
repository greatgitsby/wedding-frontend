import * as React from 'react';
import Box from '@mui/material/Box';
import Copyright from '../Footer';
import { Grid, Typography } from '@mui/material';
import { getWeddingStyles } from '../theme';
import Top from '../Top';

export default function Details() {
  const classes = getWeddingStyles();

  const weddingDateStr = "06/11/2022";

  // Get number of days till wedding!
  const weddingDate = new Date(weddingDateStr);
  const todaysDate = new Date();
  const timeDiff = weddingDate.getTime() - todaysDate.getTime();
  const numDaysTillWedding = Math.floor(timeDiff / (1000*60*60*24));

  const lines = [
    weddingDateStr,
    `${numDaysTillWedding} days until the wedding!`,
    "Contact us at hello <at> owen2moen <dot> com"
  ];

  return (
    <Grid container justifyContent="center">
      <Grid item>

        <Top classes={classes} />

        <Box sx={{ my: 4 }}>
          {lines.map((line) => (
            <Typography key={line} align="center">
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