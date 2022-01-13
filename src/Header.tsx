import HeaderButtons from './HeaderButtons';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';

export default function Header() {
  return (
    <Stack
      spacing={3}
      sx={{
        width: {
          xs: "80vw",
          sm: "90vw",
          md: "90vw",
          lg: "90vw",
          xl: "90vw",
        }
      }}

    >
      <Box alignSelf={"center"}>
        <img src={'./assets/owen2moen.gif'} width={350} height={200} />
      </Box>

      <HeaderButtons />
    </Stack>
  );
}