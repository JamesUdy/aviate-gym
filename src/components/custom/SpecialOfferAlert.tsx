import React from 'react'
import { X } from "lucide-react";

const SpecialOfferAlert = () => {
  return (
    <section className="flex items-center justify-center space-x-1 sm:space-x-4 py-4 px-1 sm:px-4 lg:px-0 bg-gray-200 w-full font-semibold text-[8px] sm:text-xs lg:text-md relative">
        <p className='w-2/3 sm:w-1/2 xl:w-1/3'>Special 🎉 online Ghost-squad Transformation training</p>
        <button className="border-black border rounded-full py-0 sm:py-1 px-2 sm:px-4 text-[8px] sm:text-[10px] lg:text-sm">1 spot left this month</button>
        <a href="#" className="underline underline-offset-4 text-[8px] sm:text-[10px] lg:text-sm">Freeze your spot now</a>
        <span className="absolute right-0 sm:right-10 cursor-pointer"><X className="w-3 sm:w-4 lg:w-5" /></span>
      </section>
  )
}

export default SpecialOfferAlert