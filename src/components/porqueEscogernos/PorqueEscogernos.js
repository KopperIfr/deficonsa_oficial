"use client";
import HouseOutlineExtraLight from "../elements/HouseOutlineExtraLight";
import PaddingWrapper from "../wrapper/PaddingWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { animateBTM_TOP, animateOpacity_0_5, animateOpacity_1 } from "@/config/animations";
import { WHY_US } from "@/config/data";
import { cn } from "@/lib/utils";

export default function PorqueEscogernos() {
    return(
        <div className="bg-white min-h-[100vh] w-full relative overflow-hidden pb-[5rem] sm:pb-[10rem]">
            <HouseOutlineExtraLight className="hidden sm:flex top-[-18rem] right-[-28rem] rotate-180 opacity-40 nav-lg:rotate-0 nav-lg:opacity-75 nav-lg:right-[-24rem] xl:right-[-20rem]" />
            {/* <HouseOutlineExtraLight className="hidden sm:flex top-[-20rem] right-[-20rem] rotate-0" /> */}
            <HouseOutlineExtraLight className="hidden sm:flex sm:top-[20rem] sm:left-[-40rem] opacity-40 rotate-45 nav-lg:opacity-75" />
            <div className="w-full mt-[4rem]">
                <PaddingWrapper>
                    <motion.p
                    variants={animateOpacity_1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    className="text-[#bb9c47] text-[1.6rem] text-center font-semibold mb-[3rem] tiny-460:text-[1.9rem] sm:mb-[5rem] nav-lg:mb-[1rem] nav-lg:text-[1.3rem] nav-lg:text-start 2xl:ml-[3rem]">PORQUÉ NOSOTROS
                    {/* className="text-[#bb9c47] text-[1.3rem] font-medium mb-[1rem] 2xl:ml-[3rem]">PORQUÉ NOSOTROS */}
                    </motion.p>
                    <motion.div 
                    variants={animateOpacity_1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    className="hidden nav-lg:block text-[2.2rem] font-semibold antialiased leading-[3rem] text-black/85 2xl:ml-[3rem] nav-lg:mb-[5rem]">
                    {/* className="text-[2.2rem] font-semibold antialiased leading-[3rem] text-black/85 2xl:ml-[3rem]"> */}
                        <p className="text-start ">SOMOS LOS MEJORES,</p>
                        <p className="text-center nav-lg:text-start">LAS MEJORES SOLUCIONES</p>
                        <p className="text-end nav-lg:text-start">Y LA MEJOR CALIDAD</p>
                    </motion.div>







                    <div className="w-full flex flex-col mt-[3.5rem] xl:items-center">


                        {WHY_US.map((elem, index) => (
                            <motion.div
                            key={index}
                            variants={animateOpacity_1}
                            initial="initial"
                            whileInView="animate"
                            viewport={{once: true}}
                            className={cn("w-full grid grid-cols-2 shadow-lg rounded-[.5rem] pb-[2rem] relative overflow-hidden sm:shadow-none sm:pb-0 sm:rounded-none xl:max-w-[80.125rem] 3xl:max-w-[95rem] 4k:max-w-[120rem]", {"mb-[6rem]" : index !== WHY_US.length - 1})}>
                                <div className="w-[20rem] h-[20rem] absolute top-[-5rem] right-[-5rem] tiny:w-[30rem] tiny:h-[30rem] tiny:top-[-10rem] tiny:right-[-10rem] sm:hidden ">
                                    <Image 
                                    src={elem.plano}
                                    alt="img"
                                    fill
                                    priority
                                    sizes="(max-width: 5px), (max-height: 5px)"
                                    className="object-cover tiny:object-contain opacity-30 saturate-0 rotate-45"/> 
                                </div>

                                <div className={cn("col-span-2 relative z-50 sm:col-span-1 px-[3rem] sm:px-0  nav-lg:h-[17rem] 3xl:h-[20rem] 4k:h-[23rem]",{'order-2 sm:pl-[2rem] 3xl:pl-[5rem]' : elem.img_side === 'left'}, {'sm:pr-[2rem]' : elem.img_side === 'right'}  )}>
                                    <p className="text-[#aaaaaa] font-semibold text-[4rem] sm:text-[2.5rem] nav-lg:text-[3.5rem] xl:text-[4.5rem] 3xl:text-[4.7rem] 4k:text-[5.5rem]">{elem.numb}</p>
                                    <p className="text-[#bb9c47] text-[1.4rem] font-semibold antialiased mb-[.4rem] tiny-460:text-[1.8rem] sm:text-[1.2rem] nav-lg:text-[1.5rem] nav-lg:font-medium 3xl:text-[2.5rem]">{elem.title}</p>
                                    <p className="leading-[2rem] max-w-[40rem] text-[1rem] tiny-460:text-[1.2rem] tiny-460:leading-[2.3rem] tiny-460:text-black/75 tiny-460:max-w-[35rem] sm:text-[1rem] sm:leading-[1.5rem] sm:max-w-[18.938rem] sm:max-h-[10.5rem] nav-lg:max-w-[23rem] nav-lg:leading-[1.8rem] xl:max-w-[30rem] 3xl:text-[1.3rem] 4k:text-[1.6rem] 4k:max-w-[40rem] 4k:leading-[2.5rem]">
                                    {elem.desc}
                                    </p>
                                </div>
                                <div className={cn("hidden relative sm:flex justify-center mr-[3rem] sm:h-full sm:w-full", {"order-1" : elem.img_side === 'left'})}>
                                    <Image 
                                    src={elem.img_src}
                                    alt="img"
                                    fill
                                    priority
                                    sizes="(max-width: 5px), (max-height: 5px)"
                                    className="object-cover"/>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </PaddingWrapper>
            </div>
        </div>
    )
}