import SlidingText from "@/components/textAnimations/slidingText/slidingText";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PodcastSocialLinks from "@/components/podcast/podcastSocialLinks";

const PodcastGrid = () => {


    const [slideComplete, setSlideComplete] = useState(false)

    return (
        <>
       <SlidingText
       text="View podcasts here"
      styles="bg-gradient-to-b from-black to-gray-700 bg-clip-text text-transparent
      text-4xl sm:text-5xl font-semibold text-center 
      px-3 relative transition-colors"
       setSlideComplete={setSlideComplete}
       />
       <motion.p
       initial={{
        opacity:0,
        y:-40
       }}
       animate={{
        opacity:slideComplete ? 1 : 0,
        y:slideComplete ? 0 : -40
       }}
       className="text-black py-6 px-4 mx-auto max-w-[1200px]"
       >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, excepturi? Cum temporibus ullam voluptates dolorem, consequuntur voluptate animi harum minima eum maxime, mollitia corrupti porro.

       </motion.p>
<section className="grid mx-auto grid-cols-1 sm:grid-cols-2
gap-4 w-full max-w-[1200px] justify-center
items-center">


<iframe width="560" height="315" src="https://www.youtube.com/embed/4_GEPjaK9ek?si=lPtzELaji0VcAGfA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>


</iframe>
<iframe width="90vw" height="315" src="https://www.youtube.com/embed/8E8W0cGokMw?si=TwPrL63h4E-TN9bg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
className="max-w-[500px]"></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/S5MvboC3nNc?si=CtvuIyKdWl0Xmr-C" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/74bD_MOO21I?si=K4gRuGQaMJIFxUvA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</section>


<PodcastSocialLinks/>
</>
    )
}

export default PodcastGrid