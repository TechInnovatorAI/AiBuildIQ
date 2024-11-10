"use client";
import React, { useState } from 'react';
import Image from "next/image"

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
    // Add more cards as needed
]

const Form7 = () => {
    const [direction, setDirection] = useState('left');

    const handleDirectionChange = () => {
        setDirection(direction === 'left' ? 'right' : 'left');
    };

    return (
        <div className="bg-gray-100">
            <div className="p-4 py-[5%]">
                <div className="">
                    <div className="py-4 justify-center mx-auto">
                        <h1 className="text-2xl font-bold text-center">Client’s Testimonials</h1>
                        <p className="text-md text-center w-1/3 justify-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="flex justify-center p-4 items-center">
                        {/* <button onClick={handleDirectionChange}>{direction === 'left' ? 'Change to Right' : 'Change to Left'}</button> */}
                        <div className="w-full flex items-center justify-center p-4">
                            <div className="w-1/5 text-center ">
                                <button className="rounded-full text-2xl p-2 text-blue-300">
                                    &larr;
                                </button>
                            </div>
                            {cards.map((card, index) => (
                                <div key={index} className="card py-[3%] w-1/5 text-center items-center bg-white relative ml-2 px-4">
                                    <div className="avatar mx-auto absolute left-1/2 -translate-x-1/2 translate-y-1/2 -top-1/4">
                                        <Image src={card.avatar} className="mx-auto rounded-full border-2 border-white" alt="Avatar" layout="fixed" width={100} height={100} />
                                    </div>
                                    <div className="stars">
                                        {Array.from({length: card.stars}, (_, i) => (
                                            <span key={i} className="text-yellow-500">&#9733;</span>
                                        ))}
                                    </div>
                                    <div className="description p-4">
                                        <p>{card.description}</p>
                                    </div>
                                    <hr className="my-4 border-t border-gray-700 w-[5%] text-blue-300  mx-auto" />
                                    <div className="name p-4 items-center">
                                        <p className="font-bold">{card.name}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="w-1/5 items-center ml-2 text-center">
                                <button className="rounded-full p-2 text-2xl text-blue-300 ">
                                    &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form7;
