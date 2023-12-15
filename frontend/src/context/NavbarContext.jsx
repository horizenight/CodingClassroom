import React, { useState, createContext } from "react";

export const navbarContext = createContext();

export const NavbarProvider = (props) => {
  const [navState, setNavState] = useState(true);
  return (
    <navbarContext.Provider value={[navState, setNavState]}>
      {props.children}
    </navbarContext.Provider>
  );
};
