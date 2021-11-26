import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function PhotoPlug() {
  return (
    <Typography variant="body2" align="center">
      {'📷 by '}
      <MuiLink color="inherit" href="https://www.instagram.com/a.roley/" target="_blank">
        Alex Roley
      </MuiLink>
    </Typography>
  );
}
