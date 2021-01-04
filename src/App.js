import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./Home"
import Menu from './Pages/Menu'
import Nutrition from "./Pages/Nutrition"
import Money from "./Pages/Money"
import Tec from "./Pages/Tec"
import Gym from "./Pages/Gym"
function App() {
  return (
    <Router>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/menu" component = {Menu}/>
      <Route exact path = "/nutrition" component = {Nutrition}/>
      <Route exact path = "/money" component = {Money}/>
      <Route exact path = "/tec" component = {Tec}/>
      <Route exact path = "/gym" component = {Gym}/>
    </Router>
  );
}

export default App;
