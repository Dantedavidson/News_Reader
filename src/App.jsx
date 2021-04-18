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
import { Create } from "./components/Create&Edit/Create";
import { Home } from "./components/Home/Home";
import { NotFound } from "./components/Error/NotFound";
import { Read } from "./components/Read/Read";
import { Edit } from "./components/Create&Edit/Edit";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";

//Utilities
import { getLocalStorage, createCard } from "./components/Utility/utilities";

//Style
import "bootstrap/dist/css/bootstrap.min.css";

//import "./styles/style.scss";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/common/ui/GlobalStyle.styles";
import { useTheme } from "./components/Utility/useTheme";

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
            <Header></Header>
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
                path="/create"
                render={(props) => (
                  <Create
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
                path="/read"
                render={(props) => (
                  <Read
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
            <Footer></Footer>
          </Router>
        </ThemeProvider>
      )}
    </div>
  );
};
