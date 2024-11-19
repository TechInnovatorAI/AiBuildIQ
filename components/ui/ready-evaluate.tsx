"use client"
import React from 'react';
import Image from "next/image"
import rightImage from "@/public/assets/home/ac4ae482ba5eed6c0825bcf34417c0d6.png"

const ReadyEvaluate = () => {
    return (
        <div className="px-[16%] py-8">
            <div className="flex bg-[#004F8F] rounded-lg items-center px-[10%]">
                <div className="p-16 w-[70%]">
                    <h1 className="text-white text-2xl">Ready to Elevate your Lending Process</h1>
                    <p className="text-gray-300 py-4 w-2/3">Discover how our AI-powered solutions can transform your loan processing, enhance risk management, and deliver personalized customer experiences.</p>
                    <button className="bg-white rounded-2xl p-2 px-4">Explore Our Solutions</button>
                </div>
                <div>
                    <Image src={rightImage} alt="Image" layout="fixed" width={200} height={200} />
                </div>
            </div>
        </div>
    );
};

export default ReadyEvaluate;

