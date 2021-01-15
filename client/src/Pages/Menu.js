import {makeStyles} from '@material-ui/core/styles'
import NavBar from '../Components/Navbar'
const useStyles = makeStyles(theme => ({
    fondo:{
        backgroundImage: "url(https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2017/05/wallpaper.jpg)",
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
    title:{
        color: "white",
        fontSize: "3rem",
        paddingBottom: "5%",
        textShadow: "4px 10px 8px black"
    }
}))
function Inicio (){
    const classes = useStyles()
    return(
        <div>
        <NavBar/>
        <div className = {classes.fondo}>
        <div className = {classes.title}><b>Welcome</b></div>
        </div>
        </div>
    )
}
export default Inicio;