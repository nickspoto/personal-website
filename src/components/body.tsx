import { Divider, Typography, useMediaQuery } from "@mui/material";
import { Bio } from "./bio";
import { BodyContainer } from "./styles";

export const Body = () => {
  const isMobile = !useMediaQuery("(min-width:1000px)");

  return (
    <BodyContainer isMobile={isMobile} spacing={5}>
      <Bio />
      <Divider />
      <Typography>More material goes after here</Typography>
    </BodyContainer>
  );
};
