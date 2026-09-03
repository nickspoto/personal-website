import { IconButton, Stack, Tooltip, useMediaQuery } from "@mui/material";
import { Curtain } from "./curtain";
import { Resume } from "./resume";
import { InfoOutline } from "@mui/icons-material";

export const Wall = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Stack
      width={"100%"}
      height={"60%"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ zIndex: 2 }}
    >
      <Stack
        width="100%"
        height="25%"
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
      >
        <Stack width="95%" />
        <Tooltip title="VIEW INFO" placement="left">
          <IconButton sx={{ zIndex: 20, top: "-10%" }}>
            <InfoOutline />
          </IconButton>
        </Tooltip>
      </Stack>
      <Stack
        direction="row"
        width="100%"
        height="40%"
        sx={{ position: "absolute", top: "-10%" }}
      >
        <Curtain />
        <Resume />
      </Stack>
      <Stack
        width="55%"
        height="50%"
        bgcolor={"white"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ border: "2px solid black" }}
      >
        Hi
      </Stack>
      <Stack
        width="100%"
        height={`${isMobile ? "40%" : "25%"}`}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Yo
      </Stack>
    </Stack>
  );
};
