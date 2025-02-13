import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
import React from "react";
import { carouselHeroData, experienceCardData, imageTextBoxData, lorem60, parallaxTextContentData, textAndListData } from "@/data/homepageData";
import Herobanner from "@/components/herobanners/herobanner2/herobanner2";
import DiagonalClipContainer from "@/components/diagonalClip/diagonalClip";
import ScrollWords from "@/components/textAnimations/scrollWords/scrollWords";
import SlidingText from "@/components/textAnimations/slidingText/slidingText";
import TiltingContent from "@/components/tiltingContent/tiltingContent";
import ExperienceCard from "@/components/contentPieces/experienceCard/experienceCard";
import ImageTextBox from "@/components/contentPieces/ImageTextBox/imageTextBox";
import { TextParallaxContentExample } from "@/components/contentPieces/parallaxText/parallaxText";
import TextAndList from "@/components/textAndList/textAndList";
import SlideInComponent from "@/components/contentPieces/slideInComponent/slideInComponent";
import ScrollableText from "@/components/textAnimations/scrollableText/scrollableText";

const Homepage = () => {

    

    return (
        <main className="w-screen bg-gradient-to-tr from-blue-200 to-blue-100">
           
           {/* HEROBANNERS */}

            <FullBodyHero/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nobis laborum porro voluptas molestias nihil, eum ea velit quae, perspiciatis blanditiis dolorum culpa unde est eos earum a rem eveniet accusantium doloremque! Molestias illum inventore quae adipisci esse unde tempore, deleniti sed culpa nulla, sint placeat asperiores commodi? Libero ut tempora ad deserunt beatae facilis cum esse magni quaerat. Quasi nihil perspiciatis culpa minus, voluptates inventore saepe repudiandae reiciendis accusantium fuga exercitationem vero, eligendi voluptatibus nam neque, cumque explicabo vitae tenetur expedita accusamus placeat. Corporis perspiciatis, eius minus debitis ex, ad ducimus, error neque id itaque eligendi quibusdam hic pariatur!
            <ScrollableText
            styles="text-lg text-left mx-auto
            text-black px-4"
            text={lorem60}
            />

            {/* <CarouselHero
            {...carouselHeroData}
            />
            <Herobanner/> */}

               {/* HEROBANNERS */}

               {/* CONTENT PIECES */}
                <ExperienceCard
                {...experienceCardData}
                buttonText="click here"
                />

                {/* <SlideInComponent/> */}

                <ImageTextBox
                {...imageTextBoxData}
                />

                <ImageTextBox
                {...imageTextBoxData}
                reverse
                />

                <TextParallaxContentExample
                {...parallaxTextContentData}
                />

                <TextAndList
                {...textAndListData}
                />

               {/* CONTENT PIECES */}
        </main>
    )
}

export default Homepage