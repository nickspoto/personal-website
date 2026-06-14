import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { Header } from "./components/header/header";
import { Body } from "./components/body/body";
import "./styles/global.css";
import { lightTheme } from "./theme/theme";
import { AppContainer } from "./styles";
import { Footer } from "./components/footer";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <AppContainer direction="column">
        <Header setTheme={setTheme} />
        <Body />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
