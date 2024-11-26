"use client"
import React from 'react';

const Hero = () => {
    return (
        <>
            <div className="p-4 mt-32">
                <div className="flex items-stretch py-2">
                    <div className="left w-1/2 ">
                        <div className="py-8 relative justify-center h-full rounded-l-lg" style={{ background: 'url("assets/home/AI Network Server Technology.jpg") no-repeat', backgroundSize: 'cover' }}>
                            <div className="h-full absolute top-1/4 text-left max-w-4xl justify-center items-center mx-auto px-4 py-14">
                                <h1 className="text-white px-[15%] text-8xl md:text-4xl m-auto">
                                    AI that drives success in a thriving lending ecosystem
                                </h1>
                                <h2 className="text-gray-300 px-[15%] text-xl md:text-md ">
                                    Schedule a Call to learn how our intelligence and automation can help you assess borrowers accurately, make smart decisions, and optimize your lending strategy
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="right w-1/2 bg-gray-100 p-16 h-full rounded-r-lg">
                        <div className="layer1 mb-4 px-4">
                            <h2 className="text-4xl font-bold mb-5 text-[#004F8F]">Submit the Form</h2>
                        </div>
                        <div className="layer2 mb-4 px-4">
                            <div className="flex justify-between">
                                <div className="w-1/2 mr-2">
                                    <label className="block text-black">First Name</label>
                                    <input type="text" placeholder="Enter First Name" className="w-full p-2 mr-5 rounded-full border border-gray-400 bg-white" />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-black">Last Name</label>
                                    <input type="text" placeholder="Enter Last Name" className="w-full p-2 border rounded-full border-gray-400 bg-white" />
                                </div>
                            </div>
                        </div>
                        <div className="layer3 mb-4 px-4">
                            <div className="flex justify-between">
                                <div className="w-1/2 mr-2">
                                    <label className="block text-black">Email</label>
                                    <input type="text" placeholder="Enter Email" className="w-full p-2 rounded-full border border-gray-400 bg-white" />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-black">Mobile Number</label>
                                    <input type="text" placeholder="Enter Mobile Number" className="w-full p-2 rounded-full border border-gray-400 bg-white" />
                                </div>
                            </div>
                        </div>
                        <div className="layer4 mb-4 px-4">
                            <label className="block text-black">Message or Query</label>
                            <textarea placeholder="Type you Message or Query Here......." className="w-full p-2 rounded-xl border border-gray-400 bg-white" />
                        </div>
                        <div className="layer5 px-4">
                            <button className="bg-[#004F8F] text-white p-2 w-1/3 rounded-full">Schedule a call</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

