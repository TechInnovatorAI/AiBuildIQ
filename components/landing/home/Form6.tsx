"use client"
import React from 'react';
import Image from "next/image"
import leftImage from "@/public/assets/home/3a0edb327d59be865befef5f98552f0f.png"
import rightImage from "@/public/assets/home/ac4ae482ba5eed6c0825bcf34417c0d6.png"

const letters = [
    {
        title: "AI-Enhanced Decision-Making",
        description: "Our platform uses advanced AI models to assess loan proposals, predict risk, and optimize matchmaking, giving lenders a competitive edge."
    },
    {
        title: "Full-Spectrum Real Estate Lending Solution",
        description: "Unlike traditional platforms, we offer end-to-end support for various loan types, from fix-and-flip to bridge loans, tailored to private lending need."
    },
    {
        title: "Market and Property Data Integration",
        description: "Real-time property valuations, economic indicators, and predictive analytics help users make data-driven decisions."
    },
    {
        title: "Customizable Workflows for Diverse Lending Needs",
        description: "With flexible options for customizing workflows, lenders can adapt the platform to meet specific requirements, making it a versatile tool."
    }
]

const Form6 = () => {
  return (
    <div className="whiteBackground py-[5%]">
      <div className="flex items-center py-[5%]">
        <div className="w-1/3 items-center mx-auto">
          <Image src={leftImage} alt="Image" className="mx-auto border rounded-lg" layout="fixed" width={500} height={400} style={{clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'}} />
        </div>
        <div className="w-2/3">
            <div className="py-4">
                <h1 className="text-gray-300">Lorem Ipsum dolor</h1>
                <h1 className="text-[#004F8F] font-bold text-2xl">AIBuild IQ is best at</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          {letters.map((letter, index) => (
            <div key={index} className="">
              <li className="font-bold">{letter.title}</li>
              <p>{letter.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[16%]">
        <div className="flex bg-[#004F8F] rounded-lg items-center px-[10%]">
          <div className="p-16 w-[70%]">
            <h1 className="text-white text-2xl">Ready to Elevate your Lending Process</h1>
            <p className="text-gray-300 py-4 w-2/3">Discover how our AI-powered solutions can transform your loan processing, enhance risk management, and deliver personalized customer experiences.</p>
            <button className="bg-white rounded-2xl p-4">Explore Our Solutions</button>
          </div>
          <div>
            <Image src={rightImage} alt="Image" layout="fixed" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form6;

