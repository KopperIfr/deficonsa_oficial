import { cn } from "@/lib/utils"
import Image from "next/image"

export default function House({className = '', img}) {
    return(
        <div className={cn("overflow-hidden absolute h-[10rem] w-[10rem] top-0 right-0", 
        {[className] : className !== ''} )}
        style={{clipPath: "polygon(50% 0%, 78% 11%, 78% 36%, 100% 44%, 100% 92%, 50% 92%, 0 92%, 0 62%, 20% 55%, 20% 10%)"}}>
            <Image 
            src={img}
            alt="img"
            fill
            sizes="(max-width: 5px),(max-height: 5px)"
            className="object-cover object-center absolute w-full h-full"/>
        </div>
    )
}