import { Button, ButtonGroup, SvgIconTypeMap } from '@mui/material';
import { useRouter } from 'next/router';
import { Grid } from "@mui/material";

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PendingIcon from '@mui/icons-material/Pending';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { UploadPictureButton } from './UploadPictureButton';

interface HeaderButtonConfig {
  name: string;
  path: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
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
      path: "/registry",
      icon: CardGiftcardIcon
    }
  ];

  return (
    <Grid container spacing={0}>
      <Grid item xs={"auto"}>
        <ButtonGroup color="secondary" aria-label="Navbar" size="small">
          {buttons.map((button: HeaderButtonConfig) => (
            <Button key={button.name} variant={path === button.path ? "contained" : "outlined"} href={button.path}>
              {button.icon ? (<button.icon />) : button.name}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>

      <Grid item container xs justifyContent="flex-end">
        <ButtonGroup color="secondary" aria-label="" size="small">
          <UploadPictureButton />

          <Button href="#">
            {/* <LoginIcon /> */}
            <PendingIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}