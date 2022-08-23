import DataNTT from "../../assets/ntt_data_dark.png";
import Box from "@mui/material/Box";

/**  Simple Logo component - would ideally be a SVG */
export default function Logo() {
  return (
    <Box sx={{ m: "2" }}>
      <img src={DataNTT} alt="Data NTT" style={{ height: "60px" }} />
    </Box>
  );
}
