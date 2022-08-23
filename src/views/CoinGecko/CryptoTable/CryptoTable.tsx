import TableContainer from "@mui/material/TableContainer";
import { Avatar, Box, Collapse, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import CurrencyText from "../../../components/CurrencyText/CurrencyText";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CoinExtraDetails from "./CoinExtraDetails";

const DESCRIPTION_TABLE = "Showing Top 10 Coins by Market Capitalization";

export interface CGMarketList {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
  high_24h: number;
  low_24h: number;
}

interface CryptoTableRowProps {
  row: CGMarketList;
  index: number;
}

const CryptoTableRow = (props: CryptoTableRowProps) => {
  const { row, index } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        key={row.name}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{index + 1}</TableCell>
        <TableCell>
          <Avatar
            alt={row.name}
            src={row.image}
            sx={{ width: 24, height: 24 }}
          />
        </TableCell>
        <TableCell align="left">
          <Typography>{row.name}</Typography>
        </TableCell>
        <TableCell align="left">
          <Typography>{row.symbol.toUpperCase()}</Typography>
        </TableCell>
        <TableCell align="right">
          <CurrencyText value={row.current_price} />
        </TableCell>
        <TableCell align="right">
          <CurrencyText value={row.high_24h} color={"success.main"} />
        </TableCell>
        <TableCell align="right">
          <CurrencyText value={row.low_24h} color={"error.main"} />
        </TableCell>
      </TableRow>
      {open ? (
        <TableRow>
          <TableCell style={{ paddingBottom: 8, paddingTop: 8 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <CoinExtraDetails id={row.id} />
            </Collapse>
          </TableCell>
        </TableRow>
      ) : null}
    </React.Fragment>
  );
};

interface CryptoListCGProps {
  listData: Array<CGMarketList>;
}

export default function CryptoTable(listDataProps: CryptoListCGProps) {
  const { listData } = listDataProps;
  return listData ? (
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
          {listData.map((row, index) => (
            <CryptoTableRow key={row.id} row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : null;
}
