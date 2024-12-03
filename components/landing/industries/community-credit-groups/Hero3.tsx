import React from 'react';
import SolutionCard from '@/components/custome-ui/ai-solution-card';
import { CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Hero3 = () => {
    const cards = [
        { title: "AI-Optimized Automated Underwriting", description: "Gain precise insights to ensure every member has a fair chance, while delighting them with instant decisions.", result: "96%", detail: "Proportion of auto-decisioned applications" },
        { title: "AI-Powered Fraud Detection", description: "Enhance your lending confidence while safeguarding your business from application fraud seamlessly.", result: "55%+", detail: "Percentage of fraud identified and captured" },
        { title: "Smart Lending Intelligence Report", description: "Access real-time insights across your portfolios to create a flexible and long-lasting lending business.", result: "Actionable Insights", detail: "For a clearer view of portfolio performance and opportunities ahead" }
    ];

    return (
        <div className="items-center bg-gray-300 py-4">
            <h1 className="text-[#004F8F] mx-auto text-4xl py-4 text-center md:w-1/3 font-bold">Create a Thriving Lending Ecosystem <span className="text-black">with Best-in-Class AI Solutions</span></h1>
            <div className="gap-2 px-[10%] py-4">
                <div className="mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-[100%]"
                    >
                        <CarouselContent>
                            {cards.map((card, index) => (
                                <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3">
                                    <div className="py-16 px-8">
                                        <CardContent className="flex my-8 items-center justify-center p-2">
                                            <SolutionCard key={index} title={card.title} image="" subtitle="" description={card.description} result={card.result} detail={card.detail} />
                                        </CardContent>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-[#004F8F]  md:w-[50px] md:h-[50px]" />
                        <CarouselNext className="text-[#004F8F]  md:w-[50px] md:h-[50px]" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Hero3;

