import React from 'react';
import Image from "next/image"
import LeftImage from "@/public/assets/home/stream/2.jpg"

const onboarding = [
    {
        number: "1",
        title: "Custom-built Proof of Concept to Fit Your Objectives",
        week: "2 Weeks"
    },
    {
        number: "2",
        title: "Enhance and Optimize Models",
        week: "1 Week"
    },
    {
        number: "3",
        title: "Seamlessly Connect",
        week: "Results in 4 Weeks"
    },
    {
        number: "3",
        title: "Evaluate and Launch",
        week: "Within 1 Week"
    },
]

const ongoing = [
    {
        number: "1",
        title: "Proactive Model Tracking and Support",
        week: "24/7"
    },
    {
        number: "1",
        title: "Performance Evaluations",
        week: "4 Times a Year"
    },
]

const Hero3 = () => {
    return (
        <div>
            <div className="bg-[#004F8F] py-16">
                <div className="container w-2/3 text-white font-bold  text-center text-2xl py-2">
                    Achieve rapid results with effortless integrations and quick onboarding
                </div>
                <div className="container w-2/3">
                    {onboarding.map((board, index) => (
                        <div className="flex mt-2 bg-gray-200 bg-opacity-[10%] rounded-lg border-gray-200 relative p-2">
                            <div className="border-r font-bold px-2 border-white text-white">{board.number}</div>
                            <div className="text-white pl-4 text-opacity-[50%]">{board.title}</div>
                            <div className="absolute right-2 bg-gray-300 bg-opacity-[10%] w-[20%] text-center text-white rounded-md">{board.week}</div>
                        </div>
                    ))}
                </div>
                <p className="container w-2/3 text-white font-bold py-2">Ongoing Assistance & Analysis</p>
                <div className="container w-2/3">
                    {ongoing.map((board, index) => (
                        <div className="flex mt-2 bg-gray-200 bg-opacity-[10%] rounded-lg border-gray-200 relative p-2">
                            <div className="border-r font-bold px-2 border-white text-white">{board.number}</div>
                            <div className="text-white pl-4 text-opacity-[50%]">{board.title}</div>
                            <div className="absolute right-2 bg-gray-300 bg-opacity-[10%] w-[20%] text-center text-white rounded-md">{board.week}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex container mx-auto justify-between items-center mt-8 py-8 bg-gray-300 rounded-lg">
                <div className="w-1/2 pl-2 py-8">
                    <p className="text-2xl text-black font-bold py-4">A Focus on <span className="text-[#004F8F]">Compliance</span></p>
                    <p className="text-gray-500">AiBuildiQ is dedicated to shaping the future of AI in lending. With over 80 years of combined expertise in legal, compliance, and policy, our team is deeply involved in discussions that ensure AI remains transparent, secure, and fair for both lenders and their customers</p>
                </div>
                <div className="w-1/2 p-2">
                    <Image src={LeftImage.src} className="border-white border-2 mx-auto h-[280px] border-2 border-white" alt="Avatar" layout="fixed" width={300} height={150} />
                </div>
            </div>
            <div className="w-[70%] mx-auto bg-white px-[10%] py-8">
                <div className="text-center">
                    <p className="text-lg text-gray-600">By collaborating with lawmakers to create clear and fair policies, we safeguard consumers and ensure equal access to financial services</p>
                </div>
                <hr className="my-4 mx-auto border-t border-blue-200 w-[50px] " />
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Mark Johnson</h2>
                    <p className="text-lg text-gray-600">AiBuildIQ Board Member, Former NCUA Chairman</p>
                </div>
            </div>
        </div>
    );
};

export default Hero3;

