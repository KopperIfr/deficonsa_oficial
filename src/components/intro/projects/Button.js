import Link from "next/link"

export default function Button({href}) {
    return(
        <>
        <Link
        href="#"
        className="border-white border-[.1rem] text-[1rem] text-white bg-[#2d2b28] flex gap-4 items-center justify-center font-semibold w-full h-[4rem]">
            <svg className="w-[1rem] h-[1rem]" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M416,473.6c0-21.207,17.193-38.4,38.4-38.4H96c-21.207,0-38.4,17.193-38.4,38.4S74.793,512,96,512h358.4 C433.193,512,416,494.807,416,473.6z"></path> </g> </g> <g> <g> <rect x="179.2" y="121.6" width="153.6" height="64"></rect> </g> </g> <g> <g> <path d="M96,0C74.793,0,57.6,17.193,57.6,38.4v368.732C68.906,400.575,82.016,396.8,96,396.8h358.4V0H96z M371.2,224H140.8V83.2 h230.4V224z"></path> </g> </g> </g></svg>
            VER PROYECTO
        </Link>
        </>
    )
}