import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Favorite } from '@mui/icons-material';

export default function Footer() {
  return (
    <Typography variant="subtitle1" align="center" fontFamily="Roboto">
      {'Made with '}
      <Favorite color={"secondary"} fontSize="inherit" />
      {' by '}
      
      <MuiLink color="inherit" href="https://treymoen.com" target="_blank">
        Trey Moen
      </MuiLink>
    </Typography>
  );
}
