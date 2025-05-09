import { Metadata } from "next";

import Homepage from "@/pageComponents/homepage";

export const metadata: Metadata = {
  title: "Chris Crowell | Real estate agent Halifax Nova Scotia",
  description: "Chris Crowell is a top remax nova real estate agent in halifax, nova scotia, with over a decade of sales experience",
  keywords: "Chris Crowell, Real estate agent Halifax Nova Scotia, remax agent",
  openGraph: {
    title: "Chris Crowell | Real estate agent Halifax Nova Scotia",
    description: "Chris Crowell is a top remax nova real estate agent in halifax, nova scotia.",
    url: "https://www.chris-crowell.ca",
    images: [
      {
        url: "https://www.focusflowsoftware.com/media/focusFlow-logo.png",
        width: 1200,
        height: 630,
        alt: "Focus Flow Software - Creative and Fast Web Design"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'FocusFlow Software | Web Design Halifax'
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
  // manifest:'/site.webmanifest'
}

export default function Home() {
  return (
   <Homepage/>
  );
}
