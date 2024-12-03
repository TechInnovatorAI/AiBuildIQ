"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import TextNominalCard from '@/components/custome-ui/testnominal-card'

const cards = [
    {
        avatar: "/assets/avatar/c973b6046f9e7d64819987276d1a982b.png",
        stars: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipconsequat.",
        name: "Annette Black"
    },
    {
        avatar: "/assets/avatar/d2a1551fce69f6f1050ffbcea95e6a06.png",
        stars: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipconsequat.",
        name: "Kathryn Murphy"
    },
    {
        avatar: "/assets/avatar/0b63a4074aeee723cb726469d223d50d.png",
        stars: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipconsequat.",
        name: "Marvin McKinney"
    },
]

const Form7 = () => {
    const [direction, setDirection] = useState('left');

    const handleDirectionChange = () => {
        setDirection(direction === 'left' ? 'right' : 'left');
    };

    return (
        <div className="bg-gray-100">
            <div className="p-4 py-[5%]">
                <div>
                    <div className="py-4 justify-center mx-auto">
                        <h1 className="text-2xl font-bold text-center">Client’s <span className="text-[#004F8F]">Testimonials</span></h1>
                        <p className="text-md text-center md:w-1/3 justify-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="md:flex justify-center px-16 p-4 items-center">
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
                                            {/* <Card className=""> */}
                                                <CardContent className="flex my-8 items-center justify-center p-2">
                                                    <TextNominalCard
                                                        avatar={card.avatar}
                                                        stars={card.stars}
                                                        description={card.description}
                                                        name={card.name}
                                                    />
                                                </CardContent>
                                            {/* </Card> */}
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
        </div>
    );
};

export default Form7;
