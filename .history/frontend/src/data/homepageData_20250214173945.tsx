import dollarSignSvg from '../../public/dollar-sign.svg'
import houseSvg from '../../public/house.svg'


export const skyline = '/skyline.mp4'

export const dollarSign = dollarSignSvg

export const house = houseSvg

export const carouselHeroData = {
    mainHeader: "Your Trusted Real Estate Expert",
    titleText: "John Doe - Realtor",
    descriptionText:
      "Helping buyers and sellers navigate the real estate market with ease. Whether you're looking to buy, sell, or invest, I'm here to guide you every step of the way.",
    buttonText: "Get in Touch",
  };

export const lorem60 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nobis laborum porro voluptas molestias nihil, eum ea velit quae, perspiciatis blanditiis dolorum culpa unde est eos earum a rem eveniet accusantium doloremque! Molestias illum inventore quae adipisci esse unde tempore, deleniti sed culpa nulla, sint placeat asperiores commodi? Libero ut tempora ad deserunt beatae facilis cum esse magni quaerat. Quasi nihil perspiciatis culpa minus, voluptates inventore saepe repudiandae reiciendis accusantium fuga exercitationem vero, eligendi voluptatibus nam neque, cumque explicabo vitae tenetur expedita accusamus placeat. Corporis perspiciatis, eius minus debitis ex, ad ducimus, error neque id itaque eligendi quibusdam hic pariatur!"

  export const imageTextBoxData = {
    src: '/place-holder.jpg', // Replace with your image source
    alt: 'Lorem Ipsum Team',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  
    reverse: false, // Optional: You can set it to true if needed to adjust the layout
    title: 'Lorem Ipsum Team',
    buttonLink: '/about', // Link to the About page
    buttonText: 'Learn More'
  };
  

  export const imageTextBoxData2 = {
    src: '/chris-back.webp', // Replace with your image source
    alt: 'Lorem Ipsum Team',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  
    reverse: false, // Optional: You can set it to true if needed to adjust the layout
    title: 'Find a home',
    buttonLink: '/about', // Link to the About page
    buttonText: 'Learn More'
  };


  export const experienceCardData = {
    title: 'Lorem Ipsum Dolor – Sit Amet Consectetur',
    src: '/chris-side.webp',
    alt: 'Lorem Ipsum Experience',
    description: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n" +
  
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  
    aspects: [
        'Lorem Ipsum Treatments',
        'Dolor Sit Amet Relaxation',
        'Seamless & Effortless Booking',
        'Personalized Consectetur Experience',
    ],
    link: '',
    reverse: false,
    aspectHeader: 'Why Choose Lorem Ipsum?',
  };
  

  export const parallaxTextContentData = {
    src: '/place-holder.jpg',
    alt: 'Lorem Ipsum Team',
    isVideo: false,
    muted: false,
    // thumbnail: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    heading: 'Lorem Ipsum Heading',
    subHeading: 'Lorem Ipsum Subheading'
  };

  import React from "react";
  import Image from "next/image";
  
  const RealtorSelection = () => {
    const data = {
      subTitle: "Why Choose Chris?",
      title: "The Realtor Who Puts You First",
      src: "/chris-seated.webp",
      alt: "Chris - Your Trusted Realtor",
      description:
        "Finding the perfect home or selling your property requires expertise, strategy, and dedication. Chris brings years of experience in the real estate market, ensuring a seamless and stress-free experience. Download Chris' free PDF guide for exclusive insights on buying and selling smarter.",  
      listAspects: [
        {
          src: "/market-expertise.jpg",
          alt: "Market Expertise",
          title: "Unmatched Market Expertise",
          description:
            "Chris understands local trends, pricing, and negotiations to get you the best deal.",
        },
        {
          src: "/client-focused.jpg",
          alt: "Client Focused",
          title: "Client-Centered Approach",
          description:
            "Your goals come first. Chris provides personalized service tailored to your needs.",
        },
        {
          src: "/negotiation-skills.jpg",
          alt: "Negotiation Icon",
          title: "Strong Negotiator",
          description:
            "Chris ensures you maximize value, whether you're buying or selling.",
        },
        {
          src: "/free-guide.jpg",
          alt: "Free PDF Guide",
          title: "Exclusive Free Guide",
          description:
            "Chris offers a free PDF with expert tips on navigating the real estate market.",
        },
      ],
    };
  
    return (
      <section className="bg-[#f0e9e1] py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-main-color text-lg font-semibold">{data.subTitle}</h3>
          <h2 className="text-3xl font-bold text-button-color mt-2">{data.title}</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
            <Image
              src={data.src}
              alt={data.alt}
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <p className="text-lg text-[#6d4c41] max-w-md">{
  



  
  
  
  