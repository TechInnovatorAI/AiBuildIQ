import Image from 'next/image'
import React from 'react';
import ReadyEvaluate from '@/components/custome-ui/ready-evaluate';
import rightImage from "@/public/assets/home/Logo_16.jpg"

const Hero4 = () => {
    return (
        <>
            <div className="md:flex  container mx-auto justify-center items-center mt-8 py-8 rounded-lg">
                <div className="md:w-1/2 pl-2 py-8">
                    <h1 className="text-md  text-gray-300 font-bold mb-4 uppercase">Lorem Ipsum dolor</h1>
                    <h2 className="text-4xl w-2/3 font-bold mb-4">Bankers, are you <span className="text-[#004F8F]">Prepared to Succeed?</span></h2>
                    <p className="text-md font-light mb-4">Request a no-obligation, custom proof of concept to see the real benefits and opportunities for your lending organization and members.</p>
                    <button className="bg-[#004F8F] text-white px-6 py-3 rounded-full font-bold">
                        Let's connect
                    </button>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0 p-8 relative">
                    <Image
                        src={rightImage.src}
                        alt="Banking corporation"
                        width={500}
                        height={300}
                        style={{ height: '30vh', width: '100vw' }}
                        className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer  border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                    />
                    <div className="absolute left-[15%] top-1/4 -z-10 rounded-lg border-2 border-gray-300" style={{ height: '26vh', width: '83%' }}></div>
                </div>
            </div>
            <div>
                <ReadyEvaluate btn="Contact Us" />
            </div>
        </>
    );
};

export default Hero4;

