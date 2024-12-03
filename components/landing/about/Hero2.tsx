"use client";
import Image from "next/image";
import Link from "next/link";

const itemData = [
    {
        title: "$1Trillion",
        description: "supported in loan originations",
    },
    {
        title: "500+",
        description: "supported in loan originations",
    },
    {
        title: "1 in 8",
        description: "credit union members able to benefit from Zest AI technology",
    },
    {
        title: "36+",
        description: "patents issued and pending",
    }
];

const Hero2 = () => {
    return (
        <div>
            <div className="w-full bg-white">
                {/* First Layer - Gray Background with Letters */}
                <div className="py-8">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 w-2/3 mx-auto">
                            Empowering lending with <span className="text-[#004F8F]">Smarter, More Inclusive, & Efficient AI-driven Solutions.</span>
                        </h2>
                    </div>
                </div>

                {/* Second Layer - White Background */}
                <div className="py-8">
                    {/* Cards Section */}
                    <div className="container mx-auto w-[70%] bg-gray-200 rounded-lg p-4">
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2">
                            {itemData.map((item, index) => (
                                <div key={index} className={`p-6 sm:flex md:block ${index>0 && index%2==0 ? 'lg:border-l border-gray-400' : ''} ${index > 0 && index % 2 == 1 ? 'md:border-l border-gray-400' : ''} `}>
                                    <div className="bg-white border sm:w-1/4 md:w-full rounded-lg p-2 sm:text-xl md:text-2xl mb-4 text-center text-[#004F8F] font-bold">
                                        {item.title}
                                    </div>
                                    <p className="sm:w-3/4 md:w-full text-gray-600 text-center">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
