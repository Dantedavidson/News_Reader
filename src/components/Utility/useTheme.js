import { useEffect, useState } from "react";
import { setThemeLS, getThemeLS } from "../Utility/utilities";

export const useTheme = () => {
  const themes = getThemeLS("all-themes");
  const [theme, setTheme] = useState(themes.data.main);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setThemeLS("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getThemeLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.data.main);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
