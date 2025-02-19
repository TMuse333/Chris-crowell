"use client"

import ApplicationForm from "@/components/contactForm/appliactionForm";
import BigNav from "@/components/navBars/bigNav/bigNav";
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
               
            <InlineWidget url='https://calendly.com/thomaslmusial/30min'/>
            </section>
        </main>
    )
}

export default ContactPage