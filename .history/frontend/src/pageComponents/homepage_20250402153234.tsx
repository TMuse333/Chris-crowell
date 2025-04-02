import dynamic from "next/dynamic";
import React from "react";
import {
  testimonials,
  closingStatement,
  experienceCardData,
  imageTextBoxData,
  imageTextBoxData2,
  parallaxTextContentData,
  textAndListData,
} from "@/data/homepageData";

// Dynamically import components
import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
const ExperienceCard = dynamic(() => import("@/components/contentPieces/experienceCard/experienceCard"));
const ImageTextBox = dynamic(() => import("@/components/contentPieces/ImageTextBox/imageTextBox"));
import  ParallaxText  from "@/components/contentPieces/parallaxText/parallaxText";
const TextAndList = dynamic(() => import("@/components/textAndList/textAndList"));
const HouseMoney = dynamic(() => import("@/components/svgComponents/houseMoney/houseMoney"));
const VerticalImageTextBox = dynamic(() => import("@/components/contentPieces/verticalImageText/verticalImageTextBox"));
const Footer2 = dynamic(() => import("@/components/footer/footer"));
const GoogleReviews = dynamic(() => import("@/components/googleReviews/googleReviews"));
const BigNav = dynamic(() => import("@/components/navBars/bigNav/bigNav"));

const Homepage = () => {
  return (
    <main className="w-screen ">
      <BigNav excludedLink="Home" />

      {/* HEROBANNERS */}
      <section className="overflow-x-hidden bg-gradient-to-tr from-blue-200 to-blue-100">
        <FullBodyHero />

        {/* CONTENT PIECES */}
        <ExperienceCard {...experienceCardData} buttonText="Let's get in touch"
        link="/contact" />
        <TextAndList {...textAndListData}
        link="/contact" />

<section className="w-screen py-12
 bg-gradient-to-b from-[#0077b3] to-blue-300">


        <ImageTextBox {...imageTextBoxData}
        textColor="text-white"
         reverse customImage={<HouseMoney />
         
      } />

      <div className="bg"

        <ImageTextBox {...imageTextBoxData2}
           textColor='text-white'
         />
        </section>

        <GoogleReviews reviews={testimonials} />
      </section>

      <ParallaxText {...parallaxTextContentData} link="/podcast" />
      {/* <TextParallaxContentExample {...parallaxTextContentData} link="/podcast" /> */}

      <section className="overflow-x-hidden bg-gradient-to-tr from-blue-200 to-blue-100">
        <VerticalImageTextBox {...closingStatement} />
        <Footer2 excludedLink="Home" />
      </section>
    </main>
  );
};

export default Homepage;
