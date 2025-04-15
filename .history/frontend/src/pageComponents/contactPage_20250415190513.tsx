"use client"

import ApplicationForm from "@/components/contactForm/appliactionForm";
import GoogleMap from "@/components/contentPieces/googleMap/googleMap";
import ContactCard from "@/components/footer/contactCard/contactCard";
import Footer2 from "@/components/footer/footer";
import BigNav from "@/components/navBars/bigNav/bigNav";
import { contactData } from "@/data/homepageData";
import React from "react";
import {InlineWidget} from 'react-calendly'

const ContactPage = () => {


    return (
        <main className="w-screen overflow-x-hidden
        bg-gradient-to-tr from-blue-200 to-blue-100">
<BigNav
excludedLink="Contact"
/>
            <ApplicationForm/>
            <section id='calendar'>
               
            <InlineWidget url='https://calendly.com/chrisc_yournetworkrealtor/book-initial-client-consultation'/>
            </section>'
        <GoogleMap
        />
            {/* <ContactCard
            {...contactData}
            /> */}
            <Footer2
            excludedLink="Contact"
            />
        </main>
    )
}

export default ContactPage