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
    name,src,description,date,
    alt
}) => {


    return (
        <div className="w-[90vw] rounded-2xl
        flex flex-col">
<div className="flex flex-row">
<Image
src={src}
alt={alt}
className='w-[20vw] rounded-full object-contain'

/>
<div className="flex flex-col">
    <span>{name}</span>
    <span>{date}</span>
</div>
</div>
        </div>
    )
}