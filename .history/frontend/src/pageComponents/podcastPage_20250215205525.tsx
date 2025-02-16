"use client"

import CountUpImageText from "@/components/contentPieces/countUpImageText/countUpImageText";
import ExperienceCard from "@/components/contentPieces/experienceCard/experienceCard";
import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import { podcastCountup, podcastHerobanner } from "@/data/podcastData";
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
            {...podcas}
        </main>
    )
}

export default PodcastPage