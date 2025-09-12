import { Bedtime, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { TopNav } from "./topNav";

export const Header: React.FC<{ props: number[] }> = ({ props }) => {
  props.push(1);
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        width: "100%",
        height: "100px",
        padding: "30px",
      }}
    >
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ position: "relative", height: "100%" }}
      >
        <TopNav props="" />
        <Typography
          variant={"h4"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Nick Spoto
        </Typography>
        <IconButton color="inherit">
          {/* make this take the actual theme */}
          {theme.palette.mode === "light" ? <Bedtime /> : <LightMode />}
        </IconButton>
      </Stack>
    </AppBar>
  );
};
