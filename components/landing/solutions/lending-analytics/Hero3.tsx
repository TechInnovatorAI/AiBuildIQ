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
import ContactForm from '@/components/custome-ui/contact-form';

const cards = [
    {
        image: "",
        subtitle: "“Amid rising delinquencies and charge-offs, Commonwealth Credit Union stands out with 30-40% lower delinquency ratios compared to our peers. AiBuildiQ’s technology empowers us to better manage risk, underwrite more strategically, approve more members, and effectively control delinquencies and charge-offs.”",
        description: "Jaynel Christensen Chief Growth Officer, Commonwealth Credit Union",
        result: "70%",
        detail: "Fully automated consumer loan decisioning"
    },
    {
        image: "",
        subtitle: "“AiBuildiQ delivered speed for us. What once took six hours to decide a loan has now been reduced drastically. AiBuildiQ has significantly enhanced our efficiency and improved the member experience.”",
        description: "Anderson Langford Chief Operations Officer, Truliant Federal Credit Union.",
        result: "Smarter",
        detail: "lending with more accurate insights"
    },
    {
        image: "",
        subtitle: "“AiBuildiQ enables Reliable Credit Association to confidently identify credit risk across the entire credit spectrum. The precision of their models allows us to price our credit risk effectively, objectively, and consistently. The AiBuildiQ team has been an invaluable partner in helping us reach our goals.”",
        description: "Lee Holzman President and CEO, Reliable Credit Association.",
        result: "34%",
        detail: "lower 60 DPD delinquency rate than the national model."
    },
];

const Hero3 = () => {
    return (
        <div>
            <div className="bg-gray-300 py-4 justify-center">
                <h1 className="text-[#004F8F] mx-auto text-4xl py-4 text-center md:w-1/3 font-bold">Let the Results <span className="text-black">speak for themselves</span></h1>
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
                                                <SolutionCard key={index} title="" image={card.image} subtitle={card.subtitle} description={card.description} result={card.result} detail={card.detail} />
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
            <ContactForm
                title='For More Info Contact Us Today'
                description='Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt labore.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                btn='Send Message'
            />
        </div>
    );
};

export default Hero3;

