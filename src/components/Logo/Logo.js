import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import DataNTT from "../../assets/data-ntt.png";
import { Component } from "react";
import { COLORS, hexToRgb } from "../../styles/styles";

const logoStyles = (theme) => ({
  container: {
    position: "relative",
    padding: "1rem 1rem 1rem 0.5rem",
    margin: "0 1rem",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor:
        "rgba(" + hexToRgb(COLORS.DARK) + ", 0.3)",
    },
  },
  logo: {
    width: "11rem",
  },
});

class Logo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.container}>
        <img src={DataNTT} className={classes.logo} alt="Data NTT" />
      </Box>
    );
  }
}

export default withStyles(logoStyles, { withTheme: true })(Logo);
