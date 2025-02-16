"use client"

import SlideShowCarousel from "@/components/carousels/slideshowCarousel/slideShowCarousel";
import StepByStep from "@/components/contentPieces/stepByStep/stepByStep";
import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import { carouselHeroData} from "@/data/homepageData";
import { sellingHerobanner,realEstateSteps } from "@/data/sellingData";
import React from "react";



const SellingPage = () => {


    return (
        <main className="w-screen overflow-x-hidden
        bg-gradient-to-tr from-blue-200 to-blue-100">
            <ServiceHerobanner
            {...sellingHerobanner}
            alt='alt'
            />
            <CarouselHero
            {...carouselHeroData}
            />

            <StepByStep
            steps={realEstateSteps}
            />

            <SlideShowCarousel
            images={slideShowSellingData}
            />


        </main>
    )
}

export default SellingPage