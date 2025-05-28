import { PROYECTS } from "@/config/data"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Information() {
    return(
        <div className="w-full px-[5rem]">
            <div className="mt-[2rem] w-full h-auto relative">
                <div className="absolute top-0 left-0 z-[60]">
                    <h2 className="text-[1.5rem] text-[#bb9c47] font-semibold">TRABAJO INTELIGENTE</h2>
                    <div className="text-[2.5rem] font-semibold text-white">
                        <p>SOMOS PROFESIONALES,</p>
                        <p>DEDICADOS A TU OBJETIVO</p>
                        <p>BUSCANDO LA EXCELENCIA</p>
                    </div>
                </div>
                <div className="flex w-full gap-x-8 pl-[20rem] pt-[6.5rem]">
                    {
                        PROYECTS.map((elem, i) => (
                            i < 2 ? 
                            <div className={cn("w-[21rem] h-[26rem] relative overflow-hidden", {'mt-[7rem]' : i === 1})} key={i}>
                                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20"></div>
                                <Image 
                                src={elem.img}
                                alt="img"
                                fill
                                priority={true}
                                sizes="(max-width: 5px), (max-height: 5px)"
                                className="max-w-[25rem] object-cover w-full h-full"
                                />
                            </div>
                        : null
                        ))
                    }
                    <Link href='/proyectos' className="flex items-center h-full self-end px-[2rem] py-[.4rem] ml-[1rem] bg-[#e0bc58] text-white rounded-[.3rem] relative pr-[3rem]">
                        Ver proyectos
                        <svg className="w-[2rem] h-[2rem] absolute right-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5" stroke="#ffffff" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}