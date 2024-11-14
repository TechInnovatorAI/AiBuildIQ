import React from 'react';

interface AiSolutionCardProps {
    title: string;
    description: string;
    result: string;
    detail: string;
}

const AiSolutionCard: React.FC<AiSolutionCardProps> = ({
    title,
    description,
    result,
    detail
}) => {
    return (
        <div className="p-[5%] text-white rounded-lg bg-[#004F8F]">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{description}</p>
            <p className="my-4 font-bold text-4xl">{result}</p>
            <p>{detail}</p>
        </div>
    );
};

export default AiSolutionCard;

