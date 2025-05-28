"use client";
import { cn } from "@/lib/utils";
import PhoneMenu from "./PhoneMenu";
import { useState } from "react";
import { useActiveMenuContext } from "@/context/activeMenuContext";

export default function MenuIcon({className = ''}) {
    const { activeMenu, setActiveMenu, scrollY, setScrollY } = useActiveMenuContext();  
    function handleMenu() {
        document.body.classList.add('h-[100vh]');
        document.body.classList.add('overflow-hidden');
        const Menu = document.querySelector('#phone_menu2');
        setActiveMenu(true);
        setScrollY(window.scrollY / 16);
        Menu.style.top = window.scrollY / 16 + 'rem';
    }
    
    return(
        <div className="ml-auto relative z-[1000] cursor-pointer" onClick={handleMenu}>
            <svg className={cn("w-[4rem] h-[4rem]", {[className] : className !== ''})} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#e2cb8b"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.288"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7H20M4 12H20M4 17H20" stroke="#e2cb8b" strokeWidth="0.576" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
    );
}