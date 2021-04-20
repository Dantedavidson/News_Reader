import { useEffect, useState } from "react";
import { setThemeLS, getThemeLS } from "../Utility/utilities";
import _ from "lodash";

export const useTheme = () => {
  const themes = getThemeLS("all-themes");
  const [theme, setTheme] = useState(themes.data.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setThemeLS("theme", mode);
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, "font"));
    return allFonts;
  };

  useEffect(() => {
    const localTheme = getThemeLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};
