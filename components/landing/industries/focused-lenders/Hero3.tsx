import React from 'react';
import Card from '@/components/ui/ai-solution-card';

const Hero3 = () => {
    const cards = [
        { title: "AI-Powered Underwriting", description: "Give all your borrowers a fair shot and delight them with more accurate insights, and instant decisions.", result: "65%", detail: "of applications auto-decisioned\" Need Same meaning content with different way." },
        { title: "Fraud Detection", description: "Strengthen your lending security and safeguard your business from application fraud with a comprehensive, seamless approach.", result: "52%+", detail: "of fraud cases intercepted" },
        { title: "Lending Intelligence Reports", description: "Receive continuous, actionable insights throughout your lending lifecycle to build a resilient and adaptive business.", result: "Actionable Insights", detail: "Enhance visibility into lending performance and growth opportunities" }
    ];

    return (
        <div className="items-center bg-gray-300 py-4">
            <h1 className="text-[#004F8F] mx-auto text-4xl py-4 text-center w-1/3">Create a Thriving Lending Ecosystem <span className="text-black">with Best-in-Class AI Solutions</span></h1>
            <div className="flex gap-2 px-[20%] py-4">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} subtitle="" image="" description={card.description} result={card.result} detail={card.detail} />
                ))}
            </div>
        </div>
    );
};

export default Hero3;

