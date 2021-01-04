import "./Navbar.css";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import {createMuiTheme} from "@material-ui/core/styles"
import { ThemeProvider } from '@material-ui/styles';

const icon = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

function NavBar() {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="navbar">
      <div className="nav_left">
        <a className="kwok" href="/menu">
          <b>Kwok</b>
        </a>
      </div>
      <div className="nav_right">
        <div className={show ? "menu_appear" : ""}>
          <a
            className={show ? "menu_item" : "menu_item_dis"}
            href={"/nutrition"}
            onClick={close}
          >
            <b>Nutrition</b>
          </a>
          <a
            className={show ? "menu_item" : "menu_item_dis"}
            href={"/money"}
            onClick={close}
          >
            <b>Money</b>
          </a>
          <a
            className={show ? "menu_item" : "menu_item_dis"}
            href={"/tec"}
            onClick={close}
          >
            <b>TEC</b>
          </a>
          <a
            className={show ? "menu_item" : "menu_item_dis"}
            href={"/gym"}
            onClick={close}
          >
            <b>Gym</b>
          </a>
          <a
            className={show ? "exit" : "menu_exit_dis"}
            href={"/"}
            onClick={close}
          >
            <b>Exit</b>
          </a>
        </div>
        <ThemeProvider theme={icon}>
          <button className="button" onClick={handleClick}>
            {show ? (
              <CloseIcon color="primary" />
            ) : (
              <MenuIcon color="primary" />
            )}
          </button>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default NavBar;
