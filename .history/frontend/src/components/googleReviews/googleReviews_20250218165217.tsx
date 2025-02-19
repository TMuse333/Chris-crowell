import Image from "next/image";
import React from "react";

interface Props {
    name:string,
    src:string,
    description:string,
    date:string,
    alt:string
}


const Review:React.FC<Props> = ({
    name,image,description,date,
    alt
}) => {


    return (
        <div className="w-[90vw] rounded-2xl">
<div className="flex flex-col">
<Image
src=
</div>
        </div>
    )
}