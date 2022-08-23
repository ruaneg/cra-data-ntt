import React from "react";
import CoinGeckoImg from "../../assets/coin_gecko.png";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import { TApiResponse, useApiFetch } from "../../hooks/useAPI";
import CryptoTable from "./CryptoTable/CryptoTable";

export const COIN_GECKO_API_BASE_URL = "https://api.coingecko.com/api/v3",
  COIN_GECKO_MARKETS =
    "/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10";

export default function CoinGecko() {
  // Custom hook to fetch coins
  const marketCoinsResponse: TApiResponse = useApiFetch(
    COIN_GECKO_API_BASE_URL + COIN_GECKO_MARKETS
  );

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
        {marketCoinsResponse?.loading ? (
          <Box display="flex" justifyContent="center" sx={{ m: 16 }}>
            <CircularProgress />
          </Box>
        ) : marketCoinsResponse?.data?.length ? (
          <CryptoTable listData={marketCoinsResponse.data} />
        ) : null}
      </CardContent>
    </Card>
  );
}
