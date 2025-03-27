import React, { useEffect, useState } from "react";
import { useAnimate, motion, useMotionValue, useMotionTemplate,
useInView, animate } from 'framer-motion';
import Image from "next/image";
import brain from '../../../../public/white-network.webp';
import Link from 'next/link'
import AppearingGradient from "@/components/textAnimations/appearingGradient/appearingGradient";
import { useGeneralContext } from "@/context/context";

import bgImage from '../../../../public/skyline.webp'
interface Props {
  title:string,
  description:string,
  buttonText:string,
  buttonDestination:string
}

const VerticalImageTextBox:React.FC<Props> = ({
    title, description,
    buttonText, buttonDestination
  }) => {
    const [scope, scopeAnimate] = useAnimate();

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const data = await res.json();
      setMessage(data.message);
      if (res.ok) setEmail(""); // Clear input if successful
    };
  
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const COLORS = [
        "#00e0ff", // Vibrant cyan blue (base)
        "#00a2e4", // Deep sky blue (base)
        "#0090cc", // Slightly darker blue
        "#0080b3", // Muted ocean blue
        "#4fd3f7", // Soft light blue
        "#87e8ff", // Pastel sky blue
      ];
      
    
    
    
    const color1 = useMotionValue(COLORS[0]);
    const color2 = useMotionValue(COLORS[1]);
  
    const backgroundImage = useMotionTemplate`linear-gradient(45deg,${color1}, ${color2})`
  
  

  
  
  
    const {isMobile} = useGeneralContext()
  
    // Ensure you're transforming the y values based on the scroll position
  
    const inView = useInView(scope,{
     
      amount:!isMobile ? 0.7 : 0.2,
      once:true
    })
  
  
        const handleAnimation = async () => {
         const header = document.getElementById('closing-header')
         const paragraph = document.getElementById('closing-paragraph')
         const button = document.getElementById('closing-button')
  
         if(header){
          await scopeAnimate(header,{y:0,opacity:1})
       
         }
  
         if(paragraph){
          await scopeAnimate(paragraph,{opacity:1},
              {delay:1})
         }
  
         if(button){
          await scopeAnimate(button,{opacity:1},{
              delay:0.5,
              ease:'easeInOut'
              
          },)
         }
        
        }
  
        useEffect(()=> {
          if(inView){
              console.log('in view!')
              handleAnimation()
          }
      },[])
        
  
      useEffect(() => {
          // Animate the colors for the gradient
         
             animate(color1, COLORS, {
              ease: "easeInOut",
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            });
      
             animate(color2, COLORS, {
              ease: "easeInOut",
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            });
          
  
        
      }, []);
  
    
    return (
      <section ref={scope} className=" relative
      py-8
     "
     style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage.src})`,
      backgroundSize: "cover", // Ensures the image covers the container
      backgroundPosition: "center", // Centers the image
    }}
    
        >
       
  
        
  
          {/* Motion heading */}
          {/* <h3 id='closing-header'
  className="text-center relative pb-4  mr-auto font-semibold mb-2
  bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl
  translate-y-[4rem] transition-transform opacity-0"
  style={{
    backgroundImage: "linear-gradient(to right, #00e0ff, #00a2e4, #00e0ff)",
  
  }}>
            
          
            Time to elevate your digital presence
          </h3> */}
  
          <AppearingGradient
          text={title}
          subText=""
          noBottom
          
          />
       
       
  
        {/* Optional image */}
        <Image
          src={brain}
          alt="brain"
          className="w-[40vw] object-contain mx-auto relative z-[4]
          max-w-[420px] max-h-[280px] mt-[-3rem] mb-4
          "
        />
  
        {/* Call to action section */}
        <motion.section 
      

        id='closing-paragraph'
        className="flex flex-col justify-center md:text-lg px-4 relative z-[4] mb-8
        items-center whitespace-pre-line">
   <motion.p
   
   >{description}</motion.p>
  
  
  <section className="flex flex-col  justify-center ">


          <Link
          href={buttonDestination}>
          <motion.button id='closing-button'
          style={{
              backgroundImage
          }}
          
  
          whileHover={{
              scale:1.05
          }}
           className="mx-auto mt-8  px-6 py-3 bg-blue-500 text-white rounded-full
           shadow-lg shadow-all-around
           ">
            {buttonText}
          </motion.button>
          </Link>
          <div className="p-4 border mt-12 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <p>Get new updates on the halifax real estate market!</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
    </section>
          
        </motion.section>
  
      </section>
    );
  };
  


export default VerticalImageTextBox;