"use client"
import React from 'react';
import Image from "next/image"

interface LendingBoxProps {
    title: string;
    image: string;
    description: string;
    content: { detail: string }[];
    ltr: boolean
}

const LendingBox: React.FC<LendingBoxProps> = ({
    title,
    image,
    description,
    content,
    ltr
}) => {
    return (
        <div className="md:flex container mx-auto justify-between items-center py-8">
            {ltr ? (<>
                <div className="md:w-1/2 pl-8 py-8">
                    <p className="text-2xl text-[#004F8F] font-bold py-4">{title}</p>
                    <p className="text-gray-500 py-4">{description}</p>
                    {content && content.map((group, index) => (
                        <div key={index}>
                            <li className="text-lg ">{group.detail}</li>
                        </div>
                    ))}
                </div>
                <div className="md:w-[40%] mb-8 md:mb-0 p-8 relative">
                    <Image
                        src={image}
                        alt="Lending Analysis"
                        width={500}
                        height={300}
                        style={{ height: '30vh', width: '100vw' }}
                        className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                    />
                    <div className="absolute left-[15%] top-1/4 -z-10 rounded-lg border-2 border-gray-300" style={{ height: '26vh', width: '83%' }}></div>
                </div>
            </>) :
                (
                    <>
                        <div className="md:w-[40%] mb-8 md:mb-0 p-8 relative">
                            <Image
                                src={image}
                                alt="Lending Analysis"
                                width={500}
                                height={300}
                                style={{ height: '30vh', width: '100vw' }}
                                className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                            />
                            <div className="absolute left-[15%] top-1/4 -z-10 rounded-lg border-2 border-gray-300" style={{ height: '26vh', width: '83%' }}></div>
                        </div>
                        <div className="md:w-1/2 pl-8 py-8">
                            <p className="text-2xl text-[#004F8F] font-bold py-4">{title}</p>
                            <p className="text-gray-500 py-4">{description}</p>
                            {content && content.map((group, index) => (
                                <div key={index}>
                                    <li className="text-lg ">{group.detail}</li>
                                </div>
                            ))}
                        </div>
                    </>
                )
            }

        </div>
    );
};

export default LendingBox;

