import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { LuMapPin } from 'react-icons/lu'
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoLinkedin
} from 'react-icons/io5'

import { IoMdArrowDropright } from 'react-icons/io'

export default function Footer () {
  return (
    <>
      <div className='cover w-full px-10 pt-20'>
        <div className='grid xl:grid-cols-4  lg:grid-cols-4 md::grid-cols-2 sm::grid-cols-1 grid-cols-1  gap-6 text-white'>
          <div className=' flex flex-col gap-2'>
            <h1 className='text-[2.5rem] font-bold text-blue-100'>Outbit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quos labore vel dolor illo blanditiis.
            </p>
            <div className='flex items-center text-md mt-5'>
              <FaPhoneAlt className='mr-2 text-2xl text-blue-200' />{' '}
              <span className=''>+91-9264954484</span>
            </div>
            <div className='flex items-center text-md'>
              <IoIosMail className='mr-2 text-3xl text-blue-200' />
              <span className=''>pateldileep290492@gmail.com</span>
            </div>
            <div className='flex items-start text-md'>
              <LuMapPin className='mr-2 text-5xl text-blue-200' />
              <span className='capitalize'>
                noida sector-62 Uttar predash, pin code: 201301
              </span>
            </div>
          </div>

          <div className='flex flex-col xl:items-center lg:items-center md:items-center sm:items-start items-start '>
            <h1 className='text-2xl'>Quick Links</h1>
            <ul className='flex flex-col mt-5 gap-3 text-white capitalize'>
              <li className='cursor-pointer text-md flex items-center'>
                <IoMdArrowDropright className='text-2xl' />
                <Link
                  className='px-2 py-1 hover:text-black hover:bg-white'
                  href='/'
                >
                  Home
                </Link>
              </li>
              <li className='cursor-pointer text-md flex items-center'>
                <IoMdArrowDropright className='text-2xl' />
                <Link
                  className='px-2 py-1 hover:text-black hover:bg-white'
                  href='/about'
                >
                  About
                </Link>
              </li>

              <li className='cursor-pointer text-md flex items-center'>
                <IoMdArrowDropright className='text-2xl' />
                <Link
                  className='px-2 py-1 hover:text-black hover:bg-white'
                  href='/blog'
                >
                  Blog
                </Link>
              </li>
              <li className='cursor-pointer text-md flex items-center'>
                <IoMdArrowDropright className='text-2xl' />
                <Link
                  className='px-2 py-1 hover:text-black hover:bg-white'
                  href='/carrier'
                >
                  Carrier
                </Link>
              </li>
              <li className='cursor-pointer text-md flex items-center'>
                <IoMdArrowDropright className='text-2xl' />
                <Link
                  className='px-2 py-1 hover:text-black hover:bg-white'
                  href='/contact'
                >
                  Contact
                </Link>
              </li>
              <li className='cursor-pointer text-md flex items-center'>
                <IoMdArrowDropright className='text-2xl' />
                <Link
                  className='px-2 py-1 hover:text-black hover:bg-white'
                  href='/contact'
                >
                  FAQ'S
                </Link>
              </li>
              <li className='cursor-pointer text-md flex items-center'>
                <IoMdArrowDropright className='text-2xl' />
                <Link
                  className='px-2 py-1 hover:text-black hover:bg-white'
                  href='/contact'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h1 className='text-2xl'>Quick Links</h1>
            <ul className='flex flex-col mt-5 gap-3 text-white capitalize'>
              <li className='flex items-center'>
              <IoMdArrowDropright className='text-2xl' />
              <Link
                  className='px-2 py-1 text-md hover:text-black hover:bg-white'
                  href='/service/service-details/web-development'
                >
                  Web Development
                </Link>
              </li>
              <li className='flex items-center'>
              <IoMdArrowDropright className='text-2xl' />
                <Link
                  className='px-2 py-1 text-md hover:text-black hover:bg-white'
                  href='/service/service-details/App-development'
                >
                  App Development
                </Link>
              </li>
              <li className='flex items-center'>
              <IoMdArrowDropright className='text-2xl' />
                <Link
                  className='px-2 py-1 text-md hover:text-black hover:bg-white'
                  href='/service/service-details/graphics-designing'
                >
                  Graphics
                </Link>
              </li>
              <li className='flex items-center'>
              <IoMdArrowDropright className='text-2xl' />
              <Link
                  className='px-2 py-1 text-md hover:text-black hover:bg-white'
                  href='/service/service-details/Logo-design'
                >
                  Logo Designing
                </Link>
              </li>
              <li className='flex items-center'>
              <IoMdArrowDropright className='text-2xl' />
              <Link
                  className='px-2 py-1 text-md hover:text-black hover:bg-white'
                  href='/service/service-details/digital-marketing'
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className=' '>
            <h1 className='text-2xl'>NewsLetter</h1>
            <div className='mt-5'>
              <input
                type='email'
                placeholder='Enter Your Email'
                className='text-black pl-3 text-center outline-none shadow-2xl rounded-xl py-3 w-full bg-white'
              />
              <button className='text-black pl-3 rounded-4xl py-2 w-full bg-white mt-3 hover:bg-blue-950 shadow-2xl shadow-black cursor-pointer hover:text-white'>
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <hr className='text-white mt-5' />
        <div className='w-full h-16 flex justify-between items-center text-white'>
          <div>
            <p>© Copyright 2025 Outbit All Rights Reserved. </p>
          </div>
          <div className='flex items-center justify-center mt-2 sm:mt-0'>
            <a
              href='https://wa.me/919264954484'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer mx-2 text-green-400 text-lg sm:text-xl md:text-2xl'
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer mx-2 text-pink-400 text-lg sm:text-xl md:text-2xl'
            >
              <IoLogoInstagram />
            </a>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer mx-2 text-blue-400 text-lg sm:text-xl md:text-2xl'
            >
              <IoLogoFacebook />
            </a>
            <a
              href='https://www.linkedin.com/in/'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer mx-2 text-blue-400 text-lg sm:text-xl md:text-2xl'
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
