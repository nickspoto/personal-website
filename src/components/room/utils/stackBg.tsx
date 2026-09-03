import { Stack } from "@mui/material";

export const StackBg = ({
  size,
  url,
  height,
  sx,
}: {
  size: number;
  url: string;
  height?: number;
  sx: object;
}) => {
  return (
    <Stack
      sx={{
        ...sx,
        backgroundImage: `url(${url})`,
        backgroundRepeat: "repeat",
        backgroundSize: `${size}px ${height ?? size}px`,
        imageRendering: "pixelated",
        transition: "background-size 0.5s ease-in-out",
      }}
    />
  );
};
