import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import { podcastHerobanner } from "@/data/podcastData";
import React from "react";


const PodcastPage = () => {


    return (
        <main className="w-screen">
            <ServiceHerobanner
            {...podcastHerobanner}
           alt=:
            />
        </main>
    )
}

export default PodcastPage