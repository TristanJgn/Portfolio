import React from "react";
import { NavigationDots, SocialMedia } from "../../components";
import "./AppWrap.scss";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app-wrap-container ${classNames}`}>
        <SocialMedia />
        <div className="app-wrap-wrapper">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
