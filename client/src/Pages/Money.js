import NavBar from "../Components/Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fondo: {
    backgroundImage:
      "url(https://www.itl.cat/pngfile/big/174-1748956_coin-currency-earnings-economy-finance-financial-business-currency.jpg)",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
    minHeight: "100%",
    position: "absolute",
    marginTop: "80px",
    zIndex: "-1",
  },
  title: {
    fontSize: "3rem",
    color: "white",
    paddingBottom: "5%",
    textShadow: "4px 10px 8px black",
  },
}));
function Money() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.fondo}>
        <div className={classes.title}>
          <b>Money</b>
        </div>
      </div>
    </div>
  );
}
export default Money;
