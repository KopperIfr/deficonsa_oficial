import Circle from "@/components/elements/Circle";
import About from "@/components/sobre_nosotros/About";
import Intro from "@/components/sobre_nosotros/Intro";

export default function SobreNosotros() {
    return(
        <div className="min-h-[100vh] w-full relative overflow-hidden">
            <div className="bg-[#141413] h-[5rem] tiny-460:h-[7rem] nav-lg:h-[10rem] w-full absolute top-0 left-0 overflow-hidden">
                <Circle className="top-[-40rem] right-[-42rem] nav-lg:top-[-47rem] nav-lg:right-[-52rem]" />
            </div>
            <div className="pt-[5rem] tiny-460:pt-[7rem] nav-lg:pt-[10rem] bg-[#141413] h-full">
                <Intro />
                <About />
            </div>
        </div>
    )
}