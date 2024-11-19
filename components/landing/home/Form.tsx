"use client";
import Link from "next/link";
import topImage from "@/public/assets/home/Logo_13.jpg"
import Image from "next/image"

const Form = () => {
  return (
    <>
        <div className="mt-24"></div>
    <div className="relative min-h-screen flex items-center justify-center">
          <Image src={topImage} alt="Logo" className="absolute inset-0 -z-10 w-full " style={{objectFit: 'cover', height: '100%'}} />
      <div className="text-center max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-white text-2xl md:text-3xl mb-6 font-clash-display ">
        Transforming Real estate lending
        </h1>
        
        <h2 className="text-white text-5xl md:text-6xl font-semibold mb-4 font-clash-display ">
        AI-Driven Solutions for Thriving Lending Ecosystem
        </h2>
        
        <p className="text-white text-lg mb-12  max-w-2xl mx-auto font-clash-display">
        Revolutionizing how brokers and borrowers seamlessly navigate the lending process with AI-powered precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/funding-request"
            className="px-8 py-3 bg-[#004F8F] border rounded-lg hover:bg-white-800 text-white rounded-lg transition-colors duration-200 font-clash-display dark:bg-[#FF5555] dark:hover:bg-[#be5555]"
          >
            Funding Request
          </Link>
          
          <Link
            href="/solutions"
            className="px-8 py-3 bg-white  border rounded-lg hover:bg-white-100 text-black border-2 border-black rounded-lg transition-colors duration-200  font-clash-display dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white/10"
          >
            Explore our solutions
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Form;
