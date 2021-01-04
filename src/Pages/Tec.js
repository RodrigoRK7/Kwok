import NavBar from "../Components/Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fondo: {
    backgroundImage:
      "url(https://tec.mx/sites/default/files/styles/header_full/public/2019-04/EstadioBorregos-Tec-de-Monterrey.jpg?itok=HQUIbkeh)",
    backgroundSize: "100% 100%",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "3rem",
    color: "white",
    paddingBottom: "5%",
    textShadow: "4px 10px 8px black",
  },
}));
function Tec() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.fondo}>
        <div className={classes.title}>
          <b>TEC</b>
        </div>
      </div>
    </div>
  );
}
export default Tec;
