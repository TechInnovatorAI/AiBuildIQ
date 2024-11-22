import React from 'react';
import Card from '@/components/custome-ui/ai-solution-card';

const Hero3 = () => {
    const cards = [
        { title: "Fraud Detection", description: "Strengthen your lending confidence and safeguard your business with comprehensive, seamless protection against application fraud.", result: "65%+", detail: " of misreported income and more than 50% of behavioral application fraud with precision." },
        { title: "AI-Powered Underwriting", description: "Ensure fairness for all your customers while delivering precise insights and instant decisions that enhance their experience.", result: "82%", detail: "of applications processed automatically." },
        { title: "Lending Intelligence Reports", description: "Gain continuous, actionable insights across your portfolios to build a flexible and resilient lending business.", result: "Actionable Insights", detail: "Achieve enhanced visibility into portfolio performance and uncover new opportunities." }
    ];

    return (
        <div className="items-center bg-gray-300 py-4">
            <h1 className="text-[#004F8F] mx-auto text-4xl py-4 text-center w-1/3">Create a Thriving Lending Ecosystem <span className="text-black">with Best-in-Class AI Solutions</span></h1>
            <div className="flex gap-2 px-[20%] py-4">
                {cards.map((card, index) => (
                    <Card key={index} subtitle="" image="" title={card.title} description={card.description} result={card.result} detail={card.detail} />
                ))}
            </div>
        </div>
    );
};

export default Hero3;

