import ContactForm from '@/components/custom/ContactForm'
import { Separator } from "@/components/ui/separator"

const Contact = () => {
  return (
    <div className='grid grid-cols-2 items-center w-full sm:px-16 gap-10 py-10 sm:py-16'>
      <section className='col-span-2 lg:col-span-1 w-full flex flex-col space-y-4 sm:space-y-8'>
        <div className='flex flex-col space-y-4'>
        <div className='flex flex-col space-y-1'>
          <span className='text-blue-600 text-[10px] sm:text-sm tracking-widest font-semibold'>WELCOME TO  AVIATE</span>
          <span className='text-lg sm:text-xl lg:text-3xl font-bold'>Get In Touch With Us</span>
        </div>
        <p className='w-full text-[10px] sm:text-sm font-medium text-gray-600'>If You Have Any Feedback Or Questions About Our Clubs, Our Website, Or Our Services In General, Please Contact Us By Filling Out The Form.</p>
        </div>
        <div className='flex flex-col space-y-2 sm:space-y-4 w-fit'>
          <span className='text-sm sm:text-lg lg:text-xl font-medium'>Open Hours</span>
          <Separator className="bg-gray-400" />
          <div className='flex flex-col space-y-2 text-[10px] sm:text-sm text-gray-600'>
            <div className='flex space-x-2'><strong className='text-black font-semibold'>Mon – Fri: </strong><span>08.00 AM to 09.00 PM</span></div>
            <div className='flex space-x-2'><strong className='text-black font-semibold'>Sat: </strong><span>09.00 AM To 06.00 PM</span></div>
            <div className='flex space-x-2'><strong className='text-black font-semibold'>Sun: </strong><span>09.00 AM To 02.00 PM</span></div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  )
}

export default Contact