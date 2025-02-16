"use client"

import SlideShowCarousel from "@/components/carousels/slideshowCarousel/slideShowCarousel";
import ImageTextBox from "@/components/contentPieces/ImageTextBox/imageTextBox";
import StepByStep from "@/components/contentPieces/stepByStep/stepByStep";
import VerticalImageTextBox from "@/components/contentPieces/verticalImageText/verticalImageTextBox";
import Footer2 from "@/components/footer/footer";
import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import TextAndList from "@/components/textAndList/textAndList";
import Accordion from "@/components/textComponents/accordion/accordion";
import { carouselHeroData} from "@/data/homepageData";
import { sellingHerobanner,realEstateSteps,slideShowSellingData, documentsData,
    sellingQuestions, 
    sellingCloser,
    sellingIntro} from "@/data/sellingData";
import React from "react";



const SellingPage = () => {


    return (
        <main className="w-screen overflow-x-hidden
        bg-gradient-to-tr from-blue-200 to-blue-100">
            <ServiceHerobanner
            {...sellingHerobanner}
            alt='alt'
            />

            {/* <CarouselHero
            {...carouselHeroData}
            /> */}
            <ImageTextBox
            {...sellingIntro}
            customImage={<Home}

            <StepByStep
            steps={realEstateSteps}
            />

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
            excludedLink="Sell your home"
            />


        </main>
    )
}

export default SellingPage