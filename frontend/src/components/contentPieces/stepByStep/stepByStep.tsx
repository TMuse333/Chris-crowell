import Image from "next/image";
import React from "react";

interface ElementProps {
    title:string,
    src:string,
    alt:string,
    description:string,
  
}

const StepElement:React.FC<ElementProps> = ({
title,src,alt,description,
}) => {


    return (
        <div className="w-[90vw] mx-auto
        flex flex-col justify-center
        sm:w-[50vw] max-w-[300px]
        items-center mb-6 text-black">

            <h2 className="font-semibold
            mb-4">
            {title}
            </h2>
            <Image
            src={src}
            alt={alt}
            className="w-[90vw] mx-auto
            object-contain"
            width={600}
            height={1300}
            />
            <p className="mt-4 px-3"
            >{description}</p>


        </div>
    )
}


interface Props {
    steps:ElementProps[]
}

const StepByStep:React.FC<Props> = ({
    steps
}) => {


    return (
        <section className="grid 
        grid-cols-1 sm:grid-cols-2
        ">
            {steps.map((step, index) => (
                <StepElement
                {...step}
                key={index}
                />
            ))}
        </section>
    )

}

export default StepByStep