"use client";
import { NAVBAR_ITEMS } from "@/config/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons"; 
import HouseOutlineExtraLight from "../elements/HouseOutlineExtraLight";
import Circle from "../elements/Circle";
import { useActiveMenuContext } from "@/context/activeMenuContext";

export default function PhoneMenu() {

    const { activeMenu, setActiveMenu, scrollY } = useActiveMenuContext();

    const closeMenu = () => {
        setActiveMenu(false);
        document.body.classList.remove('h-[100vh]');
        document.body.classList.remove('overflow-hidden');
    }

    return(
        <div id="phone_menu" className={cn("hidden absolute top-0 left-0 w-full min-h-full bg-black/50 z-[200]", {"block" : activeMenu}, {"hidden" : activeMenu === false})}>
            <div id="phone_menu2" className={cn("absolute w-full h-[100vh] bg-[#141413] flex flex-col justify-center gap-y-6 z-[300] overflow-hidden")}>
                <Circle className="top-[20rem] right-[5rem]" />
                <Circle className="top-[0rem] right-[0rem]" />
                <HouseOutlineExtraLight className="opacity-20"/>
                <HouseOutlineExtraLight  className="opacity-20 top-[10rem] right-[4rem] rotate-12"/>
                <div onClick={closeMenu}>
                    <FontAwesomeIcon icon={faClose} className="text-[#e2cb8b] text-[3rem] absolute top-[2rem] right-[2.4rem] animate-spin-close" />
                </div>
            {NAVBAR_ITEMS.map((item, i) => (
                    <div className="text-white text-[1.4rem] flex justify-center" key={item.name}>
                        <Link
                        href={item.href}
                        className={cn("pb-[.1rem] hover:text-[#e2cb8b] relative z-50",{"border-b-[.1rem] border-[#e2cb8b] text-[#e2cb8b]" : item.active})}>
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
