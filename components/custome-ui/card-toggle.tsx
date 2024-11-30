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
        <div className={`p-2 flex`}>
            <div className="flex p-4 mr-8  mt-4 relative" >
                <div className={`absolute ${isActive ? 'bottom-16 sm:-left-[50%] ' : 'md:pt-32 md:top-16 sm:pt-0 sm:top-0' }`}>
                    <p className={`text-lg text-gray-300 font-bold flex ${isActive ? '-rotate-90' : 'md:-rotate-90'}  font-xl text-center`}  style={{
                        // writingMode: "vertical-lr"
                    }}>
                        {`0${number}`} <span className="text-[#004F8F] font-bold" style={{ display: 'inline' }}>{title}</span>
                    </p>
                </div>
            </div>
            {isActive && <div className={`pl-8 mx-auto mr-[10%] py-16 ${isActive ? 'border-l border-gray-200' : ''}`}>
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

