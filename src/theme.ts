import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
import yellow from "@mui/material/colors/yellow";
import green from "@mui/material/colors/green";
import lightBlue from "@mui/material/colors/lightBlue";
import grey from "@mui/material/colors/grey";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[50],
    },
    secondary: {
      light: red[500],
      main: red[700],
      dark: red[900],
      contrastText: grey[50],
    },
    error: {
      light: red[400],
      main: red[500],
      dark: red[300],
      contrastText: grey[800],
    },
    success: {
      main: green[500],
    },
    warning: {
      main: yellow[500],
      contrastText: grey[800],
    },
    info: {
      main: lightBlue[500],
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },
  },
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: green[700],
        },
      },
    },
  },
});

export default theme;
