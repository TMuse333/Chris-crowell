"use client"

import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
// import DisplayBoxes from "@/components/textComponents/displayBoxes/displayBoxes";
import React from "react";

import { aboutImageTextBox } from "@/data/aboutData";
import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import { carouselHeroData } from "@/data/homepageData";
import ImageTextBox from "@/components/contentPieces/ImageTextBox/imageTextBox";
import BigNav from "@/components/navBars/bigNav/bigNav";
import Footer2 from "@/components/footer/footer";
// import ContactCard from "@/components/footer/contactCard/contactCard";
import GoogleMap from "@/components/contentPieces/googleMap/googleMap";

const AboutPage = ()=>{


    return (
        <main className="w-screen
        bg-gradient-to-tr from-blue-200 to-blue-100">

           <Nav

            <FullBodyHero
            about
            />

            <CarouselHero
            regularText
            {...carouselHeroData}
            />

            <ImageTextBox
            {...aboutImageTextBox}
            />
{/* 
            <DisplayBoxes
            data={workCredentials}
            /> */}

            {/* <ContactCard
            {...contactData}
            /> */}
            
            <GoogleMap/>
            <Footer2
            excludedLink="More about me"
            />

         



        </main>
    )
}

export default AboutPage