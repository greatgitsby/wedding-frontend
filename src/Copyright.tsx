import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Made with 💛 by '}
      <MuiLink color="inherit" href="https://treymoen.dev/" target="_blank">
        Trey Moen
      </MuiLink>
    </Typography>
  );
}
