import Image from "next/image"

export default function Plano({plano}) {
    return(
        <div className="absolute w-full h-full top-[-20%] left-[8rem]">
            <Image 
            src={plano}
            alt="null"
            fill
            sizes="(max-width: 5px), (max-height: 5px)"
            className="w-full h-full object-contain opacity-50 saturate-0 rotate-45"/>
        </div>
    )
}