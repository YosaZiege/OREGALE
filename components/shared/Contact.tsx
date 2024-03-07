import React from 'react'
import { FiPhone } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
    <section className='wrapper bg-contain bg-center py-5 md:py-10  w-full flex flex-row justify-between mt-12' id="contact">
        <div className='gap-4 mr-2'    >
        <h1 className='h1-bold'>Entrez en contact.</h1>
        <p>Visitez notre restaurant et découvrez les saveurs les plus raffinées dans une ambiance confortable.</p>
        </div>
        <div className='gap-4 mr-12'>
        <div className='flex flex-row mb-2'>
        <FiPhone fontSize="1.5em"className='mr-4'/>
         <p className='font-bold'> Téléphone</p>
         </div>
         <div className='ml-12'>
        <span className='text-gray-500 underline'>+212 6-69077747</span><br></br>
        <span className='text-gray-500 underline'>+212 5-22524853</span>
        </div>
        <div className='flex flex-row mb-2'>
        <FaLocationDot fontSize="1.5em"className='mr-4'/>
        <p className='font-bold'>Location</p>
        </div>
        <div className='ml-12'>
        <span  className='text-gray-500'>Andalous Bouskoura</span><br />
        <span className='text-gray-500'>1191 Boulevard 2mars Inara</span><br />
        </div>
        </div>

    </section>
    <iframe className="wrapper" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.3579829448536!2d-7.604817325209872!3d33.544074144393655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda632a31992cbbd%3A0x85012a06a160ffe!2s1191%20Av.%202%20Mars%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1709640228634!5m2!1sfr!2sma" width="100%" height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Contact
