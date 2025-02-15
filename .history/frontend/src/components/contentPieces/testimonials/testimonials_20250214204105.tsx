import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface TestimonialProps {
    testimonials?: {
        title?: string,
        quote: string,
        author: string,
        effect:string
    }[]
}



const testimonialsData = [
    {
        title: 'First-Time Buyer',
        quote: `As a first-time homebuyer, I was overwhelmed by the process. Chris made everything simple, guiding me step by step and ensuring I got the best deal possible. His patience and knowledge made my experience stress-free and enjoyable.`,
        author: 'B. Garcia',
        effect: 'Bought my dream home with confidence' // Example effect
    },
    {
        title: 'Quick & Smooth Sale',
        quote: `When my family needed to relocate for work, we had to sell our house fast. Chris handled everything seamlessly, from pricing to negotiations. Thanks to his expertise, we sold above asking in just a few days!`,
        author: 'J. Smith',
        effect: 'Sold our home in under a week, above asking price' // Example effect
    },
    {
        title: 'Investment Success',
        quote: `"Chris helped me find the perfect investment property in Halifax. His deep market knowledge and negotiation skills ensured I got a fantastic deal. I’ve already seen great returns, and I’ll definitely be working with him again!"`,
        author: 'A. Johnson',
        effect: 'Secured a high-value investment with great ROI' // Example effect
    },
    {
        title: 'Stress-Free Experience',
        quote: '“Selling my home felt overwhelming until I met Chris. He took care of everything and made sure I got the best possible outcome. Highly recommend him to anyone looking to buy or sell!”',
        author: 'L. Williams',
        effect: 'Sold my home quickly with no hassle' // Example effect
    },
    {
        title: 'Trusted Advisor',
        quote: '“Chris truly cares about his clients. He went above and beyond to help us sell our home and find a new one that was perfect for our growing family. A fantastic experience from start to finish!”',
        author: 'M. Brown',
        effect: 'Found the perfect home while selling ours stress-free' // Example effect
    }
];



const Testimonials: React.FC<TestimonialProps> = ({ testimonials = testimonialsData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };


    return (
        <section className='bg-gradient-to-b from-blue-400 via-blue-400 to-blue-200 border border-white ml-auto mr-auto max-w-[1200px] w-screen 
          relative mb-8 rounded-lg
         h-[550px] sm:w-[90vw]
        '>
            <div className="absolute sm:text-5xl top-[40%] right-0 text-2xl hover:text-blue-200
           hover:scale-[1.15] transition-all"
           onClick={nextTestimonial}>
 <IoIosArrowForward   />
           </div>
          
          <div
          className="absolute top-[40%] left-0 text-2xl
          hover:text-blue-200
          hover:scale-[1.15] transition-all sm:text-5xl" onClick={prevTestimonial}>

  
            <IoIosArrowBack  />
                    </div>
            <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="font-bold mb-4 pl-8 pr-8 mt-8
          text-lg sm:text-xl sm:pl-12 sm:pr-12"
            initial={{ opacity: 0,x: -10 }}
            animate={{ opacity: 1, x:0 }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].quote}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:pr-12 sm:text-xl"
           initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
             >
            {testimonials[currentTestimonial].effect}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="mt-8 pl-6 sm:pl-12 pr-8
          sm:text-lg"
           initial={{ opacity: 0, y:30 }}
            animate={{ opacity: 1, y:0,transition: { delay: 0.7 } }}
             exit={{ opacity: 0 }}>
           -{testimonials[currentTestimonial].author}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:text-lg"
          initial={{ opacity: 0, y:30 }}
          animate={{ opacity: 1, y:0,transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].title}
          </motion.p>
        </AnimatePresence>

        </section>
    );
};

export default Testimonials;