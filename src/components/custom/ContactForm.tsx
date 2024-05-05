'use client'

import { FormDataType } from '@/lib/utils'
import React, { useRef } from 'react'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast()
  
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return;

    const formData = new FormData(e.currentTarget)

    const data: FormDataType = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

   try {
    const response = await fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })

    if (response.ok) {
      formRef.current.reset();
      toast({
        title: "Submission Successful",
        description: "Thank you for reaching out! Your form has been submitted successfully. We will review your message and get back to you as soon as possible.",
      })
    } else {
      console.error('Failed to submit form:', response.statusText);
    }
   } catch (e) {
    console.error('Error submitting form:', e);
   }
  }

  return (
    <section className='col-span-2 lg:col-span-1 w-full bg-gray-100 px-10 py-12 sm:py-16 rounded-xl space-y-2'>
        <span className='text-md sm:text-xl lg:text-2xl font-bold'>Send Us a Message</span>
        <p className='text-blue-600 text-[8px] sm:text-xs font-medium'>Your email address will not be published *</p>
        <form ref={formRef} className='flex flex-col space-y-4 sm:space-y-6 py-4 sm:py-6' onSubmit={handleFormSubmit}>
            <input autoComplete='off' type="text" id="fullName" name='fullName' placeholder='your full name' className='bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 border-2 text-[10px] sm:text-sm focus:outline-gray-300 border-gray-300 rounded-lg' />
            <input autoComplete='off' type="email" name="email" id="email" placeholder='e-mail address' className='bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 border-2 text-[10px] sm:text-sm focus:outline-gray-300 border-gray-300 rounded-lg' />
            <input autoComplete='off' type="text" placeholder='subject' id='subject' name='subject' className='bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 border-2 text-[10px] sm:text-sm focus:outline-gray-300 border-gray-300 rounded-lg' />
            <textarea autoComplete='off' name="message" id="message" placeholder='message' className='bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 border-2 text-[10px] sm:text-sm focus:outline-gray-300 h-24 min-h-24 max-h-24 border-gray-300 rounded-lg'></textarea>
            <button type="submit" className='py-2 full lg:w-1/3 text-[10px] sm:text-sm font-medium bg-gray-950 text-gray-100'>Send Now</button>
        </form>
    </section>
  )
}

export default ContactForm