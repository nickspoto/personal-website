import { Box, styled } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "200px",
  background: `radial-gradient(${theme.palette.background.paper} 0% 67%, ${theme.palette.secondary.main} 69% 100%) border-box`,
  backgroundImage: "", //set the actual image here
  border: `solid transparent 8px`,
  borderRadius: "100%",
}));
