import {ThreeBoxHeroProps} from 'focusflow-components'


export const sellingHero: ThreeBoxHeroProps = {
  h1: "Sell Your Home in Halifax, Nova Scotia",
  h2: "Simplified and Stress-Free Real Estate Experience",
  pTag:
    "Ready to sell your home quickly and at the best price? Learn how expert strategies, market knowledge, and personalized support can make your sale a success.",
  boxData: [
    {
      title: "Strategic Listing",
      description:
        "Get a powerful listing with professional staging, photography, and marketing designed to attract the right buyers.",
    },
    {
      title: "Expert Market Insight",
      description:
        "Benefit from local expertise to price your home accurately and competitively in the Halifax market.",
    },
    {
      title: "Skilled Negotiation",
      description:
        "Work with a seller who can manage offers, counteroffers, and closing details to maximize your return.",
    },
  ],
  // gradient: {
  //   color1: "#e5e7eb",
  //   color2: "#00bfff", // Tailwind bg-gray-200
  // },
  boxBgColor: "bg-white",
  textColor: "text-black",
  boxTextColor: "text-black",
};


export const sellingHerobanner = {
  src: '/skyline.webp',
  title: "Sell Your Home in Halifax, Nova Scotia - Simplified and Stress-Free!",
  description: "Ready to sell your home quickly and at the best price? This page shows you how to leverage expert strategies, local market knowledge, and personalized service to get your property sold with ease. Let’s turn your sale into a success!",
  buttonText: 'Learn How to Sell Your Home',
  destination: '/contact'
}

export const sellingIntro = {
  src: '/document.svg', // Same src as requested
  alt: 'Expert Real Estate Seller',
  description: `Selling a home is not just about putting up a "For Sale" sign—it's about working with someone who understands the market, the emotional aspects of selling, and how to get the best value for your property. A skilled seller can expertly navigate pricing, marketing, and negotiations, ensuring you get the most out of your sale.

  Whether it's crafting the perfect listing, staging your home, or managing offers, choosing the right professional to guide you can make all the difference. Trusting a good seller means you’re not just selling a house, you’re achieving your real estate goals with confidence and ease.`,
  
  reverse: false, // Set to false to keep the default layout
  title: 'Why Working with a Skilled Seller Matters',
  buttonLink: '/contact', // Link to contact page to get in touch
  buttonText: 'Contact Me for a Consultation'
};



export const slideShowSellingData = [
  {
    title: 'Step 1: Initial Consultation',
      src: "/prepare-home.webp",
    alt: "Initial consultation with REALTOR®️",
    description: "Meet with your REALTOR®️ to discuss your goals, timeline, and expectations. We’ll do a walkthrough of your home, assess its condition, and discuss how to make the selling process smooth and stress-free.",
    isVideo: false
  },
  {
    title: 'Step 2: Determine the Right Listing Price',
    src: "/market-analysis.jpg",
    alt: "Market analysis for the right listing price",
    description: "I’ll conduct a Comparative Market Analysis (CMA) to determine your home’s value. Together, we’ll choose a pricing strategy to attract buyers while maximizing your return on investment.",
    isVideo: false
  },
  {
    title: 'Step 3: Prepare Your Home for Market',
src: "/prepare-home.webp",
    alt: "Preparing your home for the market",
    description: "First impressions matter. We’ll help declutter, clean, and stage your home to make it shine. I’ll also guide you through any needed repairs and arrange for professional photos and videos to showcase your home.",
    isVideo: false
  },
  {
    title: 'Step 4: Paperwork & Required Forms',
    src: "/paperwork.jpg",
    alt: "Required paperwork for selling a home",
    description: "Before listing, you’ll complete important documents such as the Seller Designated Brokerage Agreement, Property Disclosure Statement, and Residential Listing Input Form to ensure everything is in order.",
    isVideo: false
  },
  {
    title: 'Step 5: Launch Your Listing',
src: "/listing.png",
    alt: "Launching your home listing",
    description: "Once your home is ready, we’ll go live on MLS®️, complete with professional photos and compelling descriptions. We’ll execute a marketing strategy to get your property the exposure it deserves.",
    isVideo: false
  },
  {
    title: 'Step 6: Reviewing Offers',
src: "/negotiation2.png",
    alt: "Reviewing offers on the home",
    description: "When offers come in, I’ll present each one and help you negotiate terms, price, and conditions. Together, we’ll accept the best offer to move forward with the sale.",
    isVideo: false
  },
  {
    title: 'Step 7: Fulfilling Buyer Conditions',
    src: "/buyer-conditions.jpg",
    alt: "Buyer fulfilling conditions for home sale",
    description: "The buyer will work to satisfy conditions like financing, inspections, and insurance approval. We’ll navigate through this process, responding to inspection findings or negotiating necessary adjustments.",
    isVideo: false
  },
  {
    title: 'Step 8: Legal & Closing Preparations',
    src: "/closing-prep.jpg",
    alt: "Preparing for closing day",
    description: "Prepare for the final steps by hiring a real estate lawyer, signing sale documents, and organizing your move. I’ll ensure everything is in order for a smooth closing.",
    isVideo: false
  },
  {
    title: 'Step 9: Closing Day',
   src: "/close-deal.webp",
    alt: "Closing day for home sale",
    description: "On closing day, your lawyer will finalize the sale, transfer the funds, and register the deed. Once everything is settled, you’ll hand over the keys to the buyer and officially complete the sale!",
    isVideo: false
  }
];


