import BuyingPage from '@/pageComponents/buyingPage'

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Buy a Home with Chris Crowell | Halifax Nova Scotia Real Estate",
    description: "Work with Chris Crowell, a top RE/MAX Nova real estate agent in Halifax, Nova Scotia, to find your dream home. With over a decade of experience, Chris offers expert guidance for home buyers.",
    keywords: "Chris Crowell, buy a home Halifax, Nova Scotia real estate, RE/MAX agent, home buying Halifax",
    openGraph: {
      title: "Buy a Home with Chris Crowell | Halifax Nova Scotia Real Estate",
      description: "Chris Crowell, a trusted RE/MAX Nova agent, helps you navigate the Halifax real estate market to find the perfect home.",
      url: "https://www.chris-crowell.ca/buy-home",
      images: [
        {
          url: "https://www.chris-crowell.ca/chris-main.png",
          width: 1200,
          height: 630,
          alt: "Chris Crowell | RE/MAX Nova helping home buyers in Halifax, Nova Scotia"
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
        <BuyingPage/>
    )
}

export default Page