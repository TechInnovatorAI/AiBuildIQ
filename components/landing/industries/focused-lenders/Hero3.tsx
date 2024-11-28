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
        { title: "AI-Powered Underwriting", description: "Give all your borrowers a fair shot and delight them with more accurate insights, and instant decisions.", result: "65%", detail: "of applications auto-decisioned\" Need Same meaning content with different way." },
        { title: "Fraud Detection", description: "Strengthen your lending security and safeguard your business from application fraud with a comprehensive, seamless approach.", result: "52%+", detail: "of fraud cases intercepted" },
        { title: "Lending Intelligence Reports", description: "Receive continuous, actionable insights throughout your lending lifecycle to build a resilient and adaptive business.", result: "Actionable Insights", detail: "Enhance visibility into lending performance and growth opportunities" }
    ];

    return (
        <div className="items-center bg-gray-300 py-4">
            <h1 className="text-[#004F8F] mx-auto text-4xl py-4 text-center w-1/3">Create a Thriving Lending Ecosystem <span className="text-black">with Best-in-Class AI Solutions</span></h1>
            <div className="flex gap-2 px-[10%] py-4">
                <div className="mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-[100%]"
                    >
                        <CarouselContent>
                            {cards.map((card, index) => (
                                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                                    <div className="py-16 px-8">
                                        <CardContent className="flex my-8 items-center justify-center p-2">
                                            <SolutionCard key={index} title={card.title} image="" subtitle="" description={card.description} result={card.result} detail={card.detail} />
                                        </CardContent>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-[#004F8F] w-[50px] h-[50px]" />
                        <CarouselNext className="text-[#004F8F] w-[50px] h-[50px]" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Hero3;

