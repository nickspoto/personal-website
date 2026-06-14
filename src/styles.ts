import { Stack, styled } from "@mui/material";

export const AppContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  margin: "0px",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
}));
