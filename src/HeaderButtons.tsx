import { Button, ButtonGroup, SvgIconTypeMap } from '@mui/material';
import { useRouter } from 'next/router';
import { Grid } from "@mui/material";

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { BurstMode, TextSnippet } from '@mui/icons-material';
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
      path: "/",
      icon: BurstMode
    },
    {
      name: "Details",
      path: "/details",
      icon: TextSnippet
    },
    {
      name: "Registry",
      path: "/registry",
      icon: CardGiftcardIcon
    }
  ];

  return (
    <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <ButtonGroup color="secondary" aria-label="Navbar" size="medium">
        {buttons.map((button: HeaderButtonConfig) => (
          <Button key={button.name} variant={path === button.path ? "contained" : "outlined"} href={button.path}>
            {button.icon ? (<button.icon />) : button.name}
          </Button>
        ))}
      </ButtonGroup>

      <ButtonGroup color="secondary" aria-label="" size="medium">
        <UploadPictureButton />
        <Button href="#">
          {/* <LoginIcon /> */}
          <HighlightOffIcon />
        </Button>
      </ButtonGroup>
    </Grid>
  );
}