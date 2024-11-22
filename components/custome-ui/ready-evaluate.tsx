"use client"
import React from 'react';
import Image from "next/image"
import rightImage from "@/public/assets/home/ac4ae482ba5eed6c0825bcf34417c0d6.png"

interface ReadyEvaluateProps {
    button: string;
}

const ReadyEvaluate: React.FC<ReadyEvaluateProps> = ({
    button
}) => {
    return (
        <div className="relative px-[16%] py-8">
            {/* Upper wave */}
            <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" >
                <path  fill="white"  fillOpacity="0.05" d="M200,0Q400,150,600,0" />
            </svg>

            {/* Lower wave */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1840 302" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.05" d="M922.536 122.773C1326.16 -97.0133 1702.34 29.191 1839.97 119.766V281.15C1839.97 292.195 1831.02 301.15 1819.97 301.15H20.0262C8.98059 301.15 0.0262451 292.195 0.0262451 281.15V77.8821C139.353 184.424 518.912 342.56 922.536 122.773Z" />
                <path opacity="0.05" d="M922.536 162.77C1326.16 -57.0172 1702.34 69.1871 1839.97 159.763V281.168C1839.97 292.214 1831.02 301.168 1819.97 301.168H20.0262C8.98059 301.168 0.0262451 292.214 0.0262451 281.168V117.878C139.353 224.42 518.912 382.556 922.536 162.77Z" />
            </svg>

            {/* Content placeholder */}
            {/* <div className="px-[16%] py-8"> */}
            <div className="flex bg-[#004F8F] rounded-lg items-center px-[10%]">
                <div className="p-16 w-[70%]">
                    <h1 className="text-white text-2xl">Ready to Elevate your Lending Process</h1>
                    <p className="text-gray-300 py-4 w-2/3">Discover how our AI-powered solutions can transform your loan processing, enhance risk management, and deliver personalized customer experiences.</p>
                    <button className="bg-white rounded-full p-2 px-8 text-[#004F8F]">{button}</button>
                </div>
                <div>
                    <Image src={rightImage} alt="Image" layout="fixed" width={200} height={200} />
                </div>
            </div>
        {/* </div> */}
        </div>
        
    );
};

export default ReadyEvaluate;

