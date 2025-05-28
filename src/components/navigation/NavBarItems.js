import { NAVBAR_ITEMS } from "@/config/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveMenuContext } from "@/context/activeMenuContext";
import { motion } from "framer-motion"; 

export default function NavBarItems() {

    const { activeSection, setActiveSection } = useActiveMenuContext();
    return (
        <>
            {
                NAVBAR_ITEMS.map((item, i) => (
                    <div className="flex items-center gap-3 3xl:gap-7 4k:gap-10" key={item.name}>
                        <Link
                        onClick={() => setActiveSection(item.name)}
                        href={item.href}
                        className={cn("pb-[.1rem] hover:text-[#e2cb8b] relative",{"text-[#e2cb8b]" : item.name === activeSection})}>
                            {item.name}
                            {
                                item.name === activeSection ? 
                                <motion.span
                                layoutId="activeSection"
                                className="h-[.05rem] absolute w-full bottom-0 left-0 bg-[#e2cb8b]"></motion.span> : null
                            }
                        </Link>
                    </div>
                ))
            }
        </>
    );
}