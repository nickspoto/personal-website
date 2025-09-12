import { Stack } from "@mui/material";
import { Header } from "./components/header";
import { Body } from "./components/body";
import "./styles/global.css";

function App() {
  return (
    <>
      <Stack width={"100%"} height={"100%"} direction="column" margin={"0px"}>
        <Header props={[1]}></Header>
        <Body props=""></Body>
      </Stack>
    </>
  );
}

export default App;
