import Image from "next/image"
export default function Intro() {
    return(
        <div className="h-[23rem] w-full relative overflow-hidden flex justify-center items-center">
            <Image
            src='/imgs/intro.jpg'
            alt="img intro"
            fill
            sizes="(max-width: 5px), (max-height: 5px)"
            className="absolute top-0 left-0 w-full h-full object-cover brightness-[.3]"
            />
            <h1 className="text-white text-[3rem] relative z-50 text-medium">
                <b className="text-[#e2cb8b] font-medium">SOBRE</b> NOSOTROS
            </h1>
        </div>
    )
}