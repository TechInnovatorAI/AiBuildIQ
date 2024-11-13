import React from 'react';
import Image from "next/image"

const data = [
    { letters: 'Faster Loan Approvals' },
    { letters: 'Streamlined Workflow for Borrowers' },
    { letters: 'Data Transparency & Accessibility' },
    { letters: 'Scalability for High Volume Operations' },
    { letters: 'Reduced Risk for Lenders' },
    { letters: 'Boosting Engagement with Chatbot Support' }
];

const cards = [
    { image: "/assets/home/stream/1.jpg", title: "Risk Evaluation"},
    { image: "/assets/home/stream/2.jpg", title: "Risk Evaluation"},
    { image: "/assets/home/stream/3.jpg", title: "Risk Evaluation"},
]

const Form5 = () => {
    return (
        <>
            <div className="px-[10%] py-8 bg-gray-100">
                <div className="text-center items-center p-8 mx-auto">
                    <h1 className="font-bold text-2xl p-2">Why Choose AIBuildIQ?</h1>
                    <h2 className="p-2 w-[50%] mx-auto text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.map((item, index) => (
                        <div key={index} className="bg-white flex rounded-2xl items-center">
                            <div className="border-r w-1/4 text-2xl text-center  font-bold text-gray-300 justify-center">{index + 1}</div>
                            <div className="items-center w-3/4 text-2xl font-bold p-3 ">{item.letters}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-[10%] py-8 bg-gray-100">
                <div className="text-center items-center p-8 mx-auto">
                    <h1 className="font-bold text-2xl p-2">Streamlined <span className="text-[#004F8F]">Solutions for Financing</span></h1>
                    <h2 className="p-2 w-[80%] mx-auto text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
                </div>
                <div className="flex justify-center p-4 items-center">
                    {/* <button onClick={handleDirectionChange}>{direction === 'left' ? 'Change to Right' : 'Change to Left'}</button> */}
                    <div className="w-full flex items-center justify-center p-4">
                        <div className="w-1/8 text-center ">
                            <button className="rounded-full text-2xl p-2 text-blue-300">
                                &larr;
                            </button>
                        </div>
                        {cards.map((card, index) => (
                            <div key={index} className="card rounded-lg py-2 w-1/4 h-[70%] text-center items-center bg-white relative ml-2 px-2 flex flex-col">
                                <div className="mx-auto h-[180px]">
                                    <Image src={card.image} className="mx-auto h-[180px] border-2 border-white" alt="Avatar" layout="fixed" width={300} height={150} />
                                </div>
                                <div className="title p-4 text-blue-300 h-1/2">
                                    <p>{card.title}</p>
                                </div>
                            </div>
                        ))}
                        <div className="w-1/8 items-center ml-2 text-center">
                            <button className="rounded-full p-2 text-2xl text-blue-300 ">
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form5;
