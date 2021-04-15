//Holds state which is shared across pages, Controls routes

import React, { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import WebFont from "webfontloader";

//Api
import { getTopStories } from "./API";

//Pages
import { Custom } from "./components/pages/Custom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { Stories } from "./components/pages/Stories";
import { Edit } from "./components/pages/Edit";

//Utilities
import { getLocalStorage, createCard } from "./components/utilities";

//Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/UI/GlobalStyle.styles";
import { useTheme } from "./components/UI/useTheme";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleUp,
  faHeart,
  faAngleLeft,
  faAngleRight,
  faTimes,
  faPlus,
  faSearchPlus,
  faPencilAlt,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleDoubleUp,
  faHeart,
  faAngleLeft,
  faAngleRight,
  faTimes,
  faPlus,
  faSearchPlus,
  faPencilAlt,
  faMinus
);

export const App = () => {
  const [data, setData] = useState([]);
  const [savedStories, setSavedStories] = useState([]);
  const [tags, setTags] = useState([]);
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  //Fetch stories for main page and check local storage

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
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route
                path="/edit/:id"
                render={(props) => (
                  <Edit
                    props={props}
                    savedStories={savedStories}
                    setSavedStories={setSavedStories}
                    tags={tags}
                    setTags={setTags}
                  ></Edit>
                )}
              ></Route>
              <Route
                path="/custom"
                render={(props) => (
                  <Custom
                    props={props}
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
                    tags={tags}
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
                exact
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
        </ThemeProvider>
      )}
    </div>
  );
};
