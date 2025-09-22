import { Bedtime, LightMode } from "@mui/icons-material";
import { IconButton, useMediaQuery, useTheme, type Theme } from "@mui/material";
import { TopNav } from "./topNav";
import { darkTheme, lightTheme } from "../../theme/theme";
import { CenteredName, HeaderAppBar, NavAlign } from "./styles";

export const Header: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}> = ({ setTheme }) => {
  const theme = useTheme();
  const enableName = useMediaQuery("(min-width:400px)");
  const handleThemeChange = () => {
    setTheme(theme.palette.mode === "light" ? darkTheme : lightTheme);
  };

  return (
    <HeaderAppBar>
      <NavAlign direction="row">
        <TopNav props="" />
        {enableName && <CenteredName variant="h4">Nick Spoto</CenteredName>}
        <IconButton color="inherit" onClick={handleThemeChange}>
          {theme.palette.mode === "light" ? <Bedtime /> : <LightMode />}
        </IconButton>
      </NavAlign>
    </HeaderAppBar>
  );
};
