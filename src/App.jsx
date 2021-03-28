import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
//Api
import { getTopStories } from "./API";

//Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";

import { faAngleDoubleUp, faHeart } from "@fortawesome/free-solid-svg-icons";

//Pages
import { Custom } from "./components/pages/Custom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { Stories } from "./components/pages/Stories";

library.add(faAngleDoubleUp, faHeart);

export const App = () => {
  const [savedStories, setSavedStories] = useState([]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/custom" render={(props) => <Custom />}></Route>
          <Route path="/404" render={(props) => <NotFound />}></Route>
          <Route path="/stories" render={(props) => <Stories />}></Route>
          <Route
            path="/more-info"
            component={() => {
              window.location.href = "https://github.com/Dantedavidson";
              return null;
            }}
          />
          <Route
            path="/ft"
            component={() => {
              window.location.href = "https://www.ft.com/";
              return null;
            }}
          ></Route>
          <Route
            path="/guardian"
            component={() => {
              window.location.href = "https://www.theguardian.com/uk";
              return null;
            }}
          ></Route>
          <Route
            path="/nyt"
            component={() => {
              window.location.href = "https://www.nytimes.com/";
              return null;
            }}
          ></Route>
          <Route
            path="/"
            render={(props) => (
              <Home
                savedStories={savedStories}
                setSavedStories={setSavedStories}
              />
            )}
          ></Route>

          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
};
