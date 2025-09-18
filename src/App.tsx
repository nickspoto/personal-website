import { useState } from "react";
import { Stack, ThemeProvider } from "@mui/material";
import { Header } from "./components/header";
import { Body } from "./components/body";
import "./styles/global.css";
import { lightTheme } from "./theme/theme";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <Stack width={"100%"} height={"100%"} direction="column" margin={"0px"}>
        <Header setTheme={setTheme}></Header>
        <Body props=""></Body>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
