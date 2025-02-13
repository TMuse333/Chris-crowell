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

            <ScrollableText
            styles="text-lg text-left mx-auto
            text-black px-4 font-semibold
            w-[90vw]"
            text={lorem60}
            minScale={0.8}   // Words shrink more
  maxScale={1}   // Words expand slightly
  minOpacity={0.7} // Words fade more
  maxOpacity={1}   // Words fully visible in center
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