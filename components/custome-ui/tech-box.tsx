"use client"
import React from 'react';
import Image from "next/image"

interface TechBoxProps {
    title: string;
    image: string;
    description: string;
    ltr: boolean
}

const TechBox: React.FC<TechBoxProps> = ({
    title,
    image,
    description,
    ltr
}) => {
    return (
        <section >
            {ltr ? (<>
                <div className="container px-[3%] flex flex-col md:flex-row items-center mb-16 gap-16">
                    <div className="md:w-1/2">
                        <p className="text-2xl text-[#004F8F] font-bold py-4">{title}</p>
                        <p className="text-gray-500 py-4">{description}</p>
                        <p className="text-[#004F8F]">Read More</p>
                    </div>
                    <div className="md:w-[40%] mb-8 md:mb-0 p-8 relative ">
                        <Image
                            src={image}
                            alt="Analysis illustration"
                            width={500}
                            height={300}
                            style={{ height: '30vh', width: '85vw' }}
                            className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                        />
                        <div className="absolute left-[15%] top-1/4 -z-10 rounded-lg border-2 border-gray-300" style={{ height: '26vh', width: '83%' }}></div>
                    </div>
                </div>
            </>) :
                (
                    <>
                        <div className="container px-[3%] flex flex-col md:flex-row items-center mb-16 gap-16">
                            <div className="md:w-[40%] mb-8 md:mb-0 p-8 relative">
                                <Image
                                    src={image}
                                    alt="Analysis illustration"
                                    width={500}
                                    height={300}
                                    style={{ height: '30vh', width: '85vw' }}
                                    className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                                />
                                <div className="absolute left-[15%] top-1/4 -z-10 rounded-lg border-2 border-gray-300" style={{ height: '26vh', width: '83%' }}></div>
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-2xl text-[#004F8F] font-bold py-4">{title}</p>
                                <p className="text-gray-500 py-4">{description}</p>
                                <p className="text-[#004F8F]">Read More</p>
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    );
};

export default TechBox;

