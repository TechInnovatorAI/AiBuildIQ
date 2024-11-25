import Image from 'next/image'
import React from 'react';
import ReadyEvaluate from '@/components/custome-ui/ready-evaluate';
import rightImage1 from "@/public/assets/home/Logo_16.jpg"

const Hero4 = () => {
    return (
        <div className="bg-white">
            {/* Layer 1 */}
            <div className="px-[10%] py-16 flex flex-row justify-center items-center rounded-lg ">
                <div className="flex-1  flex flex-col justify-center items-start p-16">
                    <h1 className="text-md text-gray-300 font-bold mb-4">Lorem Ipsum dolor</h1>
                    <h2 className="text-4xl font-bold mb-4">Focused Lenders, <span className="text-[#004F8F]">Prepared to Succeed?</span></h2>
                    <p className="text-md font-light mb-4">Request a no-obligation, custom proof of concept to see the real benefits and opportunities for your lending organization and members.</p>
                    <button className="bg-[#004F8F] text-white px-6 py-3 rounded-2xl font-bold">
                        Lets connect
                    </button>
                </div>
                <div className="flex-1 flex justify-center items-center p-16">
                    <Image src={rightImage1.src} alt="Image" height={400} className="rounded-lg" width={400} />
                </div>
            </div>
            <ReadyEvaluate btn="Contact Us"/>
        </div>
    );
};

export default Hero4;

