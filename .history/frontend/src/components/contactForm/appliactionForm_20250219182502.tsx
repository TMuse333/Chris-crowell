"use client"

import React, { useEffect, } from "react";
import { applicationQuestions } from "@/data/contactData";
import InputForm from "./inputForm";
import logo from '../../../public/logo.webp'
import Image from "next/image";
// import axios from 'axios'
import { useGeneralContext } from "@/context/context";
// import chris from '../../../public/chris-main.webp'
import {Check} from 'lucide-react'

const ApplicationForm = () => {

    const aspects = [
        "Get expert advice on buying and selling.",
        "Access exclusive property listings.",
        "Receive a free home valuation estimate.",
        "Navigate negotiations with confidence.",
        "Stay informed on market trends.",
        "Get personalized investment insights.",
        "Save time with a dedicated realtor.",
        "Ensure a smooth closing process."
      ];
      

    const { applicationFormState } = useGeneralContext()

    // name, email, phone, address,
    //     city,province,reason,time

    useEffect(()=>{
        // console.log(
        //     'application',
        //     applicationFormState
        // )
    },[applicationFormState])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

    
        // try {
        //     const response = await axios.post('/api/sendEmail', {
        //         name: applicationFormState.name,
        //         email: applicationFormState.email,
        //         phone: applicationFormState.phone,
        //         city: applicationFormState.city,
        //         province: applicationFormState.province,
        //         reason: applicationFormState.reason,
        //         time: applicationFormState.time,
        //         address: applicationFormState.address,

        //     });
        //     // console.log(response.data);
        //     alert('Form submitted successfully!');
        //     setApplicationFormState({ name: '', email: '', phone: '', projectDetails: '' });
        // } catch (error) {
        //     // console.log('username',process.env.EMAIL_USER);
        //     // console.log('password',process.env.GMAIL_PASSWORD)
        //     console.error('Error submitting form:', error);
        //     alert('Failed to submit form.');
        // }
    };

    return (
        <section className="w-full  ">
            
        <section className="w-screen flex flex-col ml-auto
        flex-col-reverse
        mr-auto md:flex-row  mb-8 
         justify-around max-w-[1200px]
        items-center
           ">
            
            <section className=" mb-[4rem] ">
                {/* <h3 className="text-2xl text-center
                mt-4 mb-4 text-black">
                    Youth Bar
                </h3> */}
               <Image
               src={logo}
               alt='logo'
               className='w-[40vw] mx-auto
               max-w-[445px]
               max-h-[550px]'
               width={1200}
               height={630}
               />
               {/* <Image
               src={chris}
               alt='logo'
               className='w-[40vw] mx-auto
               max-w-[445px] object-cover
               rounded-2xl
               max-h-[550px]'
               width={1200}
               height={630}
               /> */}

               <ul className="text-black">
                {aspects.map((aspect,index) => (
                    <li className="mb-2 flex items-center" key={index}>
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {aspect}
                  </li>
                ))}
               </ul>

            </section>
            <section className="
            mt-12">
                <h3 className="mt-4 mb-[-2rem] text-black text-left pl-6 max-w-[455px] mx-auto md:pl-7 md:text-lg">
                    Fill out the following form for any questions you may have
                    or book an appointment  <button onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}

                className="bg-[#00bfff] p-3 rounded-xl text-white
                mt-4">
                    Schedule online meeting
                </button>
                </h3>
                <InputForm
                questions={applicationQuestions}
                />
                <button onClick={handleSubmit}
                className="bg-[#00bfff] p-3 rounded-xl
                ml-9 mb-8">
                    Submit form
                </button>


            </section>
        </section>
        </section>
    )
}


export default ApplicationForm