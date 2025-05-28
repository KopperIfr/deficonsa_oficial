import Image from "next/image";

export default function HeaderPaddingWrapper({children}) {
    return (
        <div className="w-full h-full px-[1rem] sm:px-[2rem] md:px-[3rem] nav-lg:px-[4rem] 2xl:px-[12rem] 3xl:px-[22rem] 4k:px-[28rem] relative">
            {children}
        </div>
    );
}