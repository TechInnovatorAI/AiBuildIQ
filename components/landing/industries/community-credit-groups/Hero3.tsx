import React from 'react';
import Card from '@/components/ui/ai-solution-card';

const Hero3 = () => {
    const cards = [
        { title: "AI-Optimized Automated Underwriting", description: "Gain precise insights to ensure every member has a fair chance, while delighting them with instant decisions.", result: "96%", detail: "Proportion of auto-decisioned applications" },
        { title: "AI-Powered Fraud Detection", description: "Enhance your lending confidence while safeguarding your business from application fraud seamlessly.", result: "55%+", detail: "Percentage of fraud identified and captured" },
        { title: "Smart Lending Intelligence Report", description: "Access real-time insights across your portfolios to create a flexible and long-lasting lending business.", result: "Actionable Insights", detail: "For a clearer view of portfolio performance and opportunities ahead" }
    ];

    return (
        <div className="items-center bg-gray-300 py-4">
            <h1 className="text-[#004F8F] mx-auto text-4xl py-4 text-center w-1/3">Create a Thriving Lending Ecosystem <span className="text-black">with Best-in-Class AI Solutions</span></h1>
            <div className="flex gap-2 px-[20%] py-4">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} result={card.result} detail={card.detail} />
                ))}
            </div>
        </div>
    );
};

export default Hero3;

