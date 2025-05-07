"use client"
import Image from "next/image";

// import ImageTextBox from "@/components/contentPieces/ImageTextBox/imageTextBox";
// import StepByStep from "@/components/contentPieces/stepByStep/stepByStep";
import VerticalImageTextBox from "@/components/contentPieces/verticalImageText/verticalImageTextBox";
import Footer2 from "@/components/footer/footer";
// import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
// import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import BigNav from "@/components/navBars/bigNav/bigNav";
// import HouseMoney from "@/components/svgComponents/houseMoney/houseMoney";
import TextAndList from "@/components/textAndList/textAndList";
import Accordion from "@/components/textComponents/accordion/accordion";
// import { carouselHeroData} from "@/data/homepageData";
import logo from '../../public/logo.webp'
import { 
    // sellingHerobanner,
    // realEstateSteps,
     documentsData,
    sellingQuestions, 
    sellingCloser,
    // sellingIntro,
    sellingCircleSteps,
    sellingHero} from "@/data/sellingData";
import React from "react";
import CircleSteps from "@/components/carousels/circleSteps/circleSteps";
import { ThreeBoxHero } from "focusflow-components";


//memeory reboot
const SellingPage = () => {


    return (
        <main className="w-screen overflow-x-hidden
        bg-gradient-to-tr from-blue-200 to-blue-100">

            <BigNav
            excludedLink="Selling your home"
            />

            {/* <ServiceHerobanner
            {...sellingHerobanner}
            alt='alt'
            /> */}

            {/* <CarouselHero
            {...carouselHeroData}
            /> */}
            {/* <ImageTextBox
            {...sellingIntro}
            customImage={<HouseMoney/>}
            /> */}

            <ThreeBoxHero
            {...sellingHero}
            />

            {/* <StepByStep
            steps={realEstateSteps}
            /> */}

            <CircleSteps
            {...sellingCircleSteps}
            textColor='text-black'
            />
            

            {/* <SlideShowCarousel
            images={slideShowSellingData}
            /> */}

            <TextAndList
            {...documentsData}
            />


            

            <Accordion
            hasIntro={false}
            text={sellingQuestions}
            />

<section className="flex flex-col text-black
items-center justify-center mb-[-12rem]">
<h3 className="mb-4">What is your home worth?</h3>
<Image
width={600}
height={1300}
      src={logo}
      alt="Chris Crowell Logo"
    
      className='w-[70vw]  object-contain mx-auto max-w-[350px]'
      />

<h2 className='font-semibold text-3xl sm:text-4xl
md:text-5xl mb-2'>Property evaluator</h2>
<p className="px-2 mt-2">Here is where you can enter you address to get your home evaluated</p>



        <iframe 
  src="https://chriscrowell.remax-ns.ca/sellembed.php" 
  
  className="w-[90vw]  px-2 0 mt-4 mx-auto max-w-[700px] h-[80vh] border-none
  max-h-[400px]"
></iframe>



</section>

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