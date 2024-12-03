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
        <div className={`lg:p-2 lg:flex lg:h-[70vh] xl:h-[55vh]`}>
            <div className="flex py-8 pl-4 lg:p-4 mr-8  mt-4 relative hover:cursor-pointer" >
                <div className={`absolute bottom-3 lg:rotate-180 ${isActive ? '' : ''} `}>
                    <div className="lg:block hidden">
                        <p className={`text-lg text-gray-300 font-bold flex items-center`} style={{
                            writingMode: "vertical-lr"
                        }}>
                            <span className='text-2xl'>{`0${number}`}</span>
                            <span className="text-[#004F8F] font-bold py-4">{title}</span>
                        </p>
                    </div>
                    <div className="block lg:hidden">
                        <p className={`text-lg text-gray-300 font-bold flex items-center`}>
                            <span className='text-2xl'>{`0${number}`}</span>
                            <span className="text-[#004F8F] font-bold">{title}</span>
                        </p>
                    </div>
                </div>
            </div>
            {isActive && <div className={`pl-8 mx-auto lg:mr-[10%] py-8 ${isActive ? 'lg:border-l border-t lg:border-t-0 border-gray-200' : ''}`}>
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

