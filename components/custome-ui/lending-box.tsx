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
                <div className="md:w-1/2 ">
                    <Image src={image} className="rounded-lg float-right mr-8 h-[280px]  border-2 border-white" alt="Avatar" layout="fixed" width={300} height={150} />
                </div>
            </>) :
                (
                    <>
                        <div className="md:w-1/2">
                            <Image src={image} className="rounded-lg float-left ml-8 h-[280px]  border-2 border-white" alt="Avatar" layout="fixed" width={300} height={150} />
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

