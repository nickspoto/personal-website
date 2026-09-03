import { Stack } from "@mui/material";
import couch from "../../assets/couch.png";
import { Asset } from "./styles";
import { Filebox } from "./items/filebox";
import { Flooring } from "./items/flooring";
import { Wallpaper } from "./items/wallpaper";
import { Wall } from "./items/wall";

export const Room = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Wall />
      <Wallpaper />
      <Stack
        width={"100%"}
        height={"50%"}
        direction={"column"}
        spacing={5}
        sx={{ borderTop: "4px solid black" }}
      >
        <Flooring />
        <Stack
          width={"100%"}
          height={"50%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack sx={{ position: "relative" }}>
            <Asset src={couch} width={300} height={150} alt="Couch" />
            <Filebox />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
