"use client"

import SlideShowCarousel from "@/components/carousels/slideshowCarousel/slideShowCarousel";
import ImageTextBox from "@/components/contentPieces/ImageTextBox/imageTextBox";
// import StepByStep from "@/components/contentPieces/stepByStep/stepByStep";
import VerticalImageTextBox from "@/components/contentPieces/verticalImageText/verticalImageTextBox";
import Footer2 from "@/components/footer/footer";
// import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import BigNav from "@/components/navBars/bigNav/bigNav";
import HouseMoney from "@/components/svgComponents/houseMoney/houseMoney";
import TextAndList from "@/components/textAndList/textAndList";
import Accordion from "@/components/textComponents/accordion/accordion";
// import { carouselHeroData} from "@/data/homepageData";
import { sellingHerobanner,realEstateSteps,slideShowSellingData, documentsData,
    sellingQuestions, 
    sellingCloser,
    sellingIntro} from "@/data/sellingData";
import React from "react";



const SellingPage = () => {


    return (
        <main className="w-screen overflow-x-hidden
        bg-gradient-to-tr from-blue-200 to-blue-100">

            <BigNav
            excludedLink="Selling your home"
            />

            <ServiceHerobanner
            {...sellingHerobanner}
            alt='alt'
            />

            {/* <CarouselHero
            {...carouselHeroData}
            /> */}
            <ImageTextBox
            {...sellingIntro}
            customImage={<HouseMoney/>}
            />

            {/* <StepByStep
            steps={realEstateSteps}
            /> */}

            <SlideShowCarousel
            images={slideShowSellingData}
            />

            <TextAndList
            {...documentsData}
            />

            <Accordion
            hasIntro={false}
            text={sellingQuestions}
            />

            <VerticalImageTextBox
            {...sellingCloser}
            />

            <Footer2
            excludedLink="Selling your home"
            />


        </main>
    )
}

export default SellingPage