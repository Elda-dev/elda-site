import React from "react";
import MainSection from "../../MainSection";
import {homeObjOne, homeObjTwo} from "./Data";
import TitleSection from "./TitleSection";
import SectionSelector from "./SectionSelector";

function Home() {
    return (
        <>
            {/* <SectionSelector/> */}
            <TitleSection id='Title'/>
            <MainSection {...homeObjOne} id='Section_1'/>
            <MainSection {...homeObjTwo} id='Section_2'/>
        </>
    )
}

export default Home