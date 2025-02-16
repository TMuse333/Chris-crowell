

import CountUpImageText from "@/components/contentPieces/countUpImageText/countUpImageText";
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
        </main>
    )
}

export default PodcastPage