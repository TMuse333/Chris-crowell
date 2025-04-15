
import React from 'react'

import Image from 'next/image'

interface Props {
    src:string,
    alt:string,
    title:string,
    description:string,
    buttonText:string,
    destination:string
}

const ServiceHerobanner:React.FC<Props> = ({
    src,alt,title,description,
    buttonText,
}) => {






    return (

    

    <header 
    className='w-screen min-h-[500px]
    h-[75vh] text-center text-gray-200
    relative flex flex-col items-center justify-center
    transition-colors
    duration-1000 
    '
    //  style={{
    //     backgroundImage:`url(${bg})`,
    //     backgroundSize:'cover',
    //     backgroundPosition:'center'
        
    // }}
    
   role='banner'
   >
    <Image className='w-full h-full object-cover absolute z-[1]
    brightness-[0.5]'
src={src}
priority
width={600}
height={1300}
alt={alt}
/>
      
        <section className='text-left w-4/5 relative z-[2]'>


    
<h1
 className='text-4xl sm:text-5xl md:text-6xl'>{title}</h1>
<h2

 className='text-xl mt-4 sm:text-2xl md:text-3xl'>{description}</h2>
<button




 
className='bg-gray-300 p-4 text-black !important
mt-8 hover:scale-[1.1] hover:bg-slate-900 hover:text-white 
transition-all'>
 {buttonText}
</button>


</section>
    </header>
    )
}

export default ServiceHerobanner