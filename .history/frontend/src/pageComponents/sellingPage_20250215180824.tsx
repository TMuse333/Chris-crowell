import ServiceHerobanner from "@/components/herobanners/serviceHerobanner/serviceHerobanner";
import { sellingHerobanner } from "@/data/sellingData";
import React from "react";



const SellingPage = () => {


    return (
        <main className="w-screen overflow-x-hidden
        bg-gradient-to-tr from-blue-200 to-blue-100">
            <ServiceHerobanner
            {...sellingHerobanner}
            />


        </main>
    )
}

export default SellingPage