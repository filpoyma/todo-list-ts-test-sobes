import React from "react";
import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store/Interfaces";
import { switchTheme } from "../store/actions";

const Header: React.FC = () => {
  const isThemeLight: boolean = useSelector((state: IState) => state.isThemeLight);
  const dispatch = useDispatch();
  const switchThemeIcon = isThemeLight ? SwitchToDarkIcon : SwitchToLightIcon;
  return (
    <header>
      <h1>TODO</h1>
      <button
        className="btn switch-theme-btn"
        onClick={() => dispatch(switchTheme())}
      >
        <img src={switchThemeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default React.memo(Header);
