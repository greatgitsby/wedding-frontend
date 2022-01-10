import Copyright from '../Footer';
import { Box, Card, Grid, Stack, Theme, Typography } from '@mui/material';
import Header from '../Header';

export default function Details() {
  const weddingDateStr = "06/11/2022";

  // Get number of days till wedding!
  const weddingDate = new Date(weddingDateStr);
  const todaysDate = new Date();
  const timeDiff = weddingDate.getTime() - todaysDate.getTime();
  const numDaysTillWedding = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;

  const lines = [
    weddingDateStr,
    `${numDaysTillWedding} days until the wedding!`,
    "Contact us at hello@owen2moen.com"
  ];

  return (
    <Grid container justifyContent="center">
      <Stack
        spacing={4}
        justifyContent={"center"}
        sx={{
          maxWidth: {
            xs: "80vw",
            sm: "90vw"
          }
        }}
      >

        <Header />

        <Box alignSelf={"center"}>
          <Card
            raised
            sx={{
              padding: "50px", backgroundColor: (theme: Theme) => theme.palette.secondary.main
            }}
          >
            {lines.map((line, i) => (
              <Typography
                key={i}
                align={"center"}
                sx={{
                }}
                color={"#fff"}
              >
                {line}
              </Typography>
            ))}
          </Card>
        </Box>

        <Copyright />
      </Stack>
    </Grid>
  );
}