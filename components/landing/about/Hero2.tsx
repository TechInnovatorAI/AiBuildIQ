"use client";
import Image from "next/image";
import Link from "next/link";
import drivenImage from "@/public/assets/home/Logo_4.jpg"

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
            <div className="bg-gray-100 py-2 text-center text-sm text-gray-600 ">

                SIGNUP OFFER: Get 10% OFF on interest on your first Loan.
                <Link href="/offer-details" className="underline text-blue-300 ml-1">See Offer Details</Link>
            </div>
            <div className="w-full bg-white">
                {/* First Layer - Gray Background with Letters */}
                <div className="py-8">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 w-2/3 mx-auto">
                            Empowering lending with Smarter, More Inclusive, & Efficient AI-driven Solutions.
                        </h2>

                    </div>
                </div>


                {/* Second Layer - White Background */}
                <div className="py-8">
                    {/* Cards Section */}
                    <div className="container mx-auto w-[70%] bg-gray-200 rounded-lg p-4">
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2">
                            {itemData.map((item, index) => (
                                <div key={index} className={`p-6 ${index > 0 ? 'border-l border-gray-400' : ''}`}>
                                    <div className="bg-white border rounded-lg p-2 text-2xl mb-4 text-center text-[#004F8F] font-bold">
                                        {item.title}
                                    </div>
                                    <p className="text-gray-600 text-center font-clash-display">{item.description}</p>
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
