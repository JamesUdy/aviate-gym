import { navbarData } from '@/constants/navbarData'
import { CircleArrowRight } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <section className='w-full flex justify-between'>
        <span className='website-logo text-2xl sm:text-3xl font-semibold'>AVIATE GYM</span>
        <div className='items-center hidden sm:flex space-x-4 text-sm lg:text-md'>
        {navbarData.map((item) => (
            <a href="/" key={item.id} className='text-gray-600 hover:text-black font-semibold first-of-type:text-gray-950'>{item.label}</a>
        ))}
        </div>
        <button className='flex items-center space-x-2 text-[10px] sm:text-xs lg:text-sm font-medium bg-black text-gray-100 rounded-full px-2 py-1'>
            <span>BE A MEMBER</span>
            <CircleArrowRight />
        </button>
    </section>
  )
}

export default Navbar