import "./App.css";
import InfoLio from "./components/InfoLio";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import MyBand from "./components/MyBand";
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
                  <Link to="/MyBand">My Band</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/MyBand">
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
