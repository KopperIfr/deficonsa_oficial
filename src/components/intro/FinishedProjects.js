"use client";
import { PROYECTS } from "@/config/data"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { animationBTT, animationPROJECTS } from "./animations";
import ServiceProject from "./projects/ServiceProject";
import Title from "./projects/Title";
import Description from "./projects/Description";
import Button from "./projects/Button";
import Plano from "./projects/Plano";
import { animateOpacity_WITH_DELAY } from "@/config/animations";

export default function FinishedProyects() {
    return(
        <>
        <h2 className="mt-[5rem] mb-3 text-[#e2cb8bc1] tiny-460:text-[1.1rem] tiny-460:text-[#e2cb8bee] font-mono italic nav-lg:hidden">NUESTROS PROYECTOS</h2>
        <div className="relative w-full grid grid-cols-2 gap-3 justify-center sm:gap-9 nav-lg:mt-[7rem] nav-lg:grid-cols-3 nav-lg:max-h-[36.4rem] nav-lg:overflow-hidden nav-lg:gap-6 lg-2:gap-9 xl:grid-cols-4 3xl:h-auto 3xl:max-h-full 3xl:mt-[11rem] 4k:mt-[15rem]">
            {
                PROYECTS.map((elem, i) => (

                    /*  This is the div that represents the project itself  */
                    <motion.div
                    variants={animateOpacity_WITH_DELAY}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    custom={i} 
                    key={i} className="h-[10rem] w-full sm:h-[12rem] md:h-[15rem] bg-white/20 relative nav-lg:h-[36rem] 3xl:h-[42rem] 4k:h-[55rem]">

                        <Link href='#' 
                        className=" bg-black/70 flex justify-center items-center text-white absolute bottom-0 left-0 w-full h-[2rem] z-10 text-[.8rem] md-2:h-[3rem] md-2:text-[.93rem] nav-lg:hidden">
                            {elem.name}
                        </Link>
                        <div className="relative w-full h-full nav-lg:h-1/3">
                            <Image 
                            src={elem.img}
                            alt="null"
                            fill
                            sizes="(max-width: 5px), (max-height: 5px)"
                            className="w-full h-full object-cover"/>
                        </div>

                        {/* DIV that contains all the info related to the project */}
                        <div className="hidden flex-col h-2/3 nav-lg:flex">
                            <div className="relative overflow-hidden w-full bg-white px-[1.5rem] py-[1rem] 3xl:h-full">
                                <Plano plano={elem.plano} />
                                <ServiceProject service={elem.process} />
                                <Title title={elem.name} />
                                <Description description={elem.description} />
                            </div>
                            <Button />
                        </div>

                    </motion.div>
                    
                ))
            }
        </div>
        </>
    )
}















{/* <div className="w-full mt-[5rem] nav-lg:mt-[10rem] flex justify-around nav-lg:justify-center projects-xl:justify-between gap-24 projects-xl:gap-12 pb-[2rem] flex-wrap">
{
    PROYECTS.map((elem, i) => (
        
    ))
}
</div> */}



// <motion.div
// variants={animationPROJECTS}
// initial="initial"
// whileInView="animate"
// viewport={{once: true}}
// custom={i}
// key={elem.name}
// className=" w-[23rem] bg-white/15 md-3:bg-transparent flex md-3:block md-3:w-[25rem] nav-lg:w-[27rem] projects-xl:w-[22rem] 2xl:w-[20rem] overflow-hidden  relative z-20">
//     <div className="bg-white w-full pb-[3rem] max-h-[13rem] md-3:min-h-[33.998rem] md-3:max-h-[33.998rem]">
//         <div className="absolute h-2/3 w-full top-[20%] left-[8rem]">
//             <Image 
//             src={elem.plano}
//             alt="null"
//             fill
//             sizes="(max-width: 5px), (max-height: 5px)"
//             className="w-full h-full object-contain opacity-50 saturate-0 rotate-45"/>
//         </div>
//         <div className="h-[13rem] w-full relative">
//             <Image 
//             src={elem.img}
//             alt="null"
//             fill
//             sizes="(max-width: 5px), (max-height: 5px)"
//             className="w-full h-full top-0 left-0 object-cover"/>
//         </div>
//         <div className="w-full px-[1.5rem] pt-[1rem] font-medium z-20">
//             {
//                 elem.process ? (
//                     <p className="text-[#edb439]">
//                         Reforma
//                     </p>
//                 ) : (
//                     <p className="text-[#96125b]">
//                         Construccion
//                     </p>
//                 )
//             }
//         </div>
//         <div className="w-full px-[1.5rem] pt-[1rem]">
//             <h3 className="text-[3rem] max-w-[15rem] font-normal leading-[3.1rem] text-black/75 relative z-20">
//                 {elem.name}
//             </h3>
//         </div>
//         <div className="w-full p-[1rem] px-[1.5rem]">
//             <p className="text-[1.05rem] text-start font-light text-black/75 relative z-20">
//                 {elem.description}
//             </p>
//         </div>
//     </div>
//     <div className="relative z-10 w-full h-[5rem] p-[1rem] border-[.01rem] bg-[#2d2b28] flex justify-center items-center text-white cursor-pointer">
//         <Link
//         href="#"
//         className="text-[.6rem] flex gap-4 items-center font-semibold">
//             <svg className="w-[1rem] h-[1rem]" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M416,473.6c0-21.207,17.193-38.4,38.4-38.4H96c-21.207,0-38.4,17.193-38.4,38.4S74.793,512,96,512h358.4 C433.193,512,416,494.807,416,473.6z"></path> </g> </g> <g> <g> <rect x="179.2" y="121.6" width="153.6" height="64"></rect> </g> </g> <g> <g> <path d="M96,0C74.793,0,57.6,17.193,57.6,38.4v368.732C68.906,400.575,82.016,396.8,96,396.8h358.4V0H96z M371.2,224H140.8V83.2 h230.4V224z"></path> </g> </g> </g></svg>
//             VER PROYECTO
//         </Link>
//     </div>
// </motion.div>