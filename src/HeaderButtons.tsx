import { Button, ButtonGroup } from '@mui/material';
import { useRouter } from 'next/router';

interface HeaderButtonConfig {
  name: string;
  path: string;
};

export default function HeaderButtons() {
  const path = useRouter().pathname;
  const buttons: HeaderButtonConfig[] = [
    {
      name: "Gallery",
      path: "/"
    },
    {
      name: "Details",
      path: "/details"
    },
    {
      name: "Registry",
      path: "/registry"
    }
  ];

  return (
    <ButtonGroup color="secondary" aria-label="" size="large">
      {buttons.map((button: HeaderButtonConfig) => (
        <Button key={button.name} variant={path === button.path ? "contained" : "outlined"} href={button.path}>
          {button.name}
        </Button>
      ))}
    </ButtonGroup>
  );
}