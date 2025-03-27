"use client"

import Carousel from "@/components/carousels/carousel/carousel";
import BgText from "@/components/contentPieces/bgText/bgText";
import CountUpImageText from "@/components/contentPieces/countUpImageText/countUpImageText";
import ExperienceCard from "@/components/contentPieces/experienceCard/experienceCard";
import PodcastGrid from "@/components/contentPieces/podcastGrid/podcastGrid";
import Footer2 from "@/components/footer/footer";
import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
// import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import BigNav from "@/components/navBars/bigNav/bigNav";
// import PodcastSocialLinks from "@/components/podcast/podcastSocialLinks";
import { podcastCarousel,
     podcastCarouselHero, podcastCountup,
     podcastExperienceCard,
     podcastHerobanner,
      podcastText } from "@/data/podcastData";
import React from "react";


const PodcastPage = () => {


    return (
        <main className="w-screen bg-gradient-to-tr from-blue-200 to-blue-100">
            {/* <ServiceHerobanner
            {...podcastHerobanner}
           alt=""
            /> */}
        <BigNav

        excludedLink="Podcast"
        />
            <CarouselHero
            {...podcastCarouselHero}
            />
            <CountUpImageText
            {...podcastCountup}
            />

            <ExperienceCard
            {...podcastExperienceCard}
            buttonText=""
            />

            {/* <Carousel
            {...podcastCarousel}
            /> */}

            <PodcastGrid/>

            <BgText
            {...podcastText}
            />

            <Footer2
            excludedLink="Podcast"
            />
            
        </main>
    )
}

export default PodcastPage