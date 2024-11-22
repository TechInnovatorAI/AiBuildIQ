import { useState } from 'react';

interface CardToggleProps {
    isActive: boolean;
    number: number;
    title: string;
    image: React.ReactNode;
    subtitle: string;
    description: string;
    content: { title: string; description: string }[];
}

const CardToggle: React.FC<CardToggleProps> = ({
    isActive,
    number,
    title,
    image,
    subtitle,
    description,
    content,
}) => {

    return (
        <div className={`p-2`}>
            <div className={`flex ml-[10%] items-center ${isActive ? 'border-b border-gray-200' : ''}`} >
                <div className="flex flex-col py-2 inline-block">
                    <p className="text-lg text-gray-300 font-bold">{`0${number}`} <span className="text-[#004F8F] font-bold">{title}</span></p>
                </div>
            </div>
            {isActive && <div className="w-[80%]  ml-auto mr-[10%] rotate-90">
                <div className="p-4">
                    {image}
                    {subtitle && <p className="text-2xl">{subtitle}</p>}
                    <p className="text-lg">{description}</p>
                    {content && content.map((group, index) => (
                        <div key={index}>
                            <li className="text-lg "><span className="font-bold">{group.title}</span> <span>{group.description}</span></li>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    );
};

export default CardToggle;

