import CarouselHero from "@/components/herobanners/carouselHero/carouselHero";
import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import { sellingHerobanner } from "@/data/sellingData";
import React from "react";



const SellingPage = () => {


    return (
        <main className="w-screen overflow-x-hidden
        bg-gradient-to-tr from-blue-200 to-blue-100">
            <ServiceHerobanner
            {...sellingHerobanner}
            alt='alt'
            />
            <CarouselHero
            />


        </main>
    )
}

export default SellingPage