"use client"

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
// import logo from '../../public/logo.webp'
// import Image from "next/image";
// Dynamically import components
import FullBodyHero from "@/components/herobanners/fullBodyHero/fullBodyHero";
import ExperienceCard from "@/components/cardOfExperience/cardOfExperience";
const ImageTextBox = dynamic(() => import("@/components/contentPieces/ImageTextBox/imageTextBox"));
import  ParallaxText  from "@/components/contentPieces/parallaxText/parallaxText";
import GoogleMap from "@/components/contentPieces/googleMap/googleMap";
// import ExperienceCard2 from "@/components/contentPieces/experienceCard/experienceCard";
import Navbar from "@/components/navBars/navbar";

import TextAndList from "@/components/textComponents/textAndList/textAndList";


const VerticalImageTextBox = dynamic(() => import("@/components/contentPieces/verticalImageText/verticalImageTextBox"));
const Footer2 = dynamic(() => import("@/components/footer/footer"));
const GoogleReviews = dynamic(() => import("@/components/googleReviews/googleReviews"));
// const BigNav = dynamic(() => import('../components/navBars/bigNav/bigNav'));

const Homepage = () => {
  return (
    <main className="w-screen ">
      {/* <BigNav excludedLink="Home" /> */}
<Navbar
excludedLink="Home"/>
     
      <section className="overflow-x-hidden bg-gradient-to-tr from-blue-200 to-blue-100
      mt-12 sm:mt-6 md:mt-0">
        <FullBodyHero />

    
        <ExperienceCard
     
    
         {...experienceCardData} buttonText="Let's get in touch"
        link="/contact" />

        {/* <TextAndList {...textAndListData}
        link="/contact" /> */}

<section className="w-screen py-8
 bg-gradient-to-b from-[#0077b3] to-blue-300 mb-[4rem]">


        <ImageTextBox {...imageTextBoxData}
        textColor="text-white"
         reverse 
         
       />

      <div className="bg-white rounded-md w-[90vw]
      h-[5px] max-w-[1200px] mx-auto mb-8"
      />

        <ImageTextBox 
        
        {...imageTextBoxData2}
           textColor='text-white'
         />
        </section>

        <GoogleReviews reviews={testimonials} />

{/* <div className="flex flex-col text-black
items-center justify-center mb-[-12rem]">

<Image
      src={logo}
      alt="Chris Crowell Logo"
      width={600}
      height={1300}
      className='w-[70vw]  object-contain mx-auto max-w-[350px]'
      />

<h2 className='font-semibold text-3xl sm:text-4xl
md:text-5xl mb-2'>Property evalubator</h2>
<p className="px-2 mt-2">Here is where you can enter you address to get your home evaluated</p>



        <iframe 
  src="https://chriscrowell.remax-ns.ca/sellembed.php" 
  
  className="w-[90vw]  px-2 bg-red-200 mt-4 mx-auto max-w-[700px] h-[80vh] border-none
  max-h-[400px]"
></iframe>



</div> */}

      </section>

      <ParallaxText {...parallaxTextContentData} link="/podcast" />


      <section className="bg-gradient-to-tr from-blue-200 to-blue-100">


        <VerticalImageTextBox {...closingStatement} />
        <GoogleMap/>
        <Footer2 excludedLink="Home" />
      </section>
    </main>
  );
};

export default Homepage;
