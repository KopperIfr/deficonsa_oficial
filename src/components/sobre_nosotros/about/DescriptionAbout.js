import Image from "next/image"
import Link from "next/link"

export default function DescriptionABOUT() {
    return(
        <div className="w-full flex gap-x-24 mt-[10rem] px-[5rem]">
            <div className="w-[40rem] h-[30rem] relative">
                <Image 
                src='/imgs/about.png'
                alt="img"
                fill
                sizes="(max-width: 5px), (max-height: 5px)"
                className="object-cover"
                />
            </div>
            <div className="w-2/5 backdrop-blur-sm p-[1rem] pb-[2rem]">
                <h3 className="text-start font-medium text-[1.8rem] text-white/85 mb-[1rem]">
                    ACERCA DE  <b className="font-medium text-[#e0bc58]">NOSOTROS</b>
                </h3>
                <p className="font-normal text-white/80 leading-[2.4rem] text-[1.2rem]">
                En Deficonsa, nos enorgullece ofrecer servicios de construcción de alta calidad respaldados por años de experiencia y un equipo de profesionales dedicados. Desde nuestras humildes raíces hasta convertirnos en una empresa líder en la industria, hemos mantenido nuestro compromiso con la excelencia, la integridad y la satisfacción del cliente en cada proyecto que emprendemos.
                </p>
                <Link href='/contacto' 
                className="border-[.01rem] border-[#e2cb8b] px-[2rem] py-[.4rem] text-white rounded-[.3rem] mt-[2rem] relative top-[2rem]">
                    Contactar
                </Link>
            </div>
        </div>
    )
}