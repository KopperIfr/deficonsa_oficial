"use client";
import { motion } from "framer-motion";
import { animationNAV } from "./animations";
import HeaderPaddingWrapper from "../wrapper/HeaderPaddingWrapper";
import MenuIcon from "./MenuIcon";
import Logo2 from "./Logo2";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Circle from "../elements/Circle";

export default function PhoneNavBar() {

    const [fixedNav, setFixedNav] = useState(null);
    const handleScroll = (e) => {
        const oneREMtoPIXEL = 16;
        const scrollYinREM = window.scrollY / oneREMtoPIXEL;
        if(scrollYinREM > 30) {
            console.log('true');
            setFixedNav(true);
        }
        if(scrollYinREM < 30) {
            console.log('false');
            setFixedNav(null);
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    return (
        <header className={cn("h-[5rem] tiny-460:h-[7rem] justify-center flex nav-lg:hidden absolute top-0 left-0 w-full z-[100] border-[#e2cb8b45] tiny-460:border-b-[.1rem]", {'bg-[#141413] fixed animate-nav-down overflow-hidden' : fixedNav})}>
            <Circle className={cn("hidden", {"block" : fixedNav})} />
            <HeaderPaddingWrapper>
                <motion.nav
                    variants={animationNAV}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once:true}}
                    className="flex nav-lg:hidden justify-end items-center h-full relative z-[100]">
                        <Logo2 className="hidden tiny-460:block overflow-hidden h-[5rem]"/>
                        <MenuIcon />
                    </motion.nav>
            </HeaderPaddingWrapper>
        </header>
    );
}