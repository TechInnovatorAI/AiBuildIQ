import React from 'react';
import Image from "next/image"

interface TestNominalCardProps {
    avatar: string;
    stars: number;
    description: string;
    name: string;
}

const TestNominalCard: React.FC<TestNominalCardProps> = ({
    avatar,
    stars,
    description,
    name
}) => {
    return (
        <div className="py-[5%] text-center items-center bg-white relative ml-2 px-4 rounded-lg">
            <div className="avatar mx-auto absolute left-1/2 -translate-x-1/2 -top-[7vh]">
                <Image src={avatar} className="mx-auto rounded-full border-2 border-white" alt="Avatar"  width={100} height={100} />
            </div>
            <div className="stars pt-4 gap-2">
                {Array.from({ length: stars }, (_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">&#9733;</span>
                ))}
            </div>
            <div className="description p-4">
                <p>{description}</p>
            </div>
            <hr className="my-4 border-t-[2px] border-[#004F8F] w-[10%] mx-auto"/>
            <div className="name p-4 items-center">
                <p className="font-bold">{name}</p>
            </div>
        </div>
    );
};

export default TestNominalCard;

