import React from "react";

const Darkmode2 = () => {
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (window.localStorage) {
    theme = window.localStorage.getItem("theme");
  }
  if (theme === darkTheme || theme === lightTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }


  return (
    <>
    </>
  );
};

export default Darkmode2;
