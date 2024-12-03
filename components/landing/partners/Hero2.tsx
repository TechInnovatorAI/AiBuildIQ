"use client";
import Image from "next/image";
import Link from "next/link";

import Vector1 from "@/public/assets/partners/1.svg"
import Vector2 from "@/public/assets/partners/2.svg"
import Vector3 from "@/public/assets/partners/3.svg"
import Vector4 from "@/public/assets/partners/4.svg"
import Vector5 from "@/public/assets/partners/5.svg"
import Vector6 from "@/public/assets/partners/6.svg"


const itemData = [
    {svg: Vector1},
    {svg: Vector2},
    {svg: Vector3},
    {svg: Vector4},
    {svg: Vector5},
    {svg: Vector6}
];

const Hero2 = () => {
    return (
        <div>
            <div className="w-full bg-white">
                {/* First Layer - Gray Background with Letters */}
                <div className="py-8">
                    <div className="md:container mx-auto text-center">
                        <h2 className="text-xl md:text-3xl font-bold mb-4 w-[60%] mx-auto">
                            Empowering smarter lending through an expanding <span className="text-[#004F8F]">Network of Innovative Solutions, Providers, & Partners</span>
                        </h2>
                    </div>
                </div>

                {/* Second Layer - White Background */}
                <div className="py-8">
                    {/* Cards Section */}
                    <div className="container mx-auto w-[70%] bg-gray-200 rounded-lg p-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                                {itemData.sort(() => Math.random() - 0.5).map((item, index) => (
                                    <div key={index} className={`p-6 `}>
                                        <div className="items-center border mx-auto  rounded-lg p-2 mb-4">
                                            <Image src={item.svg.src} alt="image" width={100} height={150} style={{ objectFit: 'cover' }}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
