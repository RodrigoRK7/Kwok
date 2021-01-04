import NavBar from "../Components/Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fondo: {
    backgroundImage:
      "url(https://pantalladeportiva.com/wp-content/uploads/2019/03/Gimnasio-mancuernas.jpg)",
    display: "flex",
    minWidth: "100%",
    minHeight: "100%",
    backgroundSize: "cover",
    alignItems: "center",
    justifyContent: "center",
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
        
      </div><h1>If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.</h1>
    </div>
  );
}
export default Gym;
