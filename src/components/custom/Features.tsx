import { featuresData } from '@/constants/featuresData'
import React from 'react'

const Features = () => {
  return (
    <section className='bg-gray-100 w-full rounded-3xl px-6 sm:px-10 py-8 sm:py-16'>
        <div className='flex flex-col xl:flex-row space-y-6 xl:space-y-0 items-center xl:justify-between'>
            {featuresData.map((feature) => (
                <div key={feature.id} className='flex flex-col xl:flex-row items-center space-y-2 xl:space-y-0 xl:space-x-4 w-full'>
                    <div className='bg-black py-1 px-2 sm:p-3 text-gray-200 rounded-full sm:rounded-xl'>
                    <feature.icon className='w-4 lg:w-5 rounded-full' />
                    </div>
                    <div className='flex flex-col items-center xl:items-start space-y-1'>
                        <span className='text-sm sm:text-lg font-semibold'>{feature.title}</span>
                        <p className='text-xs sm:text-sm text-center xl:text-start font-medium'>{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Features