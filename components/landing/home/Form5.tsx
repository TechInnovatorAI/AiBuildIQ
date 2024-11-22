import React from 'react';
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const data = [
    { letters: 'Faster Loan Approvals' },
    { letters: 'Streamlined Workflow for Borrowers' },
    { letters: 'Data Transparency & Accessibility' },
    { letters: 'Scalability for High Volume Operations' },
    { letters: 'Reduced Risk for Lenders' },
    { letters: 'Boosting Engagement with Chatbot Support' }
];

const cards = [
    { image: "/assets/home/stream/1.jpg", title: "Risk Evaluation" },
    { image: "/assets/home/stream/2.jpg", title: "Threat Analysis" },
    { image: "/assets/home/stream/3.jpg", title: "Lending Analytics" },
]

const Form5 = () => {
    return (
        <>
            <div className=" py-8 bg-gray-100 ">
                <div className="container">
                    <div className="text-center items-center p-8 mx-auto">
                        <h1 className="font-bold text-2xl p-2">Why Choose AIBuildIQ?</h1>
                        <h2 className="p-2 w-[50%] mx-auto text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {data.map((item, index) => (
                            <div key={index} className="bg-white flex rounded-2xl items-center">
                                <div className="border-r w-1/4 text-4xl text-center  font-bold text-blue-100 justify-center">{index + 1}</div>
                                <div className="items-center w-3/4 text-2xl font-bold p-3 ">{item.letters}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="px-[10%] py-8 bg-gray-100">
                <div className="text-center items-center p-8 mx-auto">
                    <h1 className="font-bold text-2xl p-2">Streamlined <span className="text-[#004F8F]">Solutions for Financing</span></h1>
                    <h2 className="p-2 w-[80%] mx-auto text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
                </div>
                <div className="flex justify-center p-4 items-center">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-[80%]"
                    >
                        <CarouselContent>
                            {cards.map((card, index) => (
                                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-4">
                                        <Card className="h-[30vh]">
                                            <CardContent className="fle my-4 items-center justify-center p-2">
                                                <div className="mx-auto h-[30vh]">
                                                    <Image src={card.image} className="rounded-lg mx-auto h-[20vh] border-2 border-white w-[90%]" alt="Avatar" layout="fixed" width={300} height={150} />
                                                    <div className="title p-4 text-center text-[#004F8F] font-bold h-1/2">
                                                        <p>{card.title}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-[#004F8F] w-[50px] h-[50px]" />
                        <CarouselNext className="text-[#004F8F] w-[50px] h-[50px]" />
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default Form5;
