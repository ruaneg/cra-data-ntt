import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CoinGeckoCard from "./views/CoinGeckoCard";
import Logo from "./components/Logo/Logo";
import { Box } from "@mui/material";

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
      <Box display="flex" justifyContent="center" sx={{ m: 4 }}>
        <CoinGeckoCard />
      </Box>
    </>
  );
}
