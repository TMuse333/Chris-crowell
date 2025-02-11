import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
import React from "react";


const Homepage = () => {

    return (
        <main className="w-screen">
            <FullBodyHero/>
            <CarouselHero/>
        </main>
    )
}

export default Homepage