import { Divider, Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Stack
      width="100%"
      height="100px"
      textAlign={"center"}
      justifyContent={"space-evenly"}
    >
      <Divider />
      <Typography>&copy; Nick Spoto 2025</Typography>
    </Stack>
  );
};
