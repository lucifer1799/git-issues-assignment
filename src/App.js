import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./componets/Details";
import Links from "./componets/Links";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [click, setclick] = useState({});
  const [gitdata, setgitdata] = useState([]);
  const fetching = () => {
    fetch(
      "https://api.github.com/repos/facebookincubator/create-react-app/issues"
    )
      .then((response) => response.json())
      .then((data) => setgitdata(data));
  };
  useEffect(() => {
    fetching();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/details" exact>
            <nav class="navbar navbar-success bg-success">
              <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Github Issues</span>
              </div>
            </nav>
            <Details item={click} />
          </Route>
          <Route path="/" exact>
            <nav class="navbar navbar-success bg-success">
              <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Github Issues</span>
              </div>
            </nav>
            <div className="container mt-2 mb-5">
              <Links setclick={setclick} gitdata={gitdata} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
