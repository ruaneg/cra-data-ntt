import { Box, CircularProgress, Grid } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { htmlDecode, valueOrUknown } from "../../../utils/utils";
import useApiFetch, { TApiResponse } from "../../../hooks/useAPI";
import { COIN_GECKO_API_BASE_URL, COINS } from "../apiConstants";

interface CoinExtraDetailTableProps {
  symbol: string;
  name: string;
  hashingAlgorithm: string;
  description: string;
  homepage: string;
  genesisDate: string;
  marketCap: number;
}

const CoinExtraDetail = (props: CoinExtraDetailTableProps) => {
  const {
    symbol,
    name,
    hashingAlgorithm,
    description,
    homepage,
    genesisDate,
    marketCap,
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
              secondary={valueOrUknown(hashingAlgorithm)}
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
                }).format(marketCap)
              )}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Genesis Date"
              secondary={valueOrUknown(genesisDate)}
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

interface CoinsApiResponse {
  symbol: string;
  name: string;
  hashing_algorithm: string;
  description: { en: string };
  links: { homepage: Array<string> };
  genesis_date: string;
  market_data: { market_cap: { eur: number } };
}

interface CoinExtraDetailsProps {
  id: string;
}

export default function CoinExtraDetails(props: CoinExtraDetailsProps) {
  const { id } = props;

  // Custom hook to fetch coin information by id
  const coinByIdResponse: TApiResponse<CoinsApiResponse> = useApiFetch(
    COIN_GECKO_API_BASE_URL + COINS + id
  );

  return (
    <Box sx={{ margin: 2, width: "60vw" }}>
      {coinByIdResponse?.data ? (
        <CoinExtraDetail
          symbol={coinByIdResponse?.data?.symbol}
          name={coinByIdResponse?.data?.name}
          hashingAlgorithm={coinByIdResponse?.data?.hashing_algorithm}
          description={coinByIdResponse?.data?.description?.en}
          homepage={coinByIdResponse?.data?.links?.homepage
            ?.filter(Boolean)
            .join(",")}
          genesisDate={coinByIdResponse?.data?.genesis_date}
          marketCap={coinByIdResponse?.data?.market_data?.market_cap.eur}
        />
      ) : null}
      {coinByIdResponse?.loading ? (
        <Box display="flex" justifyContent="center" sx={{ m: 4 }}>
          <CircularProgress />
        </Box>
      ) : null}
    </Box>
  );
}
