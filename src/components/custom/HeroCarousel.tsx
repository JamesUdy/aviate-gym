'use client'

import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { heroCarouselImageData } from '@/constants/heroCarouselImageData'
import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import Autoplay from 'embla-carousel-autoplay'
import HeroContent from './HeroContent'

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState<number>(1)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
  }, [current])

  const handleCurrentImageChange = (index: number) => {
    setCurrent(index)
    
    if(api) api.scrollTo(index - 1);
  }
  
  return (
    <section className='w-full relative'>
      <Carousel setApi={setApi} className="w-full" opts={{align: "center", loop: true}} plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
      <CarouselContent className='w-full rounded-3xl'>
        {heroCarouselImageData.map((item) => (
          <CarouselItem key={item.id} className='w-full'>
            <div className="hidden sm:block w-full">
            <AspectRatio ratio={6 / 3}>
            <Image src={item.image} alt={`Image for ${item.id}`} fill className='object-fill w-full rounded-3xl' />
            </AspectRatio>
            </div>
            <div className="w-full block sm:hidden">
            <AspectRatio ratio={4 / 3}>
            <Image src={item.image} alt={`Image for ${item.id}`} fill className='object-fill w-full rounded-3xl' />
            </AspectRatio>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    <section className='absolute bottom-6 right-6 sm:bottom-10 sm:right-16'>
      <div className='flex space-x-2'>
        {heroCarouselImageData.map((item) => (
          <div key={item.id} onClick={() => handleCurrentImageChange(item.id)} className={`w-2 h-2 sm:w-3 lg:w-4 lsm:h-3 lg:h-4 rounded-full hover:cursor-pointer ${current === item.id ? "bg-white" : 'bg-gray-400'}`}></div>
        ))}
      </div>
    </section>
    <HeroContent />
    </section>
  )
}

export default HeroCarousel