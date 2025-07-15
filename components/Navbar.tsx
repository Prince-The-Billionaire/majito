"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const navref = useRef<HTMLElement>(null)

  useEffect(() => {
    const navTween = gsap.timeline({
      scrollTrigger:{
        trigger:navref.current,
        start:'bottom top',

      }
    })

    navTween.fromTo(navref.current,{
      backgroundColor: 'transparent',
    },{
      backgroundColor:'#00000050',
      duration:1,
      backgroundFilter: 'blur(10px)',
      ease:'power1.inOut',
    })
  },[])
  
  return (
    <nav ref={navref} className='flex flex-row max-md:flex-col w-full max-md:items-center pt-2 z-100 backdrop-blur-2xl  max-md:mb-4 fixed max-md:min-h-14 md:justify-between md:px-12 '>
      <div className='flex flex-row items-center justify-center gap-2 md:p-4'>
        <Image src={'/images/logo.png'} alt='logo' width={50} height={50} className='max-md:size-8 '/>
        <p className='font-myfont text-2xl text-center '>Velvet Pour</p>
      </div>
        <ul className='flex flex-row max-md:gap-4 max-md:mt-1 font-sans max-md:text-sm items-center'>
          <li className='md:p-4'>Cocktails</li>
          <li className='md:p-4'>AboutUs</li>
          <li className='md:p-4'>Contact</li>
          <li className='md:p-4'>The Art</li>
        </ul>
    </nav>
  )
}

export default Navbar