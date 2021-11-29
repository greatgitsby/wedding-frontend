import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Footer() {
  return (
    <Typography variant="subtitle1" align="center" fontFamily="Roboto">
      {'Made with 💛 by '}
      <MuiLink color="inherit" href="https://treymoen.com" target="_blank">
        Trey Moen
      </MuiLink>
    </Typography>
  );
}
