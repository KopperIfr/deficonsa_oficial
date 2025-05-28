import Image from "next/image"
import House from "../elements/House"
export default function Shape({shape}) {
    return(
        //if case 1. house
        //if case 2. circle
        // if case 3. square
        <>
            {shape === 'house' && (
                <House className="relative w-[10rem] h-[10rem] sm:w-[13rem] sm:h-[13rem] bg-home-1104:w-[12.5rem] bg-home-1104:h-[12.5rem] 2xl:h-[19rem] 2xl:w-[19rem]" img='/imgs/services/reforma.jpg' />
            )}



            {shape === 'pool' && (
                <div className="relative w-[10rem] h-[10rem] rounded-br-[8rem] rounded-bl-[8rem] overflow-hidden mb-[2rem] sm:w-[13rem] sm:h-[13rem] md:w-[10rem] md:h-[10rem] bg-home-1104:w-[10rem] bg-home-1104:h-[10rem] 2xl:h-[16rem] 2xl:w-[16rem]">
                <Image 
                src='/imgs/services/piscina.jpg'
                alt="img"
                fill
                sizes="(max-width: 5px),(max-height: 5px)"
                className="object-cover object-center absolute w-full h-full"/>
                </div>
            )}

            {shape === 'square' && (
                <div className="relative w-[10rem] h-[10rem] overflow-hidden mb-[2rem] sm:w-[13rem] sm:h-[13rem] bg-home-1104:w-[10rem] bg-home-1104:h-[10rem] 2xl:h-[16rem] 2xl:w-[16rem]">
                <Image 
                src='/imgs/services/arquitectura.jpg'
                alt="img"
                fill
                sizes="(max-width: 5px),(max-height: 5px)"
                className="object-cover object-center absolute w-full h-full"/>
                </div>
            )}

        </>
    )
}