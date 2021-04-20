import React, { useEffect, useRef } from "react";
import { useTheme } from "../Utility/useTheme";

//Utility
import { getThemeLS } from "../Utility/utilities";

//Fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export const ThemeButtonComponent = (props) => {
  const { setMode } = useTheme();

  const allThemes = getThemeLS("all-themes");

  const themeSwitcher = (mode) => {
    if (mode.name === "Main") {
      console.log(mode.name);
      setMode(allThemes.data.dark);
      props.setter(allThemes.data.dark);
    } else {
      setMode(allThemes.data.main);
      props.setter(allThemes.data.main);
    }
    // selectedTheme.name === 'Main'?(setMode('Dark');
    // props.setter(allThemes);):(
    //     setMode()
    // )
  };
  return (
    <FontAwesomeIcon
      icon={faLightbulb}
      onClick={() => {
        themeSwitcher(props.mode);
      }}
    ></FontAwesomeIcon>
  );
};
