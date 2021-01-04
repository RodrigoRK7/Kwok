import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  
  fondo:{
    backgroundImage: "url(https://images.unsplash.com/photo-1444080748397-f442aa95c3e5)",
    backgroundSize: "cover",
    minWidth: "100%",
    minHeight: "100%",
    position: "fixed",
    justifyContent: "center",
    display: "flex",
    alignItems:"center",
  },
  inicio: {
   backgroundColor: "#FFFFFF",
   textAlign: "center",
   minWidth: "30%", 
   fontSize: "270%",
   paddingLeft: "5%",
   paddingRight: "5%",
   paddingBottom: "4%",
   borderRadius: "15px",
 },
  input:{
    width: "80%", 
    height: "30px", 
    borderRadius: "4px",
  },
 button:{
   width: "25%",
   height: "35px",
   borderRadius: "8px",
   cursor: "pointer",
   backgroundColor: "white",
   marginTop: 15,
   fontSize: "0.8rem",
   "&:link":{
    textDecoration: "none",
   },
   "&:hover":{
     color: "white",
     backgroundColor: "black",
     borderRadius: "8px"
   }
 }
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.fondo}>
      <div className={classes.inicio}>
        <h1>Kwok</h1>
        <div style={{ marginTop: "-1.8rem", paddingBottom: "0.8rem" }}>
          <input
            type="password"
            placeholder="Password"
            className={classes.input}
          />
        </div>
        <a href="/menu">
          <button className={classes.button} type="submit">
            <b>Enter</b>
          </button>
        </a>
      </div>
    </div>
  );
}
export default Home;