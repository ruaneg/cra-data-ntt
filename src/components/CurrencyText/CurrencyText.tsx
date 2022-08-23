import Typography from "@mui/material/Typography";
import React from "react";

interface CurrencyText {
  value: number;
  color?: string | "text.primary";
}

/**  This could be configurable with extra props for locales */
export default function CurrencyText(currencyTextProps: CurrencyText) {
  return (
    <Typography color={currencyTextProps?.color}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(currencyTextProps?.value)}
    </Typography>
  );
}
