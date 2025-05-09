import AboutPage from "@/pageComponents/aboutPage";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Chris Crowell | Halifax Nova Scotia Real Estate Agent",
    description: "Learn about Chris Crowell, a top RE/MAX Nova real estate agent in Halifax, Nova Scotia, with over a decade of experience helping clients buy and sell homes.",
    keywords: "Chris Crowell, about Chris Crowell, Halifax Nova Scotia real estate, RE/MAX agent, real estate agent Halifax",
    openGraph: {
      title: "About Chris Crowell | Halifax Nova Scotia Real Estate Agent",
      description: "Meet Chris Crowell, a trusted RE/MAX Nova real estate agent in Halifax, Nova Scotia, dedicated to exceptional service for home buyers and sellers.",
      url: "https://www.chris-crowell.ca/about-chris-crowell",
      images: [
        {
          url: "https://www.chris-crowell.ca/chris-main.png",
          width: 1200,
          height: 630,
          alt: "Chris Crowell | RE/MAX Nova Real Estate Agent in Halifax, Nova Scotia"
        }
      ],
      type: "website",
      locale: "en_US",
      siteName: "Chris Crowell | Real Estate Agent Halifax Nova Scotia"
    },
    icons: {
      icon: ["/favicon.ico?v=4"]
    },
    // manifest: '/site.webmanifest'
  }

const Page = () => {


    return (
        <AboutPage/>
    )
}

export default Page