import Image from "next/image";

export default function PaddingWrapper({children}) {
    return (
        <div className="w-full h-full px-[1rem] sm:px-[3rem] lg:px-[3rem] 2xl:px-[7rem] 3xl:px-[12rem] 4k:px-[15rem] relative">
            {children}
        </div>
    );
}
