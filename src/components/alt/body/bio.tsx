import { Link, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { HeroWrapper } from "../styles";
import { Email, GitHub, Phone } from "@mui/icons-material";

export const Bio: React.FC = () => {
  const isMobile = !useMediaQuery("(min-width:1000px)");
  // I could make the breakpoint smaller here and it would look fine, but then the horizontal
  // padding should be shifted too
  return (
    //these can all be simplified with a bio wrapper that takes an isMobile prop
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={isMobile ? 5 : 10} //horiz space on non-mobile should be larger than mobile vertical
    >
      <Stack alignItems={"center"}>
        <HeroWrapper />
        {/* change these into clickable icon buttons with links */}
        <Stack
          direction={"row"}
          gap={2}
          paddingTop={"20px"}
          textAlign={"center"}
        >
          <Tooltip title="github.com/nickspoto">
            <Link href="https://github.com/nickspoto" color="textPrimary">
              <GitHub />
            </Link>
          </Tooltip>
          <Tooltip title="njs232@cornell.edu">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=njs232@cornell.edu"
              color="textPrimary"
            >
              <Email />
            </Link>
          </Tooltip>
          <Tooltip title="(703) 615-0166">
            <Link href="tel:7036150166" color="textPrimary">
              <Phone />
            </Link>
          </Tooltip>
        </Stack>
      </Stack>
      <Stack spacing={2} textAlign={isMobile ? "center" : "left"}>
        <Typography variant={"h2"}>About Me</Typography>
        <Typography variant={"h6"}>
          Hi! My name is Nick Spoto, and I am a student studying computer
          science in Cornell University's College of Engineering, with a minor
          in AI. I am interested in web development and software engineering,
          and I want to work in defense-based software and frontend/backend
          development. Please feel free to reach out through my email, phone, or
          the form below.
        </Typography>
        {/* make a link to a contact form area */}
      </Stack>
    </Stack>
  );
};
