import { Button, ButtonGroup } from '@mui/material';

export default function HeaderButtons() {
  return (
    <>
      <ButtonGroup color="secondary" aria-label="" size="large">
        <Button href="/">
          Gallery
        </Button>
        <Button href="/details">
          Details
        </Button>
        <Button href="/registry">
          Registry
        </Button>
      </ButtonGroup>
    </>
  );
}