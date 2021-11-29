import { Button, ButtonGroup } from '@mui/material';
import { useRouter } from 'next/router';

export default function HeaderButtons() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <ButtonGroup color="secondary" aria-label="" size="large">
        <Button variant={path === "/" ? "contained" : "outlined"} href="/">
          Gallery
        </Button>
        <Button variant={path === "/details" ? "contained" : "outlined"} href="/details">
          Details
        </Button>
        <Button variant={path === "/registry" ? "contained" : "outlined"} href="/registry">
          Registry
        </Button>
      </ButtonGroup>
    </>
  );
}