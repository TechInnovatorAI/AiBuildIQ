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
                        <h1 className="font-bold text-2xl p-2">Why Choose <span className="text-[#004F8F]">AIBuildIQ?</span></h1>
                        <h2 className="p-2 w-[80%] mx-auto text-md">Our platform is built to foster transparency, scalability, and engagement, ensuring that every step is streamlined for faster, smarter outcomes. Join us in redefining the future of lending with innovative solutions that work for you.</h2>
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
                    <h2 className="p-2 md:w-[80%] mx-auto text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
                </div>
                <div className="md:flex justify-center p-4 items-center">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-[100%]"
                    >
                        <CarouselContent>
                            {cards.map((card, index) => (
                                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-4">
                                        <Card className="h-[30vh]">
                                            <CardContent className="my-4 items-center justify-center p-2">
                                                <div className="mx-auto h-[30vh]">
                                                    <Image src={card.image} className="rounded-lg mx-auto h-[20vh] border-2 border-white w-[90%]" alt="Avatar"  width={300} height={150} />
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
                <div className="flex justify-center">
                    <svg width="104" height="15" viewBox="0 0 104 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.58747" cy="7.37067" r="6.96442" fill="#004F8F" />
                        <circle cx="37.1968" cy="7.37067" r="6.96442" fill="white" />
                        <circle cx="66.8023" cy="7.37067" r="6.96442" fill="white" />
                        <circle cx="96.4117" cy="7.37067" r="6.96442" fill="white" />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Form5;
