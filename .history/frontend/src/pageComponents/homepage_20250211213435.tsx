import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
import React from "react";
import { carouselHeroData, experienceCardData, imageTextBoxData, parallaxTextContentData, textAndListData } from "@/data/homepageData";
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

const Homepage = () => {

    return (
        <main className="w-screen bg-gradient-to-tr from-blue-200 to-blue-100">
           
           {/* HEROBANNERS */}

            <FullBodyHero/>

            <CarouselHero
            {...carouselHeroData}
            />
            <Herobanner/>

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