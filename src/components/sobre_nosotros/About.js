import Circle from "../elements/Circle"
import HouseOutlineExtraLight from "../elements/HouseOutlineExtraLight"
import PaddingWrapper from "../wrapper/PaddingWrapper"
import DescriptionABOUT from "./about/DescriptionAbout"
import Information from "./about/Information"

export default function About() {
    return(
        <div className="w-full relative pb-[12rem] overflow-hidden pt-[6rem]">
            <Circle className="top-[20rem] right-[50rem]" />
            <Circle className="top-[-20rem] right-[-20rem]" />
            <HouseOutlineExtraLight className="top-[-10rem] right-[-30rem]"/>
            <HouseOutlineExtraLight className="top-[10rem] left-[-32rem] rotate-[180deg]" />
            <HouseOutlineExtraLight className="top-[40rem] left-[32rem] rotate-[180deg]" />
            <PaddingWrapper>
                <Information />
                <DescriptionABOUT />
            </PaddingWrapper>
        </div>
    )
}