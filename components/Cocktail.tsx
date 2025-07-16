"use client"
import { impression, profiles } from '@/data'
import React, { useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaStar, FaStarHalf } from 'react-icons/fa6'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Cocktail = () => {
    const mainTextRef = React.useRef<HTMLHeadingElement>(null);
    const sentenceRef = React.useRef<HTMLParagraphElement>(null);
    const newRef = React.useRef<HTMLDivElement>(null);
    const profileRef = React.useRef<HTMLDivElement>(null);
    const gridRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const splitText = new SplitText(mainTextRef.current, { type: "words" });
        const sentenceSplit = new SplitText(sentenceRef.current, { type: "lines" });
        gsap.from(splitText.words, {
            duration: 1.5,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger:{
                trigger: mainTextRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        
        gsap.from(sentenceSplit.lines, {
            duration: 1.5,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.5,
            scrollTrigger:{
                trigger: sentenceRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(newRef.current, {
            duration: 1.5,
            opacity: 0,
            x: 50,
            delay:0.5,
            ease: "power2.out",
            scrollTrigger:{
                trigger: newRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(profileRef.current, {
            duration: 1.5,
            opacity: 0,
            x: -50,
            delay:0.5,
            ease: "power2.out",
            scrollTrigger:{
                trigger: profileRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(gridRef.current, {
            duration: 1.5,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: "power2.out",
            delay: 1,
            scrollTrigger:{
                trigger: gridRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    })
  return (
    <div className='relative w-screen min-h-screen flex flex-col items-center justify-center gap-4 bg-black md:px-16 px-2 z-40'>
        <div className='flex flex-row max-md:flex-col justify-between mt-10 md:px-16 w-full'>
            <div className='flex flex-col'>
                <h3 className='font-sans text-black bg-white w-fit rounded-full px-4 py-2 '>Best Cocktails</h3>
                <h1 ref={mainTextRef} className='font-myfont text-3xl md:text-6xl mt-4 max-w-xl'>Where every detail matters-from muddle to garnish</h1>
            </div>

            <div className='max-w-xl'>
                <p ref={sentenceRef} className='font-sans max-w-lg max-md:text-sm leading-loose'>
                Every cocktail we serve is a reflection of our obsession with detail - from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable
                </p>
                <div className='flex flex-row gap-1 md:gap-4 mt-4'>
                    <div ref={newRef} className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-1'>
                            {[...Array(4)].map((_, index) => (
                                <FaStar key={index}  />))}
                            <FaStarHalf/>
                        </div>
                        <p className='text-2xl'>4.5/5</p>
                        <p className='text-white/70 max-md:text-xs'>More than +12000 customers</p>
                    </div>
                    <div className='border-l p-2 border-white/70'>
                        <div ref={profileRef} className='rounded-full flex-row flex p-3 bg-white/30 -space-x-4'>
                            {profiles.map((profile, index) => (
                                <img key={index} src={`/images/${profile}`} alt={`Profile ${index + 1}`} className='md:size-16 size-10 rounded-full border-2 border-white object-cover' /> ))}  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        <div  className='grid grid-cols-1 px-2 md:grid-cols-4 justify-center gap-4 mt-8 md:px-16'>
            <img src={'/images/abt1.png'} alt='Cocktail 1' className='w-full h-64 object-cover rounded-lg' />
            <div className='rounded-2xl p-2 bg-gradient-to-b from-white/40 to-transparent'>
                <p className='font-myfont text-2xl p-2 border-b border-white/70'>Crafted to Impress</p>
                <div>
                    {impression.map((text, index) => (
                        <div key={index} className='flex items-center gap-2 p-2'>
                            <FaCheckCircle className='text-white' />
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <img src={'/images/abt2.png'} className='md:col-span-2'/>
            <img src={'/images/abt3.png'} alt='Cocktail 2' className='md:col-span-3 w-[60rem] object-cover rounded-2xl' />
            <img src={'/images/abt4.png'} alt='Cocktail 3' className='w-[40rem] h-[16rem] rounded-2xl  object-cover ' />
        </div>
    </div>
  )
}

export default Cocktail