"use client"

import Carousel from "@/components/carousels/carousel/carousel";
import BgText from "@/components/contentPieces/bgText/bgText";
import CountUpImageText from "@/components/contentPieces/countUpImageText/countUpImageText";
import ExperienceCard from "@/components/contentPieces/experienceCard/experienceCard";
import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import PodcastSocialLinks from "@/components/podcast/podcastSocialLinks";
import { podcastCarousel, podcastCarouselHero, podcastCountup, podcastExperienceCard, podcastHerobanner, podcastText } from "@/data/podcastData";
import React from "react";


const PodcastPage = () => {


    return (
        <main className="w-screen bg-gradient-to-tr from-blue-200 to-blue-100">
            {/* <ServiceHerobanner
            {...podcastHerobanner}
           alt=""
            /> */}

            <CarouselHero
            {...podcastCarouselHero}
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

<iframe width="560" height="315" src="https://www.youtube.com/embed/4_GEPjaK9ek?si=lPtzELaji0VcAGfA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

</iframe>

            <BgText
            {...podcastText}
            />
            
        </main>
    )
}

export default PodcastPage