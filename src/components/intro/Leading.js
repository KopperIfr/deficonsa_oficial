"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationLEADING_H2, animationLTR, animationLTR_NO_DELAY, animationRTL, animationRTL_NO_DELAY } from "./animations";
import Logo2 from "../navigation/Logo2";
import { animateOpacity } from "@/config/animations";

export default function Leading() {
    return(
        <div className="pt-[7rem] tiny-460:pt-[10rem] nav-lg:pt-[14rem] 3xl:pt-[18rem] flex justify-around transition-all duration-300 relative z-50">

            <div className="flex flex-col items-center">
                <Logo2 className="h-[15rem] w-[15rem] tiny-460:hidden" />
                <motion.h1
                variants={animationLEADING_H2}
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
                className="text-black text-center text-[7vw] leading-[10vw] tiny-460:block tiny:text-[8vw] tiny:leading-[11vw]  sm:text-[3rem] nav-lg:text-[4rem] sm:leading-[4rem] nav-lg:leading-[4.7rem] font-medium sm:text-start transition-all duration-300 3xl:text-[5rem] 3xl:leading-[6rem] 4k:text-[6rem] 4k:leading-[7rem]">
                    <b
                    className="text-[#e2cb8b] font-medium sm:leading-[4.5rem] nav-lg:leading-[6rem]">
                        CONSTRUIMOS <br/>
                    </b>
                    <b className="text-white font-medium">LA CASA QUE <br/> SIEMPRE HAS <br/> SOÑADO</b>
                </motion.h1>
            </div>

            <div className="hidden w-[10rem] md:w-[15rem] md-2:w-[25rem] sm:block 3xl:w-[40rem] pt-[1.4rem] text-white/80 text-[.9rem] font-light transition-all duration-300">
                <motion.p
                variants={animateOpacity}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                className="pb-[1.2rem] 3xl:text-[1.6rem] 3xl:pb-[2rem]">
                    En Deficonsa estaremos siempre a plena disposición. Sientase libre de contactarnos
                </motion.p>
                <motion.div
                variants={animateOpacity}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                >
                    <Link href='/contacto'
                    className="py-[.5rem] px-[2rem] rounded-[1rem] bg-[#d5a72a] font-medium 3xl:px-[3rem] 3xl:py-[.75rem] 3xl:text-[1.2rem] 3xl:rounded-[2rem]"> 
                        Contactar
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}















// <div className="pt-[10rem] nav-lg:pt-[14rem] flex justify-around transition-all duration-300">
//             <motion.h1 
//             variants={animationLTR}
//             initial="initial"
//             whileInView="animate"
//             viewport={{once: true}}
//             custom={2} 
//             className="text-black text-center text-[2.5rem] sm:text-[3rem] nav-lg:text-[4rem] leading-[3.5rem] sm:leading-[4rem] nav-lg:leading-[4.7rem] font-medium sm:text-start transition-all duration-300">
//                 <motion.b
//                 className="text-[#e2cb8b] font-medium leading-[3.5rem] sm:leading-[4.5rem] nav-lg:leading-[6rem]">CONSTRUIMOS <br></br></motion.b>
//                 <b className="text-white font-medium">LA CASA QUE <br/> SIEMPRE HAS <br/> SOÑADO</b>
//             </motion.h1>
//             <div className="hidden w-[10rem] md:w-[15rem] md-2:w-[25rem] sm:block pt-[1.4rem] text-white/80 text-[.9rem] font-light transition-all duration-300">
//                 <motion.p
//                 variants={animationRTL}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{once: true}}
//                 custom={0} 
//                 className="pb-[1.2rem]">
//                     En Deficonsa estaremos siempre a plena disposición. Sientase libre de contactarnos
//                 </motion.p>
//                 <motion.div
//                 variants={animationRTL}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{once: true}}
//                 custom={2}
//                 >
//                     <Link href='/contacto'
//                     className="py-[.5rem] px-[2rem] rounded-[1rem] bg-[#d5a72a] font-medium"> 
//                         Contactar
//                     </Link>
//                 </motion.div>
//             </div>
//         </div>