import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { setThemeLS } from "./components/utilities";
import * as themes from "./components/UI/themeSchema.json";

const Index = () => {
  setThemeLS("all-themes", themes.default);
  return <App />;
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
