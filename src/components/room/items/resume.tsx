import { useState } from "react";
import resume from "../../../assets/resume.png";
import { Box, Tooltip } from "@mui/material";
import { Border } from "../utils/border";
import { Asset } from "../styles";

export const Resume = () => {
  //TODO: Fix for mobile cutoff + adapt curtains
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      onClick={() => {
        console.log("Resume clicked");
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      sx={{
        position: "absolute",
        top: "75%",
        right: "2.5%",
        background: "none",
        cursor: "pointer",
        zIndex: 3,
        height: "144px",
      }}
    >
      <Border width={7} height={7} isHovered={isHovered} />
      <Tooltip title="VIEW RESUME" placement="top">
        <Asset src={resume} width={123} height={144} alt="Resume" />
        {/* for mobile - change back to 82x96 or smaller */}
      </Tooltip>
    </Box>
  );
};
