import { Button, ButtonGroup } from '@material-ui/core';

export default function HeaderButtons() {
  return (
    <>
      <ButtonGroup color="secondary" aria-label="">
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
      <Button href="/login" color="secondary" variant="outlined">
        RSVP
      </Button>
    </>
  );
}