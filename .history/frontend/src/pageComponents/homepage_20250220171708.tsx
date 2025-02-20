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
import { TextParallaxContentExample } from "@/components/contentPieces/parallaxText/parallaxText";
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

        <ImageTextBox {...imageTextBoxData}
         reverse customImage={<HouseMoney />
         
      } />
        <ImageTextBox {...imageTextBoxData2} />

        <GoogleReviews reviews={testimonials} />
      </section>

      <TextParallaxContentExample {...parallaxTextContentData} link="/podcast" />

      <section className="overflow-x-hidden bg-gradient-to-tr from-blue-200 to-blue-100">
        <VerticalImageTextBox {...closingStatement} />
        <Footer2 excludedLink="Home" />
      </section>
    </main>
  );
};

export default Homepage;
