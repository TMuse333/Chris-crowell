"use client"

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


        </main>
    )
}

export default SellingPage