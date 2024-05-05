import { utilityPagesData } from '@/constants/utilityPagesData'
import { CircleChevronUp, Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-gray-900 w-full justify-center text-gray-100 py-16'>
      <div className='w-3/4 flex flex-col space-y-10 xl:space-y-0 xl:flex-row xl:justify-between'>
      <section className='flex flex-col items-center xl:items-start space-y-2'>
        <span className='text-xl font-bold'>AVIATE</span>
        <p className='w-full text-center xl:text-start xl:w-3/4 text-gray-400 text-sm'>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable.</p>
        <div className='py-2'></div>
        <div className='bg-gray-700/50 w-3/4 border-gray-700 border-2 rounded-lg p-6 space-y-4'>
          <div className='flex  flex-col items-center xl:items-start space-y-1 text-sm'>
          <span>Cell:</span>
          <span className='text-gray-400 text-xs'>01234 987654</span>
          <span className='text-gray-400 text-xs'>098765 34621</span>
          </div>
          <div className='flex  flex-col items-center xl:items-start space-y-1 text-sm'>
            <span>Mail:</span>
            <span className='text-gray-400 text-xs'>contact@fitnessfit.com</span>
          </div>
        </div>
      </section>
      <section className='flex  flex-col items-center xl:items-start space-y-4'>
        <span className='text-md sm:text-lg font-bold'>Utility Pages</span>
        <ul className='flex  flex-col items-center xl:items-start space-y-3 text-sm sm:text-sm w-full text-gray-400'>
          {utilityPagesData.map((list, index) => (
           <li key={index}>{list}</li>
          ))}
        </ul>
      </section>
      <section className='flex  flex-col items-center xl:items-start space-y-6'>
        <div className='flex flex-col space-y-2'>
          <span className='text-md sm:text-lg font-bold'>Newsletter</span>
          <input type="email" placeholder='enter your email' className='bg-gray-700/50 border-gray-700 border-2 w-full px-4 py-2' />
          <button className='bg-white text-gray-950 w-1/2 text-sm font-normal py-2'>Subscribe</button>
        </div>
        <div className='flex space-x-2'>
        <Instagram className='w-5' />
        <Facebook className='w-5' />
        <Twitter className='w-5' />
        </div>
        <div className='flex items-center w-full space-x-4 text-gray-400'>
          <div className='border-t-2 border-gray-400 flex-1'></div>
        <CircleChevronUp className='w-6' />
        </div>
      </section>
      </div>
    </div>
  )
}

export default Footer