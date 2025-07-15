"use client"
import { listed, listed2 } from '@/data'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'

const TheArt = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const fadeText = useRef(null)
    const fadeText2 = useRef(null)
    const fadeText3 = useRef(null)
    const fadeText4 = useRef(null)

    useEffect(() => {
        const start = isMobile ? 'top 20%' : 'top top';
        const end = isMobile ? 'bottom center' : 'bottom center';

        const maskedTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#art',
                start: start,
                end: end,
                scrub:1.5,
                pin:true,
            }
        })
        maskedTimeline.to(fadeText.current, {
            opacity:0,
            ease:'power1.inOut',
        })
        .to(fadeText2.current, {
            opacity:0,
            delay:0.5,
            ease:'power1.inOut',
        })
        .to(fadeText3.current, {
            opacity:0,
            delay:0.5,
            ease:'power1.inOut',
        })
        .to(fadeText4.current, {
            opacity:0,
            delay:0.5,
            ease:'power1.inOut',
        })
        .to('#masked-img',{
            scale:1.3,
            maskPosition:'center',
            maskSize:'400%',
            duration:1,
            ease:'power1.inOut',
            borderRadius:'5%'
        })
        .to('#masked', {
            opacity: 1,
            ease: 'power1.inOut',
            delay: 0.5
        })

    })
  return (
    <div id='art' className='w-screen h-screen md:pt-66 flex flex-col items-center justify-center bg-black text-white'>
        <h1 ref={fadeText} className='font-serif md:text-9xl text-3xl text-white/60 '>The Art</h1>
        <h2 ref={fadeText2} className='font-myfont text-xl md:text-4xl mt-4'>Sip-Worthy Perfection</h2>
        {/* <img className='' src={'/images/mask-img.png'}/> */}
        <div className='md:size-[48rem] size-72 rounded-2xl'>
            <img id='masked-img' className='masked-img size-full object-contain' src={'/images/under-img.jpg'} />
        </div>

        <div className='flex flex-row justify-between w-screen md:absolute px-2  md:px-16'>
            <div ref={fadeText3} className='flex flex-col items-start justify-start'>
                {listed.map((item, index) => (
                    <div key={index} className='flex flex-row items-center gap-4 mt-4'>
                        <FaCheckCircle className='text-white size-8' />
                        <p className='text-base max-md:text-xs'>{item}</p>
                    </div>
                ))}
            </div>
            <div ref={fadeText4}>
                {listed2.map((item, index) => (
                    <div key={index} className='flex flex-row items-center gap-4 mt-4'>
                        <FaCheckCircle className='text-white size-8' />
                        <p className='text-base max-md:text-xs'>{item}</p>
                    </div>
                ))}
            </div>
        </div>
        

        <div id='masked' className='mt-24 opacity-0 absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-4 text-center'>
            <p className='font-serif text-3xl'>Made with Craft, Poured with Passion</p>
            <p className='text-sm text-white/70'>This isn't just a drink. It's a carefully crafted moment made just for you</p>
        </div>
    </div>
  )
}

export default TheArt