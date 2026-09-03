import { tooltipClasses } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const sharedTheme = {
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: '"Tiny5", sans-serif, system-ui',
        },
        popper: {
          [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
            {
              marginTop: "10px",
            },

          [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
            {
              marginBottom: "20px",
            },

          [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
            {
              marginLeft: "10px",
            },

          [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
            {
              marginRight: "10px",
            },
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...sharedTheme,
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
  ...sharedTheme,
  palette: {
    mode: "dark",
    text: {
      primary: "#a9a9a9ff",
    },
  },
});
