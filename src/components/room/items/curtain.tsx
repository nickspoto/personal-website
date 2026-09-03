import { Box, Stack, Tooltip, useMediaQuery } from "@mui/material";
import { Asset } from "../styles";
import curtainRod from "../../../assets/curtain-rod.png";
import curtainCapLeft from "../../../assets/curtain-cap-left.png";
import curtainCapRight from "../../../assets/curtain-cap-right.png";
import curtainTop from "../../../assets/curtain-top.png";
import curtainBg from "../../../assets/curtain-bg.png";
import { StackBg } from "../utils/stackBg";
import { Border } from "../utils/border";
import { useState } from "react";

const TILE_HEIGHT = 16;

export const Curtain = () => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const CURTAIN_TILE_SIZE = TILE_HEIGHT * 8 * (isClicked ? 2.5 : 1);
  const Rod = ({ width }: { width: number }) => {
    return (
      <StackBg
        size={TILE_HEIGHT}
        url={curtainRod}
        sx={{
          width: `${width}%`,
          height: `${TILE_HEIGHT}px`,
        }}
      />
    );
  };
  return (
    <Stack
      direction="row"
      width="75%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ zIndex: 2, position: "absolute", top: "0", left: "12.5%" }}
    >
      <Asset src={curtainCapLeft} width={32} height={32} />
      <Tooltip title={isHoveredLeft ? `CHANGE THEME` : ""} placement="top">
        <Box
          onClick={() => {
            console.log("Curtains clicked");
            setIsClicked(!isClicked);
            setIsHoveredLeft(false);
          }}
          onMouseEnter={() => {
            setIsHoveredLeft(true);
          }}
          onMouseLeave={() => {
            setIsHoveredLeft(false);
          }}
          sx={{
            position: "absolute",
            width: `${isClicked ? "calc(50% - 32px)" : "20%"}`,
            height: `${isMobile ? "80%" : "100%"}`,
            top: "calc(60% - 36px)",
            left: "32px",
            cursor: "pointer",
            transition: "0.5s ease-in-out",
          }}
        >
          <StackBg
            size={CURTAIN_TILE_SIZE}
            height={TILE_HEIGHT * 8}
            url={curtainTop}
            sx={{
              position: "absolute",
              width: "100%",
              height: `${TILE_HEIGHT}px`,
            }}
          />
          <StackBg
            size={CURTAIN_TILE_SIZE}
            url={curtainBg}
            sx={{
              position: "absolute",
              width: "100%",
              height: `calc(100% - ${TILE_HEIGHT}px)`,
              top: `${TILE_HEIGHT}px`,
            }}
          />
          <Border width={7} height={7} isHovered={isHoveredLeft} />
        </Box>
      </Tooltip>
      <Tooltip title={isHoveredRight ? `CHANGE THEME` : ""} placement="top">
        <Box
          onClick={() => {
            console.log("Curtains clicked");
            setIsClicked(!isClicked);
            setIsHoveredRight(false);
          }}
          onMouseEnter={() => {
            setIsHoveredRight(true);
          }}
          onMouseLeave={() => {
            setIsHoveredRight(false);
          }}
          sx={{
            position: "absolute",
            width: `${isClicked ? "calc(50% - 32px)" : "20%"}`,
            height: `${isMobile ? "80%" : "100%"}`,
            top: "calc(60% - 36px)",
            left: `${isClicked ? "calc(50%)" : "calc(80% - 32px)"}`,
            cursor: "pointer",
            transition: "0.5s ease-in-out",
          }}
        >
          <StackBg
            size={CURTAIN_TILE_SIZE}
            height={TILE_HEIGHT * 8}
            url={curtainTop}
            sx={{
              position: "absolute",
              width: `100%`,
              height: `${TILE_HEIGHT}px`,
            }}
          />
          <StackBg
            size={CURTAIN_TILE_SIZE}
            url={curtainBg}
            sx={{
              position: "absolute",
              width: "100%",
              height: `calc(100% - ${TILE_HEIGHT}px)`,
              top: `${TILE_HEIGHT}px`,
            }}
          />
          <Border width={7} height={7} isHovered={isHoveredRight} />
        </Box>
      </Tooltip>
      <Rod width={50} />
      <Stack
        sx={{
          height: `${TILE_HEIGHT - 2}px`,
          border: "1px solid black",
        }}
      />
      <Rod width={50} />
      <Asset src={curtainCapRight} width={32} height={32} />
    </Stack>
  );
};
