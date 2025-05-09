import ContactPage from '@/pageComponents/contactPage'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: "Contact Chris Crowell | Halifax Nova Scotia Real Estate",
    description: "Get in touch with Chris Crowell, a top RE/MAX Nova real estate agent in Halifax, Nova Scotia, for expert help with buying or selling your home.",
    keywords: "Chris Crowell, contact real estate agent, Halifax Nova Scotia real estate, RE/MAX agent, Halifax realtor contact",
    openGraph: {
      title: "Contact Chris Crowell | Halifax Nova Scotia Real Estate",
      description: "Reach out to Chris Crowell, a trusted RE/MAX Nova agent in Halifax, Nova Scotia, for personalized real estate services and expert advice.",
      url: "https://www.chris-crowell.ca/contact",
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
        <ContactPage/>
    )
}


export default Page