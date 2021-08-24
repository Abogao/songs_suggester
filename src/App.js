import "./App.css";
import InfoLio from "./components/InfoLio";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import MyBand from "./components/MyBand";
import Pokemon from "./components/Pokemon";
function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul className="nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/my-band">My Band</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/pokemon">
              <Pokemon></Pokemon>
            </Route>
            <Route path="/my-band">
              <MyBand></MyBand>
            </Route>
            <Route path="/">
              <InfoLio></InfoLio>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
