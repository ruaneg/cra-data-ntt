import TableContainer from "@mui/material/TableContainer";
import { Box, CircularProgress } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import React from "react";
import useApiFetch, { TApiResponse } from "../../../hooks/useAPI";
import { COIN_GECKO_API_BASE_URL, COIN_GECKO_MARKETS } from "../apiConstants";
import CryptoTableRow from "./CryptoTableRow";
import { CGMarketList } from "./interfaces";
import TablePaginationActions from "./TablePaginationActions";

const DESCRIPTION_TABLE = "Showing Coins by Market Capitalization";

interface CryptoRowsCGProps {
  rows: Array<CGMarketList>;
}

function CryptoTableContainer(rowsDataProps: CryptoRowsCGProps) {
  const { rows } = rowsDataProps;

  return rows ? (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: "64vw" }}
          size="small"
          aria-label={DESCRIPTION_TABLE}
        >
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>#</TableCell>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell />
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">High&nbsp;(24hrs)</TableCell>
              <TableCell align="right">Low&nbsp;(24hrs)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <CryptoTableRow key={row.id} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  ) : null;
}

export default function CryptoTable() {
  const [page, setPage] = React.useState(1);

  const marketCoinsResponse: TApiResponse<Array<CGMarketList>> = useApiFetch(
    COIN_GECKO_API_BASE_URL + COIN_GECKO_MARKETS + page
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      {marketCoinsResponse?.loading ? (
        <Box display="flex" justifyContent="center" sx={{ m: 16 }}>
          <CircularProgress />
        </Box>
      ) : null}
      {marketCoinsResponse?.data?.length ? (
        <>
          <CryptoTableContainer rows={marketCoinsResponse.data} />
          <TablePaginationActions
            count={marketCoinsResponse?.data.length}
            page={page}
            onChangePage={handleChangePage}
          />
        </>
      ) : null}
    </>
  );
}
