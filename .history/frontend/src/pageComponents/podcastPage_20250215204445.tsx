import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import { podcastHerobanner } from "@/data/podcastData";
import React from "react";


const PodcastPage = () => {


    return (
        <main className="w-screen">
            <ServiceHerobanner
            {...podcastHerobanner}
            buttonText=""
            />
        </main>
    )
}

export default PodcastPage