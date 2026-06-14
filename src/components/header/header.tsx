import { Bedtime, LightMode } from "@mui/icons-material";
import {
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  type Theme,
} from "@mui/material";
import { TopNav } from "./topNav";
import { darkTheme, lightTheme } from "../../theme/theme";
import { CenteredName, HeaderAppBar, InitialsIcon, NavAlign } from "./styles";

export const Header: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}> = ({ setTheme }) => {
  const theme = useTheme();
  const enableName = useMediaQuery("(min-width:500px)");
  const handleThemeChange = () => {
    setTheme(theme.palette.mode === "light" ? darkTheme : lightTheme);
  };

  return (
    <HeaderAppBar>
      <NavAlign direction="row">
        <TopNav props="" />
        <CenteredName direction="row">
          {enableName && <Typography variant="h4">Nick Spoto</Typography>}
        </CenteredName>

        {/* think about using impact font bolded here */}
        <IconButton color="inherit" onClick={handleThemeChange}>
          {theme.palette.mode === "light" ? <Bedtime /> : <LightMode />}
        </IconButton>
      </NavAlign>
    </HeaderAppBar>
  );
};
