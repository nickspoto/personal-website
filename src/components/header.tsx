import { Bedtime, LightMode } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  type Theme,
} from "@mui/material";
import { TopNav } from "./topNav";
import { darkTheme, lightTheme } from "../theme/theme";

export const Header: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}> = ({ setTheme }) => {
  const theme = useTheme();
  const disableName = useMediaQuery("(min-width:400px)");
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
        {disableName && (
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
        )}
        <IconButton
          color="inherit"
          onClick={() => {
            setTheme(theme.palette.mode === "light" ? darkTheme : lightTheme);
          }}
        >
          {/* make this take the actual theme */}
          {theme.palette.mode === "light" ? <Bedtime /> : <LightMode />}
        </IconButton>
      </Stack>
    </AppBar>
  );
};
