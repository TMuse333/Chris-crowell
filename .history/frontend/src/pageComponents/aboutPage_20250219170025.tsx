"use client"

import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
import DisplayBoxes from "@/components/textComponents/displayBoxes/displayBoxes";
import React from "react";

import { aboutImageTextBox, workCredentials } from "@/data/aboutData";
import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import { carouselHeroData } from "@/data/homepageData";
import ImageTextBox from "@/components/contentPieces/ImageTextBox/imageTextBox";
import BigNav from "@/components/navBars/bigNav/bigNav";
import Footer2 from "@/components/footer/footer";
import ContactCard from "@/components/footer/contactCard/contactCard";

const AboutPage = ()=>{


    return (
        <main className="w-screen
        bg-gradient-to-tr from-blue-200 to-blue-100">

            <BigNav
            excludedLink="About"
            />

            <FullBodyHero
            />

            <CarouselHero
            regularText
            {...carouselHeroData}
            />

            <ImageTextBox
            {...aboutImageTextBox}
            />

            <DisplayBoxes
            data={workCredentials}
            />

            <ContactCard
            {...contactCard}

            <Footer2
            excludedLink="About"
            />

         



        </main>
    )
}

export default AboutPage