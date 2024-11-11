"use client"
import React from 'react';
import Image from "next/image"
import LeftImage from "@/public/assets/home/Logo_13.jpg"

const Form8 = () => {
    return (
        <div className="flex items-stretch">
            <div className="left w-1/2 h-full">
                <div className="relative items-center py-16 justify-center h-full">
                    <Image src={LeftImage} alt="Logo" className="absolute inset-0 -z-10 w-full h-[150%]" style={{ objectFit: 'cover' }} />
                    <div className="text-left max-w-4xl mx-auto px-4 py-14">
                        <h1 className="text-white px-[15%] text-8xl md:text-4xl mb-6 ">
                        Want to partner with AiBuildIQ?
                        </h1>
                        <h2 className="text-gray-300 px-[15%] text-xl md:text-md ">
                        Want to join forces for a smarter, more inclusive future in lending? Let’s boost industry success together. Request a call to explore our programs
                        </h2>
                    </div>
                </div>
            </div>
            <div className="right w-1/2 bg-[#004F8F] p-16 h-full">
                <div className="layer1 mb-4 px-4">
                    <h2 className="text-4xl font-bold mb-5 text-white">Submit the Form</h2>
                </div>
                <div className="layer2 mb-4 px-4">
                    <div className="flex justify-between">
                        <div className="w-1/2 mr-2">
                            <label className="block text-white">First Name</label>
                            <input type="text" placeholder="Enter First Name" className="w-full p-2 mr-5 rounded-2xl border border-gray-400 bg-[#004F8F]" />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-white">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" className="w-full p-2 border rounded-2xl border-gray-400 bg-[#004F8F]" />
                        </div>
                    </div>
                </div>
                <div className="layer3 mb-4 px-4">
                    <div className="flex justify-between">
                        <div className="">
                            <label className="block text-white">Email</label>
                            <input type="text" placeholder="Enter Email" className="w-full p-2 rounded-2xl border border-gray-400 bg-[#004F8F]" />
                        </div>
                        <div className="">
                            <label className="block text-white">Mobile Number</label>
                            <input type="text" placeholder="Enter Mobile Number" className="w-full p-2 rounded-2xl border border-gray-400 bg-[#004F8F]" />
                        </div>
                    </div>
                </div>
                <div className="layer4 mb-4 px-4">
                    <label className="block text-white">Message or Query</label>
                    <textarea placeholder="Type you Message or Query Here......." className="w-full p-2 rounded-2xl border border-gray-400 bg-[#004F8F]" />
                </div>
                <div className="layer5 px-4">
                    <button className="bg-white text-[#004F8F] p-2 w-1/3 rounded-lg">Schedule a call</button>
                </div>
            </div>
        </div>
    );
};

export default Form8;

