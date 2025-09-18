import { Box, styled } from "@mui/material";

export const HeroWrapper = styled(Box)({
  width: "200px",
  height: "200px",
  background: "radial-gradient(white 0% 67%, orange 69% 100%) border-box",
  backgroundImage: "", //set the actual image here
  border: `solid transparent 8px`,
  borderRadius: "100%",
});
