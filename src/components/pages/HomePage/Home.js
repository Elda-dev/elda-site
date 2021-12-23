import React from "react";
import MainSection from "../../MainSection";

import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from "./Data";
import TitleSection from "./TitleSection";

function Home() {
    return (
        <>
            <TitleSection/>
            <MainSection {...homeObjOne} />
            <MainSection {...homeObjTwo}/>
        </>
    )
}

export default Home