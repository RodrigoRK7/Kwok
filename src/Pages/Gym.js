import NavBar from "../Components/Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fondo: {
    backgroundImage:
      "url(https://pantalladeportiva.com/wp-content/uploads/2019/03/Gimnasio-mancuernas.jpg)",
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
    color: "white",
    fontSize: "3rem",
    paddingBottom: "5%",
    textShadow: "4px 10px 8px black",
  },
}));
function Gym() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.fondo}>
        <div className={classes.title}>
          <b>GYM</b>
        </div>
      </div>
    </div>
  );
}
export default Gym;
