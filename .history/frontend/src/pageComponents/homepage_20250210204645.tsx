import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
import React from "react";
import { carouselHeroData } from "@/data/homepageData";
import Herobanner from "@/components/herobanners/herobanner2/herobanner2";

const Homepage = () => {

    return (
        <main className="w-screen bg-gray-200">
            <Dia
            <FullBodyHero/>
            <CarouselHero
            {...carouselHeroData}
            />
            <Herobanner/>
        </main>
    )
}

export default Homepage