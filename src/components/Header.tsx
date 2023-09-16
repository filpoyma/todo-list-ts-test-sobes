import React from "react";
import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";
import { ITheme } from "./Interfaces";

const Header = ({ themeLight, setThemeLight }: ITheme) => {
  const switchThemeIcon = themeLight ? SwitchToDarkIcon : SwitchToLightIcon;

  const changeTheme = () => {
    if (setThemeLight) {
      setThemeLight(!themeLight);
    }
  };

  return (
    <header>
      <h1>TODO</h1>
      <button className="btn switch-theme-btn" onClick={changeTheme}>
        <img src={switchThemeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default React.memo(Header);
