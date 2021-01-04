import NavBar from "../Components/Navbar"
import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles(theme =>({
    fondo:{
        backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/WBC_7095.jpg?format=2500w)",
        backgroundSize: "cover",
        minWidth: "100%",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        color: "white",
        fontSize: "3rem",
        paddingBottom: "5%",
        textShadow: "4px 13px 8px black"
    }
}))
function Nutrition (){
    const classes = useStyles()
    return(
        <div>
            <NavBar/>
            <div className = {classes.fondo}>
            <div className = {classes.title}>
            <b>Nutrition</b>
            </div>
            </div>
        </div>
    )
}
export default Nutrition