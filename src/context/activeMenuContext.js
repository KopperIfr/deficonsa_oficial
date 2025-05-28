"use client";
import { useContext,  createContext, useState, useEffect } from "react";
import { NAVBAR_ITEMS } from "@/config/data";

export const ActiveMenuContext = createContext(null);

export default function ActiveMenuContextProvider({children}) {
    // let section = 'HOME';
    // NAVBAR_ITEMS.map((elem, i) => {
    //     if(typeof window !== 'undefined' && window.location.pathname === elem.href) section = elem.name;
    // });
    const [activeMenu, setActiveMenu] = useState(false);
    const [scrollY, setScrollY] = useState(false);
    const [activeSection, setActiveSection] = useState('HOME');
    console.log(activeSection);

    return(
        <ActiveMenuContext.Provider value={{activeMenu, setActiveMenu, scrollY, setScrollY, activeSection, setActiveSection}}>
            {children}
        </ActiveMenuContext.Provider>
    )
}

export function useActiveMenuContext() {
    const context = useContext(ActiveMenuContext);

    if(context === null) {
        throw new Error('Active Menu Context must be used within its brackets');
    }

    return context;
}