"use client";
import Image from "next/image";
import step1 from "@/public/assets/how-it-works/1.jpg"
import step2 from "@/public/assets/how-it-works/2.jpg"


const Hero2 = () => {
    return (
        <>
            <div className="px-4">
                <div className="bg-gray-100 rounded-lg p-2 text-center text-lg font-bold text-gray-600 ">
                    Overview of <span className="text-[#004F8F]">AibuildIQ Process</span>
                </div>
            </div>

            <section >
                {/* First Column */}
                <div>
                    <div className="container md:flex  items-center mb-16 gap-16">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl text-[#004F8F] font-bold mb-2">Step 1:</h3>
                            <h3 className="text-2xl text-black font-bold mb-2">Input Borrower Details</h3>
                            <p className="text-gray-600 text-sm">
                                In this first step, borrowers provide essential information such as income, credit history, property details, and loan requirements. Our user-friendly intake form ensures that the data collection process is quick and efficient. By capturing accurate borr...
                            </p>
                        </div>
                        <div className="md:w-1/2 mb-8 md:mb-0 p-8 relative">
                            <Image
                                src={step1.src}
                                alt="Analysis illustration"
                                width={500}
                                height={300}
                                style={{ height: '30vh', width: '100vw' }}
                                className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                            />
                            <div className="absolute left-[15%] top-1/4 -z-10 rounded-lg border-2 border-gray-300" style={{ height: '26vh', width: '83%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Second Column */}
                <div className="bg-gray-200 py-4">
                    <div className="container md:flex items-center mb-16 gap-16 ">
                        <div className="md:w-1/2 mb-8 md:mb-0 p-8 relative z-10">
                            <Image
                                src={step2.src}
                                alt="Analysis illustration"
                                width={500}
                                height={300}
                                style={{ height: '30vh', width: '100vw', zIndex: 10 }}
                                className="rounded-lg z-10 transition-opacity duration-300 hover:opacity-80 cursor-pointer  border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                            />
                            {/* <div className="absolute left-[15%] top-1/4 rounded-lg border-2 border-gray-500" style={{ height: '26vh', width: '83%', zIndex: 0}}></div> */}
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-[#004F8F] text-2xl font-bold mb-2">Step 2:</h3>
                            <h3 className="text-black text-2xl font-bold mb-2">AI Analyzes Data</h3>
                            <p className="text-gray-600 text-sm">
                                Once the borrower details are submitted, our advanced AI algorithms go to work. The system analyzes the borrower’s financial profile, loan requirements, and market data to identify the best possible loan options. By comparing a wide range of lenders and lo...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero2;
