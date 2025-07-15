import { cocktaildata, machadata} from '@/data'
import Image from 'next/image'
import React from 'react'

const Section2 = () => {
    
  return (
    <div className='min-h-screen relative w-screen flex max-md:justify-center items-center md:px-16 z-40'>
            
            <div className='flex flex-row max-md:mt-[50rem] w-[90vw] max-md:flex-col justify-between'>
                <div>
                    <h2 className='md:text-2xl  tex-lg font-sans'>Most popular cocktails:</h2>
                    {cocktaildata.map((item, index) => (
                    <div key={index} className='flex flex-row md:w-[20rem] justify-between gap-10 mt-4'>
                    <div>
                        <p className='font-myfont text-amber-200 text-xl md:text-3xl'>{item.name}</p>
                        <p>{item.country+' | '+item.region}</p>
                    </div>  
                    <p className='md:text-2xl text-center font-sans '> -{item.price}</p>  
                    </div>
                    ))}
                </div>
                <div>
                    <h2 className='md:text-2xl text-lg font-sans max-md:mt-4'>Most loved mocktails:</h2>
                    {machadata.map((item, index) => (
                    <div key={index} className='flex flex-row md:w-[20rem] justify-between gap-10 mt-4'>
                    <div>
                        <p className='font-myfont text-amber-200  md:text-3xl'>{item.name}</p>
                        <p className='max-md:text-sm'>{item.country+' | '+item.region}</p>
                    </div>  
                    <p className='md:text-2xl text-center font-sans '> -{item.price}</p>  
                </div>
                ))}
                </div>
            </div>
            <div className='absolute max-md:hidden bottom-0 md:-bottom-16 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent flex justify-between  '>
                <Image src={'/images/cocktail-left-leaf.png'} alt='cocktail left' width={300} height={300} className='max-md:size-48'/>
                <Image src={'/images/cocktail-right-leaf.png'} alt='cocktail right' width={300} height={300} className='max-md:size-48'/>
            </div>
            
        </div>
  )
}

export default Section2