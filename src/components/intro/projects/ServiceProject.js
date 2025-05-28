export default function ServiceProject({service}) {
    return(
        <>
            { service ? (
                <p className="text-[#edb439] font-medium 4k:text-[1.4rem] relative z-[100]">
                    Reforma
                </p>
            ) : (
                <p className="text-[#96125b] font-medium 4k:text-[1.4rem] relative z-[100]">
                    Construccion
                </p>
            )}
        </>
    )
}