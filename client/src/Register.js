import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import { useState } from "react";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  fondo: {
    backgroundImage: "url(https://images8.alphacoders.com/408/408282.jpg)",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
    minHeight: "100%",
    position: "fixed",
    zIndex: "-1",
  },
  input: {
    width: "80%",
    height: "30px",
    borderRadius: "4px",
    outline: "none",
  },
  button: {
    color: "white",
    width: "25%",
    height: "35px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "black",
    marginTop: 15,
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
function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      name: name,
      username: username,
      password: password,
      email: email,
    }).then(() => {
      console.log("User created successfully");
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.fondo}>
      <div className="inicio">
        <h1>Kwok</h1>
        <div style={{ marginTop: "-1.8rem" }}>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Enter your name"
            className={classes.input}
            autoComplete="null"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter an username"
            className={classes.input}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter an e-mail"
            className={classes.input}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter a password"
            className={classes.input}
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm your password"
            className={classes.input}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <a href="/login">
          <button onClick={register} className={classes.button} type="submit">
            <b>Sign in</b>
          </button>
        </a>
      </div>
    </div>
  );
}
export default Register;
