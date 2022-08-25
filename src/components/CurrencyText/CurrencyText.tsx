import React from "react";
import Typography from "@mui/material/Typography";

interface CurrencyTextProps {
  value: number;
  color?: string | "text.primary";
}

/**  This could be configurable with extra props for locales */
export default function CurrencyText(currencyTextProps: CurrencyTextProps) {
  return (
    <Typography color={currencyTextProps?.color}>
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(currencyTextProps?.value)}
    </Typography>
  );
}
