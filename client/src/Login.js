import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  fondo: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1444080748397-f442aa95c3e5)",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
    minHeight: "100%",
    position: "fixed",
    zIndex: "-1",
  },
  register: {
    fontSize: "35%",
    paddingTop: "4%",
  },
  input: {
    width: "80%",
    height: "30px",
    borderRadius: "4px",
    outline: "none",
  },
  link: {
    color: "black",
  },
  button: {
    color: "white",
    width: "25%",
    height: "35px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "black",
    fontSize: "0.8rem",
    "&:link": {
      textDecoration: "none",
    },
    "&:hover": {
      color: "white",
      backgroundColor: "#191919",
      borderRadius: "8px",
    },
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.fondo}>
      <div className="inicio">
        <h1>Kwok</h1>
        <div style={{ marginTop: "-1.5rem" }}>
          <input
            type="name"
            placeholder="Enter your username or email"
            className={classes.input}
          />
          <input
            type="password"
            placeholder="Enter you password"
            className={classes.input}
          />
        </div>
        <a href="/menu">
          <button className={classes.button} type="submit">
            <b>Log In</b>
          </button>
        </a>
        <div className={classes.register}>
          Don't have an account?{" "}
          <a className={classes.link} href="/register">
            Register now
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
export default Home;