export const sellingCircleSteps = {
  title: "Steps to Selling Your Home",
  description: "A step-by-step breakdown of what to expect when selling your home—from our initial consultation all the way to closing day.",
  boxColor: 'bg-gradient-to-b from-[#0077b3] to-blue-300',
  boxTextColor: 'text-white',
  steps: [
    {
      number: 1,
      title: 'Step 1: Initial Consultation',
      description: "Meet with your REALTOR®️ to discuss your goals, timeline, and expectations. We’ll do a walkthrough of your home, assess its condition, and discuss how to make the selling process smooth and stress-free.",
      boxTextColor: 'text-white'
    },
    {
      number: 2,
      title: 'Step 2: Determine the Right Listing Price',
      description: "I’ll conduct a Comparative Market Analysis (CMA) to determine your home’s value. Together, we’ll choose a pricing strategy to attract buyers while maximizing your return on investment.",
      boxTextColor: 'text-white'
    },
    {
      number: 3,
      title: 'Step 3: Prepare Your Home for Market',
      description: "First impressions matter. We’ll help declutter, clean, and stage your home to make it shine. I’ll also guide you through any needed repairs and arrange for professional photos and videos to showcase your home.",
      boxTextColor: 'text-white'
    },
    {
      number: 4,
      title: 'Step 4: Paperwork & Required Forms',
      description: "Before listing, you’ll complete important documents such as the Seller Designated Brokerage Agreement, Property Disclosure Statement, and Residential Listing Input Form to ensure everything is in order.",
      boxTextColor: 'text-white'
    },
    {
      number: 5,
      title: 'Step 5: Launch Your Listing',
      description: "Once your home is ready, we’ll go live on MLS®️, complete with professional photos and compelling descriptions. We’ll execute a marketing strategy to get your property the exposure it deserves.",
      boxTextColor: 'text-white'
    },
    {
      number: 6,
      title: 'Step 6: Reviewing Offers',
      description: "When offers come in, I’ll present each one and help you negotiate terms, price, and conditions. Together, we’ll accept the best offer to move forward with the sale.",
      boxTextColor: 'text-white'
    },
    {
      number: 7,
      title: 'Step 7: Fulfilling Buyer Conditions',
      description: "The buyer will work to satisfy conditions like financing, inspections, and insurance approval. We’ll navigate through this process, responding to inspection findings or negotiating necessary adjustments.",
      boxTextColor: 'text-white'
    },
    {
      number: 8,
      title: 'Step 8: Legal & Closing Preparations',
      description: "Prepare for the final steps by hiring a real estate lawyer, signing sale documents, and organizing your move. I’ll ensure everything is in order for a smooth closing.",
      boxTextColor: 'text-white'
    },
    {
      number: 9,
      title: 'Step 9: Closing Day',
      description: "On closing day, your lawyer will finalize the sale, transfer the funds, and register the deed. Once everything is settled, you’ll hand over the keys to the buyer and officially complete the sale!",
      boxTextColor: 'text-white'
    }
  ]
};



  export const documentsData = {
    subTitle: "Essential Documents for Selling Your Home",
    title: "Key Documents You’ll Need During the Selling Process",
    src: "/document.svg",
    alt: "Documents for Selling Your Home",
    description:
      "Selling your home involves important paperwork to ensure everything is in order. Here are the 4 crucial documents you’ll need to navigate the process smoothly.",
    listAspects: [
      {
        src: "/document.svg",
        alt: "Listing Agreement",
        title: "Listing Agreement",
        description:
          "A contract between you and your realtor outlining the terms and conditions of the sale, including the commission structure and duration of the agreement.",
      },
      {
        src: "/document.svg",
        alt: "Property Disclosure Statement",
        title: "Property Disclosure Statement",
        description:
          "This document provides information about the condition of your home, including any known issues or required repairs, ensuring transparency with potential buyers.",
      },
      {
        src: "/document.svg",
        alt: "Purchase Agreement",
        title: "Purchase Agreement",
        description:
          "Once an offer is made, this contract outlines the terms, including the sale price, contingencies, and other conditions, which both you and the buyer must sign.",
      },
      {
        src: "/document.svg",
        alt: "Closing Documents",
        title: "Closing Documents",
        description:
          "At closing, you’ll need documents that finalize the sale, including title transfer documents and financial forms to ensure the proper distribution of funds.",
      },
    ],
  };

  export const sellingQuestions = [
    {
      title: "What’s my home worth in today’s market?",
      description: "Your home’s value depends on location, condition, size, and recent sales nearby. I offer a free Comparative Market Analysis (CMA) to determine your home’s true market value."
    },
    {
      title: "How long will it take to sell my home?",
      description: "Most well-priced and well-marketed homes in Halifax sell within 1–4 weeks, depending on the market and property type."
    },
    {
      title: "What do I need to do to prepare my home for sale?",
      description: "Declutter, clean, touch up paint, and improve curb appeal. I’ll walk you through a prep checklist and can recommend trusted stagers or cleaners if needed."
    },
    {
      title: "How much commission do you charge?",
      description: "My commission is competitive and reflects the full-service marketing and negotiation support I provide. Let’s chat and I’ll break down exactly what’s included."
    },
    {
      title: "What are the costs involved in selling my home?",
      description: "Typical seller costs include: REALTOR®️ commission, legal fees, mortgage payout/discharge fees, repairs or staging (optional), and moving expenses."
    },
    {
      title: "When is the best time to list my home in Halifax?",
      description: "Spring and early summer are generally the busiest, but with the right strategy, homes sell year-round. I’ll advise based on current market activity and your personal timeline."
    },
    {
      title: "Do I need to be present for showings?",
      description: "No, in fact, it’s often better if you're not. Buyers feel more comfortable exploring a home freely. I’ll handle everything and keep you updated on feedback."
    },
    {
      title: "What if my home doesn’t sell?",
      description: "If a home isn’t selling, we’ll revisit pricing, marketing, or presentation. I proactively monitor listing performance and make adjustments if needed."
    },
    {
      title: "Can I still sell if I haven’t found my next home yet?",
      description: "Yes—many sellers add a 'Seller to find suitable housing' clause or negotiate a flexible closing date to give themselves time to buy after selling. Always better to have a plan and a home to go to!"
    },
    {
      title: "What happens if something is found during the buyer’s inspection?",
      description: "The buyer may request repairs, a credit, or a price reduction. I’ll guide you through negotiations to keep the deal on track."
    }
];


  export const sellingCloser = {
    title: "Ready to Sell Your Home with Confidence?",
    description: `Selling your home is a big decision, and I'm here to make it as seamless as possible. With a deep understanding of the local market and a focus on getting you the best value, I’ll guide you through every step of the process. Whether it’s pricing your home right, preparing it for sale, or negotiating offers, I’m committed to your success.
  
    With years of experience and a passion for helping sellers achieve their goals, I combine strategic marketing with personalized service to ensure a smooth transaction. Your satisfaction is my top priority, and I’ll work tirelessly to get you the best deal possible.
  
    Let’s get your home sold quickly and for the right price. I’m ready to help you take the next step and get started on your journey.`,
    buttonText: "Get Your Free Home Evaluation",
    buttonDestination: "/contact",
  };

 
  
  
  
  
  
  