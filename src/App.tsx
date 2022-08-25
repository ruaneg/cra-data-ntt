import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import CoinGecko from "./views/CoinGecko/CoinGecko";
import Logo from "./components/Logo/Logo";

export default function App() {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
      <Box display="flex" justifyContent="center">
        <CoinGecko />
      </Box>
    </>
  );
}
