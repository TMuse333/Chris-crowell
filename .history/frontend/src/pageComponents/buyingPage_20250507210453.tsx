"use client"

import CircleSteps from "@/components/carousels/circleSteps/circleSteps";
// import SlideShowCarousel from "@/components/carousels/slideshowCarousel/slideShowCarousel";
// import ImageTextBox from "@/components/contentPieces/ImageTextBox/imageTextBox";
// import StepByStep from "@/components/contentPieces/stepByStep/stepByStep";
import VerticalImageTextBox from "@/components/contentPieces/verticalImageText/verticalImageTextBox";
import Footer2 from "@/components/footer/footer";
// import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
// import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
// import BigNav from "@/components/navBars/bigNav/bigNav";
import Navbar from "@/components/navBars/navbar";
import HouseMoney from "@/components/svgComponents/houseMoney/houseMoney";
import TextAndList from "@/components/textAndList/textAndList";
import Accordion from "@/components/textComponents/accordion/accordion";
// import { carouselHeroData} from "@/data/homepageData";
import { buyingHerobanner, 
    buyingQuestions, buyingDocumentsData,
    buyingCloser,
    buyingIntro,
    circleSteps,
    buyingHero} from "@/data/buyingData";
import { ThreeBoxHero } from "focusflow-components";
import React from "react";


const BuyingPage = () => {


    return (
        <main className="w-screen overflow-x-hidden
        bg-gradient-to-tr from-blue-200 to-blue-100">

            {/* <BigNav
            excludedLink="Buy a home"
            />

            <ServiceHerobanner
            {...buyingHerobanner}
            alt='alt'
            /> */}
              <Navbar/>

            <ThreeBoxHero
            {...buyingHero}
            />

            {/* <CarouselHero
            {...carouselHeroData}
            /> */}
            {/* <ImageTextBox
            {...buyingIntro}
            customImage={<HouseMoney/>}
            /> */}

            {/* <StepByStep
            steps={realEstateSteps}
            /> */}
            <CircleSteps
            boxTextColor="text-white"
            {...circleSteps}
            textColor='text-black'
            />

            {/* <SlideShowCarousel
            images={slideShowBuyingData}
            /> */}

            <TextAndList
            
            {...buyingDocumentsData}
            />

            <Accordion

            hasIntro={false}
            text={buyingQuestions}
            />

<div className="w-screen mx-auto overflow-x-scroll
max-w-[1000px]">

<iframe 
  
  style={{
    width: "960px",
    height: "600px"
  }}
  src="https://chriscrowell.remax-ns.ca/wide.php" 
 
  frameBorder="0">
</iframe>

</div>

            <VerticalImageTextBox
            {...buyingCloser}
            />

            <Footer2
            excludedLink="Buy a home"
            />


        </main>
    )
}

export default BuyingPage
