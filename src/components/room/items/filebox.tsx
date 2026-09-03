import { Asset } from "../styles";
import filebox from "../../../assets/filebox.png";
import { Box, Tooltip } from "@mui/material";
import { useState } from "react";
import { Border } from "../utils/border";

export const Filebox = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Tooltip title={isHovered ? `VIEW STUFF` : ""} placement="top">
      <Box
        onClick={() => {
          console.log("Filebox clicked");
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        sx={{
          position: "absolute",
          top: "35px",
          left: "12%",
          background: "none",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        <Border width={7} height={7} isHovered={isHovered} />
        <Asset src={filebox} width={64} height={64} alt="File box" />
      </Box>
    </Tooltip>
  );
};
