import { Box, Stack, styled } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "200px",
  background: `radial-gradient(${theme.palette.background.paper} 0% 67%, ${theme.palette.secondary.main} 69% 100%) border-box`,
  backgroundImage: "", //set the actual image here
  border: `solid transparent 8px`,
  borderRadius: "100%",
}));

export const BodyContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  maxWidth: "100%",
  height: "100%",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  flexGrow: 1,
  overflowY: "auto", //scrollable body
  padding: isMobile ? `20px` : `45px`,
}));
