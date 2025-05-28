import { animateOpacity_1} from "@/config/animations"
import { motion } from "framer-motion"

export default function Title({title}) {
    return(
        <motion.div
            variants={animateOpacity_1}
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            className="w-full h-full flex justify-center items-center xl:w-1/3 xl:border-r-[.1rem] xl:border-[#e2cb8b] services-bp:mb-0 xl:min-h-[7.5rem] xl:pr-[1rem] services-bp:pb-[1rem] 2xl:pr-[2.5rem]">
                <h2 className="text-white text-[1.6rem] font-semibold sm:mb-[1.5rem] nav-lg:text-[2rem] xl:text-[1.8rem] services-bp:mb-0 2xl:text-[2rem] 2xl:min-h-[9rem] 2xl:flex 2xl:gap-3 2xl:items-end 2xl:pb-5 3xl:text-[2.4rem] 4k:text-[2.8rem] 4k:pb-6">
                    <b className="hidden font-medium xl:flex">SERVICIOS /</b> <b className="text-[#e2cb8b] font-medium">LOGROS</b>
                </h2>
        </motion.div>
    )
}






// <motion.div
// variants={animateBTM_TOP}
// initial="initial"
// whileInView="animate"
// viewport={{once: true}}
// custom={0} 
// className="w-1/3 h-full border-r-[.1rem] border-[#e2cb8b] flex justify-start items-center">
//     <h2 className="text-white text-[2rem] font-semibold">SERVICIOS / <b className="text-[#e2cb8b] font-medium">LOGROS</b></h2>
// </motion.div>