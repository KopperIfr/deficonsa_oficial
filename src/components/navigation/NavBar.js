"use client";
import NavBarItems from "./NavBarItems";
import { motion } from "framer-motion";
import { animationNAV } from "./animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HeaderPaddingWrapper from "../wrapper/HeaderPaddingWrapper";
import Logo2 from "./Logo2";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { LANGUAGES } from "@/config/data";

export default function NavBar() {
    const [langList, setActiveLangList] = useState(false);
    const dropdownRef = useRef(null);

    const onLangListClick = () => {
        setActiveLangList(!langList);
    };

    const langListVariants = {
        hidden: { scale: .8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.1 } },
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveLangList(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <motion.header
            variants={animationNAV}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hidden nav-lg:flex h-[5rem] tiny-460:h-[7rem] justify-center absolute top-0 left-0 w-full z-[60] tiny-460:border-[#e2cb8b45] tiny-460:border-b-[.1rem] nav-lg:h-[10rem] 3xl:h-[12rem]"
        >
            <HeaderPaddingWrapper>
                <div className="w-full h-full flex justify-center sm:justify-between items-center nav-lg:justify-evenly">
                    <Logo2 className="hidden tiny-460:block overflow-hidden h-[5rem] nav-lg:h-[10rem] 3xl:h-[13rem] 3xl:w-[13rem]" />
                    <nav className="hidden nav-lg:flex items-center gap-x-12 justify-between">
                        <div className="flex gap-8 text-[.9rem] text-white antialiased xl:mr-[3rem] 2xl:mr-[5rem] 3xl:text-[1.2rem]">
                            <NavBarItems />
                        </div>
                        <div
                            ref={dropdownRef}
                            className={cn(
                                "flex items-center 3xl:ml-[2rem] relative",
                                { "overflow-hidden": langList === false }
                            )}
                        >
                            <div
                                className="lg-list flex items-center z-20 cursor-pointer group"
                                onClick={onLangListClick}
                            >
                                <p className="text-white/85 text-[.9rem] antialiased mr-[1rem] group-hover:text-white">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </p>
                                <div className="p-[.4rem] px-[.8rem] rounded-[.3rem] border-white/85 border-[.01rem] text-white/85 group-hover:border-white group-hover:text-white">
                                    <p className="text-[.7rem] 3xl:text-[1rem]">ES</p>
                                </div>
                            </div>
                            <motion.ul
                                initial="hidden"
                                animate={langList ? "visible" : "hidden"}
                                variants={langListVariants}
                                whileTap={{scale:1.05}}
                                className="bg-[#1b1a18] text-[.83rem] absolute bottom-[-11.7rem] flex-col"
                            >
                                {LANGUAGES.map((item) => (
                                    <li
                                        key={item.prefix}
                                        className="text-white flex px-[1.4rem] py-[0.75rem] cursor-pointer hover:bg-[#141413]"
                                    >
                                        <p className="text-white/80">({item.prefix})</p>
                                        <p className="ml-[.5rem]">{item.language}</p>
                                    </li>
                                ))}
                            </motion.ul>
                        </div>
                    </nav>
                </div>
            </HeaderPaddingWrapper>
        </motion.header>
    );
}


