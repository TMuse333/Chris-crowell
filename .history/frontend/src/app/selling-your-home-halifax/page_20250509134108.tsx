import SellingPage from "@/pageComponents/sellingPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Sell Your Home with Chris Crowell | Halifax Nova Scotia",
    description: "Sell your home in Halifax, Nova Scotia, with Chris Crowell, a top RE/MAX Nova real estate agent. Get expert advice and maximize your sale with over a decade of experience.",
    keywords: "Chris Crowell, sell your home Halifax, Nova Scotia real estate, RE/MAX agent, home selling Halifax",
    openGraph: {
      title: "Sell Your Home with Chris Crowell | Halifax Nova Scotia",
      description: "Chris Crowell, a trusted RE/MAX Nova agent, provides expert guidance to sell your home in Halifax, Nova Scotia, for the best value.",
      url: "https://www.chris-crowell.ca/selling-your-home",
      images: [
        {
          url: "https://www.chris-crowell.ca/chris-main.png",
          width: 1200,
          height: 630,
          alt: "Chris Crowell | RE/MAX Nova helping home sellers in Halifax, Nova Scotia"
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
        <SellingPage/>
    )
}

export default Page