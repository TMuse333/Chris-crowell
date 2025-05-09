import { Metadata } from "next";

import Homepage from "@/pageComponents/homepage";

export const metadata: Metadata = {
  title: "Web Design Halifax | Focusflow Software",
  description: "Focusflow Software offers top-tier web design Halifax services, combining cutting-edge technology and creativity to deliver custom websites quickly.",
  keywords: "web design halifax, custom web design services, creative web page design, web designer halifax",
  openGraph: {
    title: "Chris Crowell | Real estate agent Halifax Nova Scotia ",
    description: "Experience the fastest and most creative web design Halifax solutions with Focus Flow Software.",
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
