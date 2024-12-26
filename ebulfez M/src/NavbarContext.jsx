import React, { createContext, useState } from 'react';


export const NavbarContext = createContext();


export const NavbarProvider = ({ children }) => {
    const [navbarText, setNavbarText] = useState("");

    return (
        <NavbarContext.Provider value={{ navbarText, setNavbarText }}>
            {children}
        </NavbarContext.Provider>
    );
};
