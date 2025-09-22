import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#606060ff",
    },
    secondary: {
      main: "#ffba39ff",
    },
    //add a font size breakpoint for mobile devices
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#a9a9a9ff",
    },
  },
});
