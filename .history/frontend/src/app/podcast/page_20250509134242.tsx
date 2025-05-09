

import PodcastPage from "@/pageComponents/podcastPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Chris Crowell’s Real Estate Podcast | Halifax Nova Scotia",
    description: "Listen to Chris Crowell’s podcast for expert real estate insights, tips, and market updates in Halifax, Nova Scotia. Join the top RE/MAX Nova agent for valuable advice.",
    keywords: "Chris Crowell, real estate podcast, Halifax Nova Scotia podcast, RE/MAX agent, home buying and selling tips",
    openGraph: {
      title: "Chris Crowell’s Real Estate Podcast | Halifax Nova Scotia",
      description: "Join Chris Crowell, a top RE/MAX Nova agent, on his podcast for real estate tips, market insights, and expert advice in Halifax, Nova Scotia.",
      url: "https://www.chris-crowell.ca/podcast",
      images: [
        {
          url: "https://www.chris-crowell.ca/podcast-og.png",
          width: 1200,
          height: 630,
          alt: "Chris Crowell’s Real Estate Podcast | Halifax, Nova Scotia"
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
        <PodcastPage/>
    )
}

export default Page

