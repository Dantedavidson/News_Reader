import React, { useState, useEffect } from "react";
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

//<i class="fas fa-angle-left"></i>
//Pages
import { Custom } from "./components/pages/Custom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { Stories } from "./components/pages/Stories";

//Utilities
import { getLocalStorage, createCard } from "./components/utilities";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleUp,
  faHeart,
  faAngleLeft,
  faAngleRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDoubleUp, faHeart, faAngleLeft, faAngleRight, faTimes);

export const App = () => {
  const [data, setData] = useState([]);
  const [savedStories, setSavedStories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getLocalStorage(setSavedStories, "Stories");
    getLocalStorage(setTags, "Tags");

    async function getData() {
      const data = await getTopStories();
      const cards = createCard(data, savedStories);
      setData([...cards]);
    }

    getData();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/custom"
            render={(props) => (
              <Custom
                tags={tags}
                setTags={setTags}
                savedStories={savedStories}
                setSavedStories={setSavedStories}
              />
            )}
          ></Route>
          <Route path="/404" render={(props) => <NotFound />}></Route>
          <Route
            path="/stories"
            render={(props) => (
              <Stories
                savedStories={savedStories}
                setSavedStories={setSavedStories}
              />
            )}
          ></Route>
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
                data={data}
                setData={setData}
              />
            )}
          ></Route>

          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
};
