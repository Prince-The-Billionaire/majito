import Carousel from '@/components/Carousel'
import Cocktail from '@/components/Cocktail'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Section2 from '@/components/Section2'
import TheArt from '@/components/TheArt'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {SplitText} from 'gsap/SplitText'
import React from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const page = () => {
  return (
    <div>
      <Hero/>
      <Section2/>
      <Cocktail/>
      <TheArt/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default page