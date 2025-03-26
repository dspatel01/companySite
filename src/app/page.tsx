import Hero from '@/component/Hero'
import img from '../app/images/hero.jpg'
import Link from 'next/link'
import { GrGraphQl } from "react-icons/gr";
import { MdComputer } from "react-icons/md";
import { LiaDigitalTachographSolid } from "react-icons/lia";

export default function HomePAge () {
  return (
    <>
      <Hero />
      <section>
        <div className='mt-[-90px] xl:px-20 md:px-10 sm:px-10 px-10 z-0 mb-10'>
          <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 text-center gap-10 '>
            <div className='bg-white h-48 hover:scale-105 hover:h-56 hover:mx-[-10px] hover:mt-[-20px] transition-all cursor-pointer rounded-4xl shadow-lg hover:z-9 z-9 shadow-black/40 flex flex-col items-center justify-center'>
            <GrGraphQl className='absolute  overflow-hidden text-[10rem] z-0 text-gray-400/20'/>
              <h1 className='text-[1.8rem] font-bold text-blue-950 z-1'>
                Graphics Designing
              </h1>
              <p className='px-5 pt-1 text-gray-600 z-1'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                alias suscipit doloribus magnam, dolorem eos?
              </p>
            </div>
            <div className='bg-white xl:mx-[-10px] lg:mx-[-10px] md:mx-[10px] sm:mx-[10px] mx-[10px] xl:h-56 lg:h-56 md:h-48 sm:h-48 h-48 scale-105 mt-[-20px] rounded-4xl shadow-lg shadow-black/40 flex flex-col items-center justify-center'>
            <MdComputer className='absolute  overflow-hidden text-[12rem] z-0 text-gray-400/20'/>
              <h1 className='text-[1.8rem] font-bold text-blue-950'>
                Web/App Development
              </h1>
              <p className='px-5 pt-1 text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                alias suscipit doloribus magnam, dolorem eos?
              </p>
            </div>
            <div className='bg-white h-48 hover:scale-105 hover:h-56 hover:mx-[-10px] hover:mt-[-20px] transition-all cursor-pointer rounded-4xl shadow-lg hover:z-9 z-9 shadow-black/40 flex flex-col items-center justify-center'>
            <LiaDigitalTachographSolid className='absolute text-[12rem] z-0 text-gray-400/20'/>
             
              <h1 className='text-[1.8rem] font-bold text-blue-950'>
                Degital Marketing
              </h1>
              <p className='px-5 pt-1 text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                alias suscipit doloribus magnam, dolorem eos?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='px-10 my-10 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  xl:gap-10 lg:gap-10 md:gap-10 sm:gap-5 gap-0 bg-gray-50 pt-20'>
          <div className='h-[80%] w-full'>
            <img
              src={img.src}
              className='w-full h-[100%] object-cover rotate-180'
              alt='about'
            />
          </div>
          <div>
            <h1 className='text-lg mt-5 text-justify text-gray-600'>
              <strong>Outbit Technologies</strong> is a leading IT solutions
              provider with <strong>7 years</strong> of experience in the
              industry. We specialize in{' '}
              <strong>
                web designing, app development, customization services, digital
                marketing, and graphic design.
              </strong>{' '}
              Our expertise extends to creating
              <strong>
                {' '}
                logos, banners, animations, and advanced graphic
              </strong>{' '}
              effects to enhance brand identity.
              <br /> <br /> With a strong commitment to innovation and client
              satisfaction, we deliver cutting-edge digital solutions tailored
              to your business needs.
            </h1>
            <div className='flex justify-start mt-5'>
              <button className='relative cursor-pointer shadow-lg bg-green-500 shadow-black text-black px-10 py-2 mt-5 rounded-full overflow-hidden group'>
                <span className='absolute inset-0 bg-green-800 transition-transform scale-0 group-hover:scale-100 duration-300 ease-in'></span>
                <span className='relative z-10 group-hover:text-white transition-colors duration-300'>
                  <Link href='/about'>Learn more</Link>
                </span>
              </button>
              {/* <button className='cursor-pointer border  px-10 py-2 mt-5 rounded-4xl'>
               
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
