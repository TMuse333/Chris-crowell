"use client"

import ApplicationForm from "@/components/contactForm/appliactionForm";
import React from "react";
import {InlineWidget} from 'react-calendly'

const ContactPage = () => {


    return (
        <main className="w-screen overflow-x-hidden
        bg-gradient-to-tr from-blue-200 to-blue-100">

            <ApplicationForm/>

        </main>
    )
}

export default ContactPage