import { cn } from "@/lib/utils";

export default function Circle({className = ''}) {
    return(
        <div className={cn("rounded-[50%] h-[70rem] w-[70rem] blur-3xl absolute top-[-47rem] right-[-52rem]", {[className] : className !== ''})}
        style={{backgroundImage: "radial-gradient(circle, #776b4e, #474132, #1b1a18, #1b1a18)"}} >
        </div>
    );
}