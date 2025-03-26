'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FaAlignLeft, FaTimes } from 'react-icons/fa'
// import logo from '../app/images/images-removebg-preview.png'

function Navbar() {
  const [menuActive, setMenuActive] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const [mobileServiceActive, setMobileServiceActive] = useState(false)
  const [isSticky, setIsSticky] = useState(false) // State for sticky navbar
  const dropdownRef = useRef<HTMLLIElement>(null)

  const handleSubMenu = () => {
    setMenuActive((prev) => !prev)
  }

  const handleMobileMenu = () => {
    setMobileMenuActive((prev) => !prev)
    setMobileServiceActive(false) // Close service menu when toggling mobile menu
  }

  const handleMobileService = () => {
    setMobileServiceActive((prev) => !prev)
  }

  // Close dropdown and menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle Navbar Sticky Background Change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`w-full sticky top-0 z-50 transition-all duration-300 ${isSticky ? 'bg-blue-950' : 'bg-blue-950/50'}`}>
      <nav>
        <div className='flex justify-between items-center px-10 h-16'>
          <div className='logo text-[2.2rem] tracking-wide text-white'>
            Outbit
            {/* <img src={logo.src} alt="logo" /> */}
            </div>
          {/* Desktop Menu */}
          <div className='xl:flex lg:flex md:hidden sm:hidden hidden'>
            <ul className='flex gap-10 text-white uppercase'>
              <li className='cursor-pointer text-lg'>
                <Link className='px-2 py-1' href='/'>
                  Home
                </Link>
              </li>
              <li className='cursor-pointer text-lg'>
                <Link className='px-2 py-1' href='/about'>
                  About
                </Link>
              </li>
              <li className='cursor-pointer text-xl px-2 py-[0.5px] relative' ref={dropdownRef}>
                <button onClick={handleSubMenu} className='cursor-pointer relative uppercase text-lg'>
                  Service's
                </button>
                <ul
                  className={`absolute z-1 left-[-90px] top-12 w-[300px] bg-[#2f416b] flex flex-col gap-3 px-5 transition-all duration-300 ease-in-out ${
                    menuActive ? 'max-h-[500px] py-5 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
                  }`}
                >
                  <li>
                    <Link className='px-2 py-1 text-lg hover:text-black hover:bg-white' href='/service/service-details/web-development' onClick={() => setMenuActive(false)}>
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2 py-1 text-lg hover:text-black hover:bg-white' href='/service/service-details/App-development' onClick={() => setMenuActive(false)}>
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2 py-1 text-lg hover:text-black hover:bg-white' href='/service/service-details/graphics-designing' onClick={() => setMenuActive(false)}>
                      Graphics
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2 py-1 text-lg hover:text-black hover:bg-white' href='/service/service-details/Logo-design' onClick={() => setMenuActive(false)}>
                      Logo Designing
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2 py-1 text-lg hover:text-black hover:bg-white' href='/service/service-details/digital-marketing' onClick={() => setMenuActive(false)}>
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='cursor-pointer text-lg'>
                <Link className='px-2 py-1' href='/blog'>
                  Blog
                </Link>
              </li>
              <li className='cursor-pointer text-lg'>
                <Link className='px-2 py-1' href='/carrier'>
                  Carrier
                </Link>
              </li>
              <li className='cursor-pointer text-lg'>
                <Link className='px-2 py-1' href='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Icon */}
          <div className='text-white xl:hidden lg:hidden md:block sm:block text-2xl hover:scale-125 transition-transform' onClick={handleMobileMenu}>
            {mobileMenuActive ? <FaTimes /> : <FaAlignLeft />}
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-blue-950/90 flex flex-col gap-6 items-center justify-center text-white uppercase text-xl transition-transform ${
            mobileMenuActive ? 'translate-x-0' : 'translate-x-[-100%]'
          } duration-300`}
        >
          <Link href='/' onClick={handleMobileMenu}>
            Home
          </Link>
          <Link href='/about' onClick={handleMobileMenu}>
            About
          </Link>
          <button onClick={handleMobileService} className='text-lg uppercase'>
            Services
          </button>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileServiceActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className='flex flex-col items-center gap-3'>
              <Link href='/service/service-details/web-development' onClick={handleMobileMenu}>
                Web Development
              </Link>
              <Link href='/service/service-details/App-development' onClick={handleMobileMenu}>
                App Development
              </Link>
              <Link href='/service/service-details/graphics-designing' onClick={handleMobileMenu}>
              Graphics
              </Link>
              <Link href='/service/service-details/Logo-design' onClick={handleMobileMenu}>
                Logo Designing
              </Link>
              <Link href='/service/service-details/digital-marketing' onClick={handleMobileMenu}>
                Digital Marketing
              </Link>
            </ul>
          </div>
          <Link href='/blog' onClick={handleMobileMenu}>
            Blog
          </Link>
          <Link href='/carrier' onClick={handleMobileMenu}>
            Carrier
          </Link>
          <Link href='/contact' onClick={handleMobileMenu}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
