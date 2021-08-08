import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

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
