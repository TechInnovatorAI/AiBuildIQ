"use client"
import React from 'react';
import Image from 'next/image'
import LeftImage from '@/public/assets/home/AI Network Server Technology.jpg'

const Hero = () => {
    return (
        <div className="pt-4 mt-32 px-2 mb-1">
            <div className="md:flex items-stretch">
                <div className="left md:w-1/2 h-full">
                    <div className="relative items-center py-16 justify-center h-full ">
                        <Image src={LeftImage} alt="Logo" className="absolute inset-0 -z-10 w-full h-[136%] rounded-l-lg" style={{ objectFit: 'cover' }} />
                        <div className="text-left max-w-4xl mx-auto px-4 py-14">
                            <h1 className="text-white px-[15%] text-8xl md:text-4xl mb-6 ">
                                AI that drives success in a thriving lending ecosystem
                            </h1>
                            <h2 className="text-gray-300 px-[15%] text-xl md:text-md ">
                                Schedule a Call to learn how our intelligence and automation can help you assess borrowers accurately, make smart decisions, and optimize your lending strategy
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="right md:w-1/2 bg-gray-200 p-16 h-full rounded-r-lg">
                    <div className="layer1 mb-4 px-4">
                        <h2 className="text-4xl font-bold mb-5 text-[#004F8F] uppercase">Submit the Form</h2>
                    </div>
                    <div className="layer2 mb-4 px-4">
                        <div className="flex justify-between">
                            <div className="w-1/2 mr-2">
                                <label className="block ">First Name</label>
                                <input type="text" placeholder="Enter First Name" className="w-full p-2 mr-5 rounded-full border border-gray-400 bg-white" />
                            </div>
                            <div className="w-1/2">
                                <label className="block">Last Name</label>
                                <input type="text" placeholder="Enter Last Name" className="w-full p-2 border rounded-full border-gray-400 bg-white" />
                            </div>
                        </div>
                    </div>
                    <div className="layer3 mb-4 px-4">
                        <div className="flex justify-between">
                            <div className="w-1/2 mr-2">
                                <label className="block ">Email</label>
                                <input type="text" placeholder="Enter Email" className="w-full p-2 rounded-full border border-gray-400 bg-white" />
                            </div>
                            <div className="w-1/2">
                                <label className="block ">Mobile Number</label>
                                <input type="text" placeholder="Enter Mobile Number" className="w-full p-2 rounded-full border border-gray-400 bg-white" />
                            </div>
                        </div>
                    </div>
                    <div className="layer4 mb-4 px-4">
                        <label className="block ">Message or Query</label>
                        <textarea placeholder="Type you Message or Query Here......." className="w-full p-2 rounded-2xl border border-gray-400 bg-white" />
                    </div>
                    <div className="px-4 py-4">
                    By submitting your information, you agree to receive communications from Zest AI. You may opt-out at any time.
                    </div>
                    <div className="layer5 px-4">
                        <button className="bg-[#004F8F] text-white p-2 w-1/3 rounded-full">Schedule a Call</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

