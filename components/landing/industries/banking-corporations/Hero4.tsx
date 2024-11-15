import Image from 'next/image'
import React from 'react';
import rightImage2 from "@/public/assets/home/ac4ae482ba5eed6c0825bcf34417c0d6.png"
import rightImage1 from "@/public/assets/home/Logo_16.jpg"

const Hero4 = () => {
    return (
        <div className="bg-white">
            {/* Layer 1 */}
            <div className="px-[10%] py-16 flex flex-row justify-center items-center rounded-lg ">
                <div className="flex-1  flex flex-col justify-center items-start p-16">
                    <h1 className="text-md text-gray-300 font-bold mb-4">Lorem Ipsum dolor</h1>
                    <h2 className="text-4xl font-bold mb-4">Bankers, are you <span className="text-[#004F8F]">Prepared to Succeed?</span></h2>
                    <p className="text-md font-light mb-4">Request a no-obligation, custom proof of concept to see the real benefits and opportunities for your lending organization and members.</p>
                    <button className="bg-[#004F8F] text-white px-6 py-3 rounded-2xl font-bold">
                        Lets connect
                    </button>
                </div>
                <div className="flex-1 flex justify-center items-center p-16">
                    <Image src={rightImage1.src} alt="Image" height={400} className="rounded-lg" width={400} />
                </div>
            </div>
            <div className="px-[16%] py-4">
                <div className="flex bg-[#004F8F] rounded-lg items-center px-[10%]">
                    <div className="p-16 w-[70%]">
                        <h1 className="text-white text-2xl">Ready to Elevate your Lending Process</h1>
                        <p className="text-gray-300 py-4 w-2/3">Discover how our AI-powered solutions can transform your loan processing, enhance risk management, and deliver personalized customer experiences.</p>
                        <button className="bg-white rounded-2xl p-4">Contact Us</button>
                    </div>
                    <div>
                        <Image src={rightImage2} alt="Image" layout="fixed" width={200} height={200} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero4;

