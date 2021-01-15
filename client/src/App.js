import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Menu from "./Pages/Menu";
import Nutrition from "./Pages/Nutrition";
import Money from "./Pages/Money";
import Tec from "./Pages/Tec";
import Gym from "./Pages/Gym";
import Error from "./Pages/Error";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/nutrition" component={Nutrition} />
        <Route exact path="/money" component={Money} />
        <Route exact path="/tec" component={Tec} />
        <Route exact path="/gym" component={Gym} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
