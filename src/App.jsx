import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { Custom } from "./components/pages/Custom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { Stories } from "./components/pages/Stories";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/custom" render={(props) => <Custom />}></Route>
            <Route path="/404" render={(props) => <NotFound />}></Route>
            <Route path="/stories" render={(props) => <Stories />}></Route>
            <Route path="/" render={(props) => <Home />}></Route>
            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
