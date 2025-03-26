import Wave from '@/component/Wave'
// import React, { useEffect, useState } from "react";
// import axios from "axios";
import { FaRegAddressCard } from 'react-icons/fa6'
import { FaPhoneFlip } from 'react-icons/fa6'
import { SiMinutemailer } from 'react-icons/si'

export default function Contact () {
  return (
    <>
      <Wave
        title1='Our Contact Us'
        subtitle='innovative websites, digital marketing, and design solutions—transforming ideas into digital success!'
      />

      <div>
        <div className='min-h-[60vh] xl:py-2 md:py-4 sm:py-4 py-4 bg-transparent text-gray-700 flex items-center justify-center'>
          <div className='w-full max-w-5xl mx-auto p-4 pt-0 lg:p-10'>
            {/* Header */}
            <div className='text-center xl:mb-12 md:mb-8 sm:mb-4 mb-4'>
              <h1 className='xl:text-4xl md:text-4xl sm:text-2xl text-2xl font-bold  italic font-serif'>
                For More Enquiry Contact Us
              </h1>
            </div>

            <div className='flex flex-col lg:flex-row gap-8'>
              {/* Left Section */}
              <div className='flex-1 space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='bg-blue-950 p-3 rounded-full'>
                    <FaRegAddressCard className='text-[1.5rem] text-white' />
                  </div>
                  <div>
                    <h2 className='font-bold text-lg'>Address</h2>
                    <p>
                      M/S G.L.B.M, H-4, Sector D-1, Tronica City,
                      Ghaziabad-210103
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='bg-blue-950 p-3 rounded-full'>
                    <FaPhoneFlip className='text-[1.5rem] text-white' />
                  </div>
                  <div>
                    <h2 className='font-bold text-lg'>Phone</h2>
                    <p>+91-8383977648</p>
                    <p>+91-9212790910</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='bg-blue-950 p-3 rounded-full'>
                    <SiMinutemailer className='text-[1.5rem] text-white' />
                  </div>
                  <div>
                    <h2 className='font-bold text-lg'>Email</h2>
                    <p>glrs.smiley@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Right Section: Contact Form */}
              <div className='flex-1 bg-white p-6 rounded-lg shadow-2xl shadow-black/80'>
                <h2 className='text-2xl font-bold mb-4'>Send Message</h2>
                <form
                  className='space-y-4'
                  // onSubmit={handleSubmit}
                >
                  <input
                    type='text'
                    name='name'
                    placeholder='Full Name'
                    // value={formData.name}
                    // onChange={handleChange}
                    className='w-full p-3 rounded-lg text-gray-900 outline focus:ring-2 focus:ring-red-500'
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    // value={formData.email}
                    // onChange={handleChange}
                    className='w-full p-3 rounded-lg text-gray-900 outline focus:ring-2 focus:ring-red-500'
                    required
                  />
                  <input
                    type='number'
                    name='mobile'
                    placeholder='Mobile number'
                    // value={formData.mobile}
                    // onChange={handleChange}
                    className='w-full p-3 rounded-lg text-gray-900 outline focus:ring-2 focus:ring-red-500'
                    required
                  />
                  <textarea
                    name='message'
                    placeholder='Type your message...'
                    // value={formData.message}
                    // onChange={handleChange}
                    className='w-full p-3 rounded-lg text-gray-900 outline focus:ring-2 focus:ring-blue-500'
                    required
                  ></textarea>
                  <button
                    type='submit'
                    className='w-full py-3 text-white bg-[#496184] rounded-lg cursor-pointer font-bold hover:bg-[#223043] transition'
                  >
                    Send
                  </button>
                  {/* {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                  {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>} */}
                </form>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </>
  )
}
