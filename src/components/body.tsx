import { Stack, Typography } from "@mui/material";

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
