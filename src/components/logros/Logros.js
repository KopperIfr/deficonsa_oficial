import Logro from "./Logro"
import { LOGROS } from "@/config/data"


export default function Logros() {
    return(
        <div className="w-full flex justify-center flex-wrap gap-9 mt-[1.7rem] tiny:grid tiny:grid-cols-2 tiny:gap-x-32 tiny:gap-y-12 sm:grid-cols-4 sm:gap-9 xl:mt-0 xl:pl-[1rem] 2xl:min-h-[9rem] 2xl:items-center 2xl:gap-6">
            {LOGROS.map((elem, i) => (
                <Logro key={elem.name} logro={elem.name} number={elem.number}  index={i}/>
            ))}
        </div>
    )
}




{/* <div className="w-2/3 h-full flex justify-between pl-[3rem]">
            {LOGROS.map((elem, i) => (
                <Logro key={elem.name} logro={elem.name} number={elem.number}  index={i}/>
            ))}
    </div> */}