import { Box, CircularProgress, Grid } from "@mui/material";
import React from "react";
import { TApiResponse, useApiFetch } from "../../../hooks/useAPI";
import { COIN_GECKO_API_BASE_URL } from "../CoinGecko";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { htmlDecode, valueOrUknown } from "../../../utils/utils";

const COINS = "/coins/";

interface CoinExtraDetailTableProps {
  symbol: string;
  name: string;
  hashing_algorithm: string;
  description: string;
  homepage: string;
  genesis_date: string;
  market_cap: number;
}

const CoinExtraDetail = (props: CoinExtraDetailTableProps) => {
  const {
    symbol,
    name,
    hashing_algorithm,
    description,
    homepage,
    genesis_date,
    market_cap,
  } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <List>
          <ListItem>
            <ListItemText
              primary={valueOrUknown(name)}
              secondary={valueOrUknown(symbol?.toUpperCase())}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Hashing algorithm"
              secondary={valueOrUknown(hashing_algorithm)}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Homepage"
              secondary={valueOrUknown(homepage)}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Market cap"
              secondary={valueOrUknown(
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                }).format(market_cap)
              )}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Genesis Date"
              secondary={valueOrUknown(genesis_date)}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={10}>
        <List>
          <ListItem>
            <ListItemText
              primary={"Description"}
              secondary={valueOrUknown(htmlDecode(description))}
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

interface CoinExtraDetailsProps {
  id: string;
}

export default function CoinExtraDetails(props: CoinExtraDetailsProps) {
  const { id } = props;

  // Custom hook to fetch coin information by id
  const coinByIdResponse: TApiResponse = useApiFetch(
    COIN_GECKO_API_BASE_URL + COINS + id
  );

  return (
    <Box sx={{ margin: 2, width: "60vw" }}>
      {coinByIdResponse?.loading ? (
        <Box display="flex" justifyContent="center" sx={{ m: 4 }}>
          <CircularProgress />
        </Box>
      ) : coinByIdResponse?.data ? (
        <CoinExtraDetail
          symbol={coinByIdResponse?.data?.symbol}
          name={coinByIdResponse?.data?.name}
          hashing_algorithm={coinByIdResponse?.data?.hashing_algorithm}
          description={coinByIdResponse?.data?.description?.en}
          homepage={coinByIdResponse?.data?.homepage?.filter(Boolean).join(",")}
          genesis_date={coinByIdResponse?.data?.genesis_date}
          market_cap={coinByIdResponse?.data?.market_data?.market_cap["eur"]}
        />
      ) : null}
    </Box>
  );
}
