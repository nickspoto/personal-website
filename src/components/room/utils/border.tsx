import { Asset } from "../styles";
import pixelBorderCorner from "../../../assets/pixel-border-corner.png";
import { Box } from "@mui/material";

export const Border = ({
  width,
  height,
  isHovered,
}: {
  width: number;
  height: number;
  isHovered: boolean;
}) => {
  const cornerSize = width * 4;

  const Corner = ({ rotate, sx }: { rotate: number; sx: object }) => (
    <Asset
      src={pixelBorderCorner}
      width={cornerSize}
      height={cornerSize}
      style={{
        position: "absolute",
        imageRendering: "pixelated",
        pointerEvents: "none",
        transform: `rotate(${rotate}deg)`,
        ...sx,
      }}
    />
  );

  return (
    <Box
      sx={{
        position: "absolute",
        top: `-${height * 2}px`,
        left: `-${width * 2}px`,
        width: `calc(100% + ${width * 4}px)`,
        height: `calc(100% + ${height * 4}px)`,
        pointerEvents: "none",
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
        backgroundColor: "rgba(0,0,0,.25)",
        border: "1px transparent solid",
        borderRadius: "18px",
      }}
    >
      <Corner
        rotate={0}
        sx={{
          top: 0,
          left: 0,
        }}
      />
      <Corner
        rotate={90}
        sx={{
          top: 0,
          right: 0,
        }}
      />
      <Corner
        rotate={270}
        sx={{
          bottom: 0,
          left: 0,
        }}
      />
      <Corner
        rotate={180}
        sx={{
          bottom: 0,
          right: 0,
        }}
      />
    </Box>
  );
};
