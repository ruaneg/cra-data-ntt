import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import CoinGecko from "./views/CoinGeckoList";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
      <>
          <AppBar
              position="absolute"
              color="default"
              elevation={0}
              sx={{
                  position: 'relative',
                  borderBottom: (t) => `1px solid ${t.palette.divider}`,
              }}
          >
              <Toolbar>
                  <Typography variant="h6" color="inherit" noWrap>
                      Company name
                  </Typography>
              </Toolbar>
          </AppBar>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <CoinGecko />
              <Copyright />
          </Container>
      </>

  );
}
