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
        <div className="flex container mx-auto justify-between items-center py-8">
            {ltr ? (<>
                <div className="w-1/2 pl-8 py-8">
                    <p className="text-2xl text-[#004F8F] font-bold py-4">{title}</p>
                    <p className="text-gray-500 py-4">{description}</p>
                    <p className="text-[#004F8F]">Read More</p>
                </div>
                <div className="w-1/2">
                    <Image src={image} className="rounded-lg mx-auto h-[280px] border-2 border-white" alt="Avatar" layout="fixed" width={300} height={150} />
                </div>
            </>) :
                (
                    <>
                        <div className="w-1/2">
                            <Image src={image} className="mx-auto h-[280px] border-2 border-white" alt="Avatar" layout="fixed" width={300} height={150} />
                        </div>
                        <div className="w-1/2 pl-8 py-8">
                            <p className="text-2xl text-[#004F8F] font-bold py-4">{title}</p>
                            <p className="text-gray-500 py-4">{description}</p>
                            <p className="text-[#004F8F]">Read More</p>
                        </div>
                    </>
                )
            }

        </div>
    );
};

export default TechBox;

