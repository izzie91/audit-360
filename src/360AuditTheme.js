import UbuntuWoff2 from "./fonts/ubuntu/ubuntu-v20-latin-regular.woff2";
import { createTheme } from "@mui/material/styles";

const myTheme = createTheme({
  typography: {
    fontFamily: "Ubuntu, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Ubuntu'), local('Ubuntu-Regular'), url(${UbuntuWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: "#FF5722",
    },
    text: {
      primary: "#666666",
    },
  },
});

export default myTheme;
