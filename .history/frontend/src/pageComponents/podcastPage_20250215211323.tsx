"use client"

import CountUpImageText from "@/components/contentPieces/countUpImageText/countUpImageText";
import ExperienceCard from "@/components/contentPieces/experienceCard/experienceCard";
import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import { podcastCountup, podcastExperienceCard, podcastHerobanner } from "@/data/podcastData";
import React from "react";


const PodcastPage = () => {


    return (
        <main className="w-screen">
            <ServiceHerobanner
            {...podcastHerobanner}
           alt=""
            />
            <CountUpImageText
            {...podcastCountup}
            />

            <ExperienceCard
            {...podcastExperienceCard}
            buttonText=""
            />

            <BgT
        </main>
    )
}

export default PodcastPage