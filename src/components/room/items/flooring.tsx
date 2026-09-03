import { useMemo } from "react";
import floorTile from "../../../assets/floor-tile.png";
import { Stack } from "@mui/material";

const TILE_WIDTH = 512;
const TILE_HEIGHT = 128;

export const Flooring = () => {
  const rows = useMemo(() => {
    return Array.from({ length: 15 }, (_, rowIndex) => ({
      id: rowIndex,
      flip: Math.random() < 0.5,
      offset: rowIndex % 2 === 0 ? 0 : TILE_WIDTH / ((Math.random() + 1) / 3),
    }));
  }, []);

  return (
    <Stack
      width="100%"
      height="45%"
      sx={{
        overflow: "hidden",
        position: "absolute",
        top: "55%",
      }}
    >
      {rows.map((row) => (
        <Stack
          key={row.id}
          direction="row"
          sx={{
            height: TILE_HEIGHT,
            width: `calc(100% + ${TILE_WIDTH}px)`,
            transform: `translateX(-${row.offset}px)`,
          }}
        >
          {Array.from({ length: 30 }).map((_, index) => (
            <Stack
              key={index}
              sx={{
                borderBottom: row.flip ? "none" : "2px solid #222034",
                borderTop: row.flip ? "2px solid #222034" : "none",
              }}
            >
              <img
                src={floorTile}
                width={TILE_WIDTH}
                height={TILE_HEIGHT}
                style={{
                  imageRendering: "pixelated",
                  transform: `scale(${row.flip ? -1 : 1})`,
                }}
              />
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};
