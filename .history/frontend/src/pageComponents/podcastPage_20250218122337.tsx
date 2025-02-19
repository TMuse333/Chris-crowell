"use client"

import Carousel from "@/components/carousels/carousel/carousel";
import BgText from "@/components/contentPieces/bgText/bgText";
import CountUpImageText from "@/components/contentPieces/countUpImageText/countUpImageText";
import ExperienceCard from "@/components/contentPieces/experienceCard/experienceCard";
import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import { podcastCarousel, podcastCountup, podcastExperienceCard, podcastHerobanner, podcastText } from "@/data/podcastData";
import React from "react";


const PodcastPage = () => {


    return (
        <main className="w-screen bg-gradient-to-tr from-blue-200 to-blue-100">
            <ServiceHerobanner
            {...podcastHerobanner}
           alt=""
            />
            <CountUpImageText
            {...podcastCountup}
            />

            {/* <ExperienceCard
            {...podcastExperienceCard}
            buttonText=""
            /> */}

            <Carousel
            {...podcastCarousel}
            />

            {/* <BgText
            {...podcastText}
            /> */}
        </main>
    )
}

export default PodcastPage