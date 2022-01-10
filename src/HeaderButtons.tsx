import { Button, ButtonGroup, Input, SvgIconTypeMap } from '@mui/material';
import { useRouter } from 'next/router';
import { Grid } from "@mui/material";

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PendingIcon from '@mui/icons-material/Pending';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { PhotoCamera } from '@mui/icons-material';
import { ChangeEvent } from 'react';

interface HeaderButtonConfig {
  name: string;
  path: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
};

const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.files == null) {
    e.target.files = new FileList();
  }

  for (let i = 0; i < e.target.files.length; i++) {
    const f = e.target.files[i];
    
    // fetch("/test", {
    //   method: "POST",
    //   body: f
    // })
    // .then(resp => resp.json())
    // .then(alert)
    // .catch(console.error);
  }
}

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
          <Button href="#" onClick={() => document.getElementById("upload")?.click()}>
            <PhotoCamera />
            <input type="file" accept=".jpg,.jpeg,.png,.gif,image/*" id="upload" onChange={uploadFile} hidden multiple />
          </Button>
          <Button href="#">
            {/* <LoginIcon /> */}
            <PendingIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}