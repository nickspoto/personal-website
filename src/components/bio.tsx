import { Stack, Typography, useMediaQuery } from "@mui/material";
import { HeroWrapper } from "./styles";

export const Bio: React.FC = () => {
  const isMobile = !useMediaQuery("(min-width:1000px)");
  // I could make the breakpoint smaller here and it would look fine, but then the horizontal
  // padding should be shifted too
  return (
    //these can all be simplified with a bio wrapper that takes an isMobile prop
    <Stack
      padding={isMobile ? "20px" : "45px 90px"}
      direction={isMobile ? "column" : "row"}
      spacing={isMobile ? 5 : 10} //horiz space on non-mobile should be larger than mobile vertical
    >
      <Stack alignItems={"center"}>
        <HeroWrapper />
        {/* change these into clickable icon buttons with links */}
        <Typography paddingTop={"10px"} textAlign={"center"}>
          <strong>Github: </strong>
          github.com/nickspoto
          <br />
          <strong>Email: </strong>
          njs232@cornell.edu
          <br />
          <strong>Phone: </strong>
          (703) 615-0166
        </Typography>
      </Stack>
      <Stack spacing={2} textAlign={isMobile ? "center" : "left"}>
        <Typography variant={"h2"}>About Me</Typography>
        <Typography variant={"h6"}>
          Hi! My name is Nick Spoto, and I am a student studying computer
          science in Cornell University's College of Engineering, with a minor
          in AI. I am interested in web development and software engineering,
          and I want to work in defense-based software and frontend/backend
          development. Please feel free to reach out through my email/phone, or
          the form below.
        </Typography>
        {/* make a link to a contact form area */}
      </Stack>
    </Stack>
  );
};
