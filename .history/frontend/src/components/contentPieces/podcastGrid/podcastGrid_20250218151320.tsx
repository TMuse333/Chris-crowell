import SlidingText from "@/components/textAnimations/slidingText/slidingText";
import React, { useState } from "react";
import { motion } from "framer-motion";

const PodcastGrid = () => {


    const [slideComplete, setSlideComplete] = useState(false)

    return (
        <>
       <SlidingText
       text="View podcasts here"
       subText="We have lots of great podcasts over many different realms of entrepreneurship"
       setSlideComplete={setSlideComplete}
       />
       <motion.p
       
       >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, excepturi? Cum temporibus ullam voluptates dolorem, consequuntur voluptate animi harum minima eum maxime, mollitia corrupti porro.

       </motion.p>
<section className="grid mx-auto grid-cols-1 sm:grid-cols-2
gap-4">


<iframe width="560" height="315" src="https://www.youtube.com/embed/4_GEPjaK9ek?si=lPtzELaji0VcAGfA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>


</iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/8E8W0cGokMw?si=TwPrL63h4E-TN9bg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/S5MvboC3nNc?si=CtvuIyKdWl0Xmr-C" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/74bD_MOO21I?si=K4gRuGQaMJIFxUvA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</section>
</>
    )
}

export default PodcastGrid