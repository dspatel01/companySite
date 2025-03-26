"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const contentData = [
  {
    title1: " Outbit Technologies",
    title: " Transforming Ideas into Digital Excellence",
    description: "We provide website development, digital marketing, graphic design, logo creation, and IT training to help businesses grow in the digital era."
  },
  {
    title: "Innovative IT Solutions",
    description: "Empowering businesses with cutting-edge technology and creative solutions for a better digital presence."
  },
  {
    title: "Your Digital Growth Partner",
    description: "From branding to development, we help you scale your business with tailored IT solutions."
  }
];

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="w-full h-[90vh] cover relative top-[-65px] overflow-hidden">
      <style>{`
        @keyframes upDown1 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        
        @keyframes upDown2 {
          0% { transform: translateY(0); }
          50% { transform: translateY(5px); }
          100% { transform: translateY(0); }
        }
        
        @keyframes floatingShapes {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-50px) rotate(100deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>

      {/* Background Floating Shapes */}
      <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center overflow-hidden">
        <div className="absolute w-40 h-40 bg-blue-400 rounded-full opacity-30 animate-[floatingShapes_6s_infinite]"></div>
        <div className="absolute w-32 h-32 bg-gray-500 rounded-full opacity-30 top-20 right-10 animate-[floatingShapes_8s_infinite_reverse]"></div>
        <div className="absolute w-80 h-80 bg-purple-500 rounded-full opacity-30 bottom-20 left-10 animate-[floatingShapes_5s_infinite]"></div>
      </div>

      <div className="transition-all delay-150 w-[100%] h-[100%] flex flex-col items-center justify-center relative z-10">
        <h1 className="logo text-white mx-auto font-bold mt-20 xl:text-[3.5rem]/18 lg:text-[3rem]/18 md:text-[2.6rem]/18 sm:text-[2.3rem]/12 text-[2.3rem]/12 px-10 text-center ease-in-out transition-all">
          <span className={contentData[currentIndex].title1 && "bg-blue-100/30 pl-5 pr-1 py-2 rounded-lg shadow-black shadow-2xl mr-3"}>
          {contentData[currentIndex].title1}
          </span>
          {contentData[currentIndex].title}
        </h1>
        <p className="text-gray-200 text-center mt-5 tracking-wider not-italic text-lg xl:px-50 lg:px-50 md:px-20 sm:px-10 px-10">
        {contentData[currentIndex].description} 
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => setIsOpen(true)}
            className="relative cursor-pointer text-white border px-10 py-2 mt-5 rounded-full overflow-hidden group"
            style={{ animation: "upDown1 2s infinite ease-in-out" }}
          >
            <span className="absolute inset-0 bg-blue-500 transition-transform scale-0 group-hover:scale-100 duration-300 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Get a Free Quote
            </span>
          </button>
          <button 
            className="relative cursor-pointer text-white border px-10 py-2 mt-5 rounded-full overflow-hidden group"
            style={{ animation: "upDown2 2s infinite ease-in-out" }}
          >
            <span className="absolute inset-0 bg-green-500 transition-transform scale-0 group-hover:scale-100 duration-300 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              <Link href="/contact">Contact Us</Link>
            </span>
          </button>
        </div>
      </div>

      {/* Quote Modal */}
      {isOpen && (
        <div className="fixed z-10 inset-0 top-10 bg-black/70 bg-opacity-50 flex items-center justify-center">
          <div className="bg-blue-950 p-6 rounded-lg w-96 mt-10">
            <h2 className="text-xl font-bold mb-4 text-white text-center">Request a Free Quote</h2>
            <form>
              <input type="text" placeholder="Your Name" className="bg-white rounded-lg w-full border p-2 mb-2" required />
              <input type="email" placeholder="Your Email" className="bg-white rounded-lg w-full border p-2 mb-2" required />
              <input type="tel" placeholder="Your Phone" className="bg-white rounded-lg w-full border p-2 mb-2" required />
              <textarea placeholder="Project Details" className="bg-white rounded-lg w-full border p-2 mb-2" required></textarea>
              <div className="flex justify-between gap-5">
                <button type="submit" className="bg-blue-500 w-[50%] text-white px-4 py-2 rounded">Submit</button>
                <button type="button" onClick={() => setIsOpen(false)} className="w-[50%] bg-red-500 rounded text-white px-4 py-2">Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
