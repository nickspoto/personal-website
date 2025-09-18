import { Stack, Typography } from "@mui/material";
import { Bio } from "./bio";

export const Body: React.FC<{ props: string }> = () => {
  const stuff = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  return (
    <Stack
      maxWidth={"100%"}
      height={"100%"}
      color="gray"
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
