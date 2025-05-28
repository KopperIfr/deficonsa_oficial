"use client";
import { PROYECTS } from "@/config/data"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import HouseOutlineExtraLight from "../elements/HouseOutlineExtraLight";
import Circle from "../elements/Circle";


export default function Projects() {
    const [hoverProject, setHoverProject] = useState(null)
    const hoverOnProject = (e) => {
        console.log('hey');
        console.log(e.target);
        setHoverProject(e.target);
    }
    return(
        <div 
        id="project" 
        className="flex-col w-full p-[2rem] bg-[#141413] relative overflow-hidden">
            {/* <HouseOutlineExtraLight className="top-[-20rem] right-[70rem] rotate-[180deg] blur-[2px]" /> */}
            <HouseOutlineExtraLight className="top-[20rem] left-[72rem] rotate-[20deg] blur-[2px]" />
            <Circle className="w-[60rem] h-[60rem] top-[105rem] 2xl:top-[0rem] left-[40rem] sm:top-[110rem] md:top-[85rem] bg-home-1104:top-[60rem] xl:top-[45rem]" />
            <h1 
            className="text-white text-center text-[2.3rem] font-thin py-[3rem] relative z-10">
                Peñas <b className="text-[#e2cb8b] font-extralight">Albas I</b>
            </h1>
            <div className="w-full grid grid-cols-2 gap-[1rem] overflow-hidden">
                <div className="h-[80vh] relative flex justify-center items-center">
                    {/**
                     * -- Plan Image -- 
                     */}
                    <div 
                    className="h-[80%] w-[80%] absolute z-10 overflow-hidden">
                        <Image
                        src='/imgs/plano1.png'
                        alt="img"
                        fill
                        sizes="(max-width: 5px), (max-height: 5px)"
                        className="object-cover relative top-0 left-0 opacity-60 scale-105"/>
                    </div>
                </div>

                <div className="h-[80vh] text-[#ffeec0] font-thin italic">
                    <h2 className="text-[1.4rem] relative z-10">Proyecto de Peñas Albas</h2>
                    <p className="text-[#fffbefba] font-light leading-[2rem] max-w-[70%] mt-[1rem] tracking-wide mb-[1rem] relative z-10">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                    </p>
                    <div className="relative w-full h-[20rem]">
                        <div 
                        className="h-[100%] w-[40%] absolute top-3 left-[0rem] z-20 shadow-lg rounded-[.3rem] opacity-65">
                            <Image
                            src='/imgs/proyects/2.jpg'
                            alt="img"
                            fill
                            sizes="(max-width: 5px), (max-height: 5px)"
                            className="object-cover absolute top-0 left-0"/>
                        </div>
                        <div 
                        className="h-[100%] w-[40%] absolute top-[5rem] left-[14rem] z-20 shadow-lg rounded-[.3rem]">
                            <Image
                            src='/imgs/proyects/1.jpg'
                            alt="img"
                            fill
                            sizes="(max-width: 5px), (max-height: 5px)"
                            className="object-cover absolute top-0 left-0"/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}