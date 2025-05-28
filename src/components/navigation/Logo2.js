import Image from "next/image"
import { cn } from "@/lib/utils"
export default function Logo2({className = ''}) {
    return(
        <div className={cn("w-[10rem] h-[10rem] relative z-50", {[className] : className !== ''})}>
            <Image
            src='/logos/logo2.png'
            alt="img"
            fill
            priority={true}
            sizes="(max-width: 5px),(max-height: 5px)"
            className="object-contain w-full h-full"
            />
        </div>
    )
}