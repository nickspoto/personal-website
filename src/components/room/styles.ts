import { styled } from "@mui/material";

export const Asset = styled("img", {
  shouldForwardProp: (prop) => prop !== "width" && prop !== "height",
})<{ width: number; height: number }>(({ width, height }) => ({
  width: `${width ?? 64}px`,
  height: `${height ?? 64}px`,
  imageRendering: "pixelated",
}));
