import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex relative flex-col text-center max-md:text-sm items-center py-12 justify-center bg-black text-white p-8 gap-4'>
        <h1 className='font-serif text-3xl md:text-5xl'>Where to Find Us</h1>
        <h2 className='font-sans text-center text-sm md:text-lg'>Visit Our Store</h2>
        <p className='font-sans text-center md:text-2xl'>456, Paq Balod. #406, Los Angeles, CA 90112</p>
        <h2 className='font-sans text-center md:text-lg'>Contact Us</h2>
        <p className='font-sans md:text-2xl'>(555) 987-6543</p>
        <p className='font-sans md:text-2xl'>hello@majito.com</p>
        <h2 className='font-sans text-lg'>Open Every Day</h2>
        <p className='font-sans md:text-2xl'>Mon-Thu: 11:00am - 12am</p>
        <p className='font-sans md:text-2xl'>Fri-Sat: 11:00am - 2am</p>
        <p className='font-sans md:text-2xl'>Sun: 11:00am - 11pm</p>
        <p className='font-sans md:text-2xl'>©  Majito. All rights reserved.</p>
        <p className='font-sans md:text-2xl'>Socials</p>
        <div className='flex flex-row gap-4 text-2xl'>
            <FaInstagram/>
            <FaX/>
            <FaFacebook/>
        </div>
        <img src={'/images/footer-drinks.png'} className='absolute right-0 bottom-0 max-md:size-24 object-contain'/>
        <img src={'/images/footer-left-leaf.png'} className='absolute left-0 bottom-0 max-md:size-24 object-contain'/>
        <img src={'/images/footer-right-leaf.png'} className='absolute top-0 right-0 max-md:size-24 object-contain'/>
    </div>
  )
}

export default Footer