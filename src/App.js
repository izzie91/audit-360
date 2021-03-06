//Mui
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "./360AuditTheme";

//Components
import Router from "./router/Router";
import ScrollTop from "./components/ScrollTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Header></Header>
        <ScrollTop></ScrollTop>
        <Router></Router>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
