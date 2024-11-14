"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Toggle from '@/components/ui/toggle';
import step1 from "@/public/assets/how-it-works/1.jpg"
import step2 from "@/public/assets/how-it-works/2.jpg"


const Hero2 = () => {
    return (
        <div className="p-2">
            <div className="bg-gray-100 rounded-lg py-2 text-center text-sm text-gray-600 ">
            Overview of <span className="text-[#004F8F]">AibuildIQ Process</span> 
            </div>
            {/* Second Column */}
            <div className="flex px-[15%] flex-col md:flex-row items-center mb-16 mt-2 gap-16">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src={step1.src}
                        alt="Analysis illustration"
                        width={500}
                        height={300}
                        style={{ height: '30vh', width: '80vw' }}
                        className="rounded transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                    />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl text-[#004F8F] font-bold mb-2">Step 1:</h3>
                    <h3 className="text-2xl text-black font-bold mb-2">Input Borrower Details</h3>
                    <p className="text-gray-600 text-sm">
                        In this first step, borrowers provide essential information such as income, credit history, property details, and loan requirements. Our user-friendly intake form ensures that the data collection process is quick and efficient. By capturing accurate borr...
                    </p>
                </div>
            </div>

            {/* Third Column */}
            <div className="px-[15%] flex flex-col md:flex-row items-center mb-16 gap-16">
                <div className="md:w-1/2 ">
                    <h3 className="text-[#004F8F] text-2xl font-bold mb-2">Step 2:</h3>
                    <h3 className="text-black text-2xl font-bold mb-2">AI Analyzes Data</h3>
                    <p className="text-gray-600 text-sm">
                        Once the borrower details are submitted, our advanced AI algorithms go to work. The system analyzes the borrower’s financial profile, loan requirements, and market data to identify the best possible loan options. By comparing a wide range of lenders and lo...
                    </p>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src={step2.src}
                        alt="Analysis illustration"
                        width={500}
                        height={300}
                        style={{ height: '30vh', width: '100vw' }}
                        className="rounded border border-2 gray-200 transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero2;
