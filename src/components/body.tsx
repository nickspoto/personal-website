import { Stack, Typography, useTheme } from "@mui/material";
import { Bio } from "./bio";

export const Body: React.FC<{ props: string }> = () => {
  const stuff = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  const theme = useTheme();
  return (
    <Stack
      maxWidth={"100%"}
      height={"100%"}
      //I want to change these colors to be a little more muted - like a dark/light gray
      color={theme.palette.text.primary}
      bgcolor={theme.palette.background.paper}
      flexGrow={1}
      sx={{
        overflowY: "auto", //scrollable body
        padding: "10px",
      }}
    >
      <Bio />
      <Typography>All material goes here</Typography>
      {stuff.map((stuff) => (
        <>
          {stuff + "\n"}
          <br></br>
        </>
      ))}
    </Stack>
  );
};
