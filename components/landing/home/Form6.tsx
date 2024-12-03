"use client"
import React from 'react';
import ReadyEvaluate from '@/components/custome-ui/ready-evaluate';

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
    <>
      <div className="md:flex container items-center py-[5%]">
        <div className="md:w-1/3 items-center mx-auto p-4">
          <div className="relative py-16 relative justify-center  h-[40vh] rounded-lg" style={{ background: 'url("assets/home/AI Network Server Technology.jpg") no-repeat', backgroundSize: 'cover' }}>
          <div className="absolute border border-gray-300 rounded-lg h-[40vh] w-full top-6 left-6 -z-10"></div>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <div className="py-4">
            <h1 className="text-gray-300 uppercase">Lorem Ipsum dolor</h1>
            <h1 className="text-[#004F8F] font-bold text-2xl">AIBuild IQ is best at</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          {letters.map((letter, index) => (
            <div key={index}>
              <li className="font-bold">{letter.title}</li>
              <p>{letter.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ReadyEvaluate btn="Contact Us" />
    </>
  );
};

export default Form6;

