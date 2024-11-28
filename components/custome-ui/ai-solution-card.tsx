import React from 'react';

interface AiSolutionCardProps {
    title: string;
    subtitle: string;
    image: React.ReactNode;
    description: string;
    result: string;
    detail: string;
}

const AiSolutionCard: React.FC<AiSolutionCardProps> = ({
    title,
    subtitle,
    image,
    description,
    result,
    detail
}) => {
    return (
        <div className="relative p-[5%] text-white rounded-lg bg-[#004F8F] h-[45vh]">
            {image && <div>{image}</div>}
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
            {subtitle && <h2 className="text-lg mb-2">{subtitle}</h2>}
            <p>{description}</p>
            <div className="absolute bottom-4">
                <p className="my-4 font-bold text-4xl">{result}</p>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default AiSolutionCard;

