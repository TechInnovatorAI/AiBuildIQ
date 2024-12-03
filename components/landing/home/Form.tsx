"use client";
import Link from "next/link";
import topImage from "@/public/assets/home/Logo_13.jpg"
import Image from "next/image"

const Form = () => {
  return (
    <>
      <div className="mt-24"></div>
      <div className="relative flex items-center justify-center h-[90vh]">
        <Image
          src={topImage}
          alt="Logo"
          className="absolute inset-0 -z-10 w-full"
          width={500}
          height={300}
          style={{ objectFit: 'cover', height: '100%' }}
        />
        <div className="text-center max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-white text-2xl md:text-3xl mb-6  ">
            Transforming Real estate lending
          </h1>

          <h2 className="text-white text-5xl md:text-6xl font-semibold mb-4  ">
            AI-Driven Solutions for Thriving Lending Ecosystem
          </h2>

          <p className="text-white text-lg mb-12  max-w-2xl mx-auto ">
            Revolutionizing how brokers and borrowers seamlessly navigate the lending process with AI-powered precision.
          </p>

          <div className="sm:flex gap-4 justify-center items-center">
            <Link
              href="/funding-request"
              className="px-8 py-3 bg-[#004F8F] border rounded-full hover:bg-white-800 text-white transition-colors duration-200"
            >
              Funding Request
            </Link>

            <Link
              href="/solutions"
              className="px-8 py-3 bg-white  rounded-full hover:bg-white-100 text-[#004F8F] transition-colors duration-200  "
            >
              Explore our solutions
            </Link>
          </div>
        </div>
        <div className="absolute right-2 md:right-8">
          <svg width="13" height="109" viewBox="0 0 13 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.58079" cy="5.92845" r="5.72533" fill="white" />
            <circle opacity="0.3" cx="6.58079" cy="30.2136" r="5.72533" fill="white" />
            <circle opacity="0.3" cx="6.58079" cy="54.4988" r="5.72533" fill="white" />
            <circle opacity="0.3" cx="6.58079" cy="78.7839" r="5.72533" fill="white" />
            <circle opacity="0.3" cx="6.58079" cy="103.071" r="5.72533" fill="white" />
          </svg>
        </div>
        <div className="absolute bottom-4">
          <svg width="38" height="51" viewBox="0 0 38 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.7" d="M1.0625 31.6328L18.9898 49.3917L36.9349 31.6328" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.5" d="M1.0625 16.4883L18.9898 34.2472L36.9349 16.4883" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.2" d="M1.0625 1.3457L18.9898 19.1046L36.9349 1.3457" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Form;
