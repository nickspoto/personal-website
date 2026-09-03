import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Header } from "./components/alt/header/header";
import { Body } from "./components/alt/body/body";
import "./styles/global.css";
import { lightTheme } from "./theme/theme";
import { AppContainer } from "./styles";
import { Footer } from "./components/alt/footer";
import { Room } from "./components/room/room";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const isDev = true;
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer direction="column">
        {isDev ? (
          <Room />
        ) : (
          <>
            <Header setTheme={setTheme} />
            <Body />
            <Footer />
          </>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
