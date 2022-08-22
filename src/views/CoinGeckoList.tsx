import React from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function CoinGeckoList() {
    return (
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
                Checkout
            </Typography>
        </Paper>
    );
};