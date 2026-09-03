import wallBottom from "../../../assets/wall-bottom.png";
import { Stack } from "@mui/material";
import { StackBg } from "../utils/stackBg";

const TILE_HEIGHT = 128;

export const Wallpaper = () => {
  return (
    <Stack
      width="100%"
      height="55%"
      direction="column"
      sx={{
        position: "absolute",
        zIndex: 1,
        top: 0,
      }}
    >
      <Stack height={`calc(100% - ${TILE_HEIGHT}px)`} bgcolor={"#a3c9fe"} />
      <StackBg
        size={TILE_HEIGHT}
        url={wallBottom}
        sx={{
          height: TILE_HEIGHT,
          width: "100%",
        }}
      />
    </Stack>
  );
};
