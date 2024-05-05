import { CircleArrowRight } from 'lucide-react'
import React from 'react'

const HeroContent = () => {
  return (
    <section className='absolute bottom-2 sm:bottom-10 pr-4  sm:pr-0 sm:w-3/4 text-white pl-2 sm:pl-10 xl:pl-16 flex flex-col space-y-6 sm:space-y-10 xl:space-y-16'>
        <div className='flex flex-col space-x-1 sm:space-y-2 lg:space-y-1 xl:space-y-8'>
        <span className='text-md sm:text-xl lg:text-3xl xl:text-[56px] uppercase font-bold tracking-wide'>Fitness isn&apos;t a hobby</span>
        <span className='text-md sm:text-xl lg:text-3xl xl:text-[56px] uppercase font-bold tracking-wide'>it&apos;s a lifestyle</span>
        <p className='text-[8px] sm:text-sm lg:text-md xl:text-lg tracking-tight'>Get fit fast with Aviate&apos;s certified personal trainers. Enjoy cardio, strength, and weight training with top equipment. Join now and make Impossible...</p>
        </div>
        <div className='flex space-x-2 sm:space-x-4'>
        <button className='flex items-center space-x-1 sm:space-x-2 text-[6.4px] sm:text-xs lg:text-md xl:text-lg font-semibold bg-white text-gray-950 rounded-full p-1 sm:p-2'>
            <span>BE A MEMBER</span>
            <div className='w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-gray-500 text-white'>
                <CircleArrowRight className='w-full h-full' />
            </div>
        </button>
        <button className='flex items-center space-x-1 sm:space-x-2 text-[6.4px] sm:text-xs lg:text-md xl:text-lg font-semibold border-white border-2 text-gray-100 rounded-full p-1 sm:p-2'>
            <span>LEARN MORE</span>
            <div className='w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-white text-gray-600'>
                <CircleArrowRight className='w-full h-full' />
            </div>
        </button>
        </div>
    </section>
  )
}

export default HeroContent