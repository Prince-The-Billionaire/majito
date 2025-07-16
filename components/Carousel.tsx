"use client"
import React from 'react'
import Image from 'next/image'
import { products } from '@/data'
import { useState } from 'react'


const Carousel = () => {
    const [produce, setProduce] = useState(products[0])
    const handleTabChange = (index:number) => {
        setProduce(products[index])
    }
    const nextone = () => {
        const currentIndex = products.indexOf(produce);
        const nextIndex = (currentIndex + 1) % products.length;
        setProduce(products[nextIndex]);
    }
    const prev = () => {
        const currentIndex = products.indexOf(produce);
        const prevIndex = (currentIndex - 1 + products.length) % products.length;
        setProduce(products[prevIndex]);
    }

  return (
    <div className='w-screen z-70 relative min-h-screen pt-48 md:px-16 px-6 flex flex-col items-center justify-center bg-black text-white'>
        <div className='flex flex-row max-md:flex-wrap gap-6 justify-between w-full md:px-44 px-4 '>
            {products.map((product, index) => (
                <h1 key={index} onClick={() => handleTabChange(index)} className={`p-2  ${produce.name === product.name ? 'opacity-100':' opacity-60' } font-myfont md:text-3xl border-b-1 border-white`}>{product.name}</h1>
            ))}
            
            
        </div>
        <div className='relative z-70 w-full flex items-center justify-center'>
            <img onClick={prev} className='absolute top-[50%]  left-1 object-contain cursor-pointer size-8 md:size-[4rem]' src={'/images/right-arrow.png'}/>
            <Image src={produce.image} alt='drink' width={600} height={600} />
            <img onClick={nextone} className='absolute right-1 top-[50%] object-contain size-8 cursor-pointer md:size-[4rem]' src={'/images/left-arrow.png'}/>
        </div>
        
        
        <div className='flex flex-col md:flex-row md:items-end md:absolute bottom-6 justify-between w-full px-4 md:px-44 mt-8'>
            <div >
                <h5 className='text-lg md:text-sm '>Recipes for:</h5>
                <h2 className=' font-myfont text-xl md:text-5xl text-amber-200'>{produce.name}</h2>
            </div>
            <div>
                <h2 className='font-serif text-2xl md:text-6xl max-w-lg'>{produce.title}</h2>
                <p className='max-w-lg max-md:text-sm'>{produce.description}
                </p>
                <button className='bg-amber-200 text-black px-4 max-md:mb-32 py-2 rounded-lg mt-4 hover:bg-amber-400 cursor-pointer'>Order Now</button>
            </div>
        </div>
        
        <img className='absolute -left-8 bottom-0 object-contain size-48 md:size-[20rem]' src={'/images/slider-left-leaf.png'}/>
        <img className='absolute top-20 md:right-4 right-0 max-md:size-48' src={'/images/slider-right-leaf.png'}/>
    </div>
  )
}

export default Carousel