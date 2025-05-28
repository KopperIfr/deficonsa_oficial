"use client";
import PaddingWrapper from "../wrapper/PaddingWrapper";
import Title from "./Title";
import Logros from "./Logros";
import { SERVICES } from "@/config/data";
import Service from "./Service";
import Circle from "../elements/Circle";

export default function ContLogros() {
    return(
        <div className="w-full flex flex-col mt-[4rem] sm:mt-[5rem] xl:mt-[7rem] ">
            <div className="w-full flex pb-[3rem] border-b-[.1rem] border-[#e2cb8b] xl:pb-0">
                <PaddingWrapper>
                    <div className="w-full flex flex-col px-[1rem] xl:flex-row xl:px-[0] xl:min-h-[7.5rem]">
                        <Title />
                        <Logros/>
                    </div>
                </PaddingWrapper>
            </div>


            <div className="flex flex-col w-full relative z-10 ">
                <h3 className="text-[1.6rem] font-medium text-[#e2cb8b] my-[1rem] mt-[4rem] text-center nav-lg:text-[2rem] xl:hidden">SERVICIOS</h3>
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-x-24 bg-home-1104:gap-x-6 3xl:min-h-[56rem] 4k:min-h-[60rem]">
                    {SERVICES.map((elem, i) => (
                        <Service key={elem.name} service={elem} index={i} />
                    ))}
                </div>
            </div>


        </div>
    );
}