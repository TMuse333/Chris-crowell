import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
import DisplayBoxes from "@/components/textComponents/displayBoxes/displayBoxes";
import React from "react";

import { workCredentials } from "@/data/aboutData";

const AboutPage = ()=>{


    return (
        <main className="w-screen
        bg-gradient-to-tr from-blue-200 to-blue-100">

            <FullBodyHero
            />

        <DisplayBoxes
            data={workCredentials}



        </main>
    )
}

export default AboutPage