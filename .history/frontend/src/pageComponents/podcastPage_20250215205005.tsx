import CountUpImageText from "@/components/contentPieces/countUpImageText/countUpImageText";
import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import { podcastHerobanner } from "@/data/podcastData";
import React from "react";


const PodcastPage = () => {


    return (
        <main className="w-screen">
            <ServiceHerobanner
            {...podcastHerobanner}
           alt=""
            />
            <CountUpImageText
            {...}
        </main>
    )
}

export default PodcastPage