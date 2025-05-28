import { LANGUAGES } from "@/config/data"
import { motion, animate, useAnimate } from "framer-motion";

export default function LangList(langList) {
    const [scope, animate] = useAnimate();
    console.log(scope);
    return(
        <ul
        ref={scope}
        className="bg-[#1b1a18] text-[.83rem] absolute bottom-[-11.7rem] flex-col">
            {
                LANGUAGES.map((item, i) => (
                    <li key={item.prefix} className="text-white flex px-[1.4rem] py-[0.75rem] cursor-pointer hover:bg-[#141413]">
                        <p className="text-white/80">
                            ({item.prefix})
                        </p>
                        <p className="ml-[.5rem]">
                            {item.language}
                        </p>
                    </li>
                ))
            }
        </ul>
    )
}