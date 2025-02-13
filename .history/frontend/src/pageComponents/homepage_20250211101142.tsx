import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
import React from "react";
import { carouselHeroData } from "@/data/homepageData";
import Herobanner from "@/components/herobanners/herobanner2/herobanner2";
import DiagonalClipContainer from "@/components/diagonalClip/diagonalClip";
import ScrollWords from "@/components/textAnimations/scrollWords/scrollWords";

const Homepage = () => {

    return (
        <main className="w-screen bg-gradient-to-tr from-blue-200 to-blue-100">
           
            <FullBodyHero/>
            <ScrollWords/>
            <CarouselHero
            {...carouselHeroData}
            />
            {/* <Herobanner/> */}
        </main>
    )
}

export default Homepage