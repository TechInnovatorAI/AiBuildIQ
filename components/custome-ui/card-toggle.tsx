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
        <div className={`p-2 flex md:h-[40vh]`}>
            <div className="flex p-4 mr-8  mt-4 relative hover:cursor-pointer" >
                <div className={`absolute bottom-4 ${isActive ? 'rotate-180' : '-rotate-90 translate-y-[50%] ml-[100%] translate-x-[100%]  md:rotate-180 md:translate-y-0 md:ml-0 md:translate-x-0'} `}>
                    <p className={`text-lg text-gray-300 font-bold flex `} style={{
                        writingMode: "vertical-lr"
                    }}>
                        <span className='text-2xl'>{`0${number}`}</span>
                        <span className="text-[#004F8F] font-bold py-4">{title}</span>
                    </p>
                </div>
            </div>
            {isActive && <div className={`pl-8 mx-auto mr-[10%] py-8 ${isActive ? 'border-l border-gray-200' : ''}`}>
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

