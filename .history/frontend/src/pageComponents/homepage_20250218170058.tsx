import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
import React from "react";
import { carouselHeroData,testimonialsData, closingStatement, contactData, experienceCardData, imageTextBoxData,imageTextBoxData2, lorem60, parallaxTextContentData, textAndListData } from "@/data/homepageData";
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
import StarWarsTextEffect from "@/components/textAnimations/starWarsText/starWarsText";
import SellHouse from "@/components/svgComponents/dollarSign/dollarSignSvg";

import HouseSvg from "@/components/svgComponents/houseSvg/houseSvg";
import DollarSignSvg from "@/components/svgComponents/dollarSign/dollarSignSvg";
import HouseMoney from "@/components/svgComponents/houseMoney/houseMoney";
import FadeInFromLeftText from "@/components/textAnimations/fadeInFromLeftText/fadeInFromLeftText";
import ScrollCarousel from "@/components/carousels/scrollCarousel/scrollCarousel";
import { testimonialsData } from "@/data/homepageData";
import Testimonials from "@/components/contentPieces/testimonials/testimonials";
import VerticalImageTextBox from "@/components/contentPieces/verticalImageText/verticalImageTextBox";
import Footer2 from "@/components/footer/footer";
import ContactCard from "@/components/footer/contactCard/contactCard";
import GoogleReviews from "@/components/googleReviews/googleReviews";
const Homepage = () => {

    

    return (
        <main className="w-screen bg-gradient-to-tr from-blue-200 to-blue-100
   ">
           
           {/* HEROBANNERS */}

            <FullBodyHero/>
            {/* <FadeInFromLeftText
            text={lorem60}
            startAnimation
            className="text-black"
            /> */}

            {/* <StarWarsTextEffect
            text={lorem60}
            minScale={1}   // Words shrink more
            maxScale={1}   // Words expand slightly
            minOpacity={1} // Words fade more
            maxOpacity={1} 
            styles="text-black"
            /> */}

            {/* <ScrollableText
            styles="text-lg text-left mx-auto
            text-black px-4 font-semibold
            w-[90vw]"
            text={lorem60}
            minScale={0.8}   // Words shrink more
  maxScale={1}   // Words expand slightly
  minOpacity={0.7} // Words fade more
  maxOpacity={1}   // Words fully visible in center
            /> */}

            {/* <CarouselHero
            {...carouselHeroData}
            />
            <Herobanner/> */}

               {/* HEROBANNERS */}

               {/* CONTENT PIECES */}
              {/* <HouseMoney/> */}
               {/* <HousePolygon/> */}
                <ExperienceCard
                {...experienceCardData}
                buttonText="Let's get in touch"
                />

                <TextAndList
                {...textAndListData}
                />

                {/* <SlideInComponent/> */}

                <ImageTextBox
                {...imageTextBoxData}
                reverse
                customImage={<HouseMoney/>}
                />

                <ImageTextBox
                {...imageTextBoxData2}
                
                // objectContain
                />

               

            
<GoogleReviews
reviews={testimonials}
/>


                {/* <ScrollCarousel
                images={testimonialsData.images}
                />

                <Testimonials/> */}

                {/* <ExperienceCard
                {...experienceCardData}
                buttonText="click here"
                /> */}

               {/* CONTENT PIECES */}

               {/* <ContactCard
               {...contactData}
               /> */}

                <TextParallaxContentExample
                {...parallaxTextContentData}
                />

               <VerticalImageTextBox
               {...closingStatement}/>


               <Footer2
               excludedLink="Home"
               />
        </main>
    )
}

export default Homepage