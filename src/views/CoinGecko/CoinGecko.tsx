import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import CryptoTable from "./CryptoTable/CryptoTable";
import CoinGeckoImg from "../../assets/coin_gecko.png";

export default function CoinGecko() {
  return (
    <Card elevation={0}>
      <CardMedia
        component="img"
        height="120"
        image={CoinGeckoImg}
        alt="CoinGecko"
        sx={{ width: "364px", m: 2 }}
      />
      <CardContent>
        <CryptoTable />
      </CardContent>
    </Card>
  );
}
