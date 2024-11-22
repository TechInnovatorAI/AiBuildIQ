import Image from 'next/image'
import React from 'react';
import rightImage2 from "@/public/assets/home/ac4ae482ba5eed6c0825bcf34417c0d6.png"
import rightImage1 from "@/public/assets/home/Logo_16.jpg"
import Card from '@/components/custome-ui/ai-solution-card';
import LeftImage from "@/public/assets/home/Logo_13.jpg"

const cards = [
    { 
        image: "", 
        subtitle: "“Amid rising delinquencies and charge-offs, Commonwealth Credit Union stands out with 30-40% lower delinquency ratios compared to our peers. AiBuildiQ’s technology empowers us to better manage risk, underwrite more strategically, approve more members, and effectively control delinquencies and charge-offs.”", 
        description: "Jaynel Christensen Chief Growth Officer, Commonwealth Credit Union", 
        result: "70%", 
        detail: "Fully automated consumer loan decisioning" 
    },
    { 
        image: "", 
        subtitle: "“AiBuildiQ delivered speed for us. What once took six hours to decide a loan has now been reduced drastically. AiBuildiQ has significantly enhanced our efficiency and improved the member experience.”", 
        description: "Anderson Langford Chief Operations Officer, Truliant Federal Credit Union.", 
        result: "Smarter", 
        detail: "lending with more accurate insights" 
    },
    { 
        image: "", 
        subtitle: "“AiBuildiQ enables Reliable Credit Association to confidently identify credit risk across the entire credit spectrum. The precision of their models allows us to price our credit risk effectively, objectively, and consistently. The AiBuildiQ team has been an invaluable partner in helping us reach our goals.”", 
        description: "Lee Holzman President and CEO, Reliable Credit Association.", 
        result: "34%", 
        detail: "lower 60 DPD delinquency rate than the national model." 
    }
];

const Hero3 = () => {
    return (
        <div>
            <div className="items-center bg-gray-300 py-4">
                <h1 className="text-[#004F8F] mx-auto text-4xl py-4 text-center w-1/3">Let the Results <span className="text-black">speak for themselves</span></h1>
                <div className="flex gap-2 px-[20%] py-4">
                    {cards.map((card, index) => (
                        <Card key={index} title="" image={card.image} subtitle={card.subtitle} description={card.description} result={card.result} detail={card.detail} />
                    ))}
                </div>
            </div>
            <div className="flex items-stretch">
            <div className="left w-1/2 h-full">
                <div className="relative items-center py-16 justify-center h-full">
                    <Image src={LeftImage} alt="Logo" className="absolute inset-0 -z-10 w-full h-[150%]" style={{ objectFit: 'cover' }} />
                    <div className="text-left max-w-4xl mx-auto px-4 py-14">
                        <h1 className="text-white font-bold px-[15%] text-8xl md:text-4xl mb-6 ">
                        For More Info Contact Us Today
                        </h1>
                        <h2 className="text-gray-300 px-[15%] text-xl md:text-md ">
                        Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt labore.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="right w-1/2 bg-[#004F8F] p-16 h-full">
                <div className="layer1 mb-4 px-4">
                    <h2 className="text-4xl font-bold mb-5 text-white uppercase">Submit the Form</h2>
                </div>
                <div className="layer2 mb-4 px-4">
                    <div className="flex justify-between">
                        <div className="w-1/2 mr-2">
                            <label className="block text-white">First Name</label>
                            <input type="text" placeholder="Enter First Name" className="w-full p-2 mr-5 rounded-2xl border border-gray-400 bg-[#004F8F]" />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-white">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" className="w-full p-2 border rounded-2xl border-gray-400 bg-[#004F8F]" />
                        </div>
                    </div>
                </div>
                <div className="layer3 mb-4 px-4">
                    <div className="flex justify-between">
                        <div className="">
                            <label className="block text-white">Email</label>
                            <input type="text" placeholder="Enter Email" className="w-full p-2 rounded-2xl border border-gray-400 bg-[#004F8F]" />
                        </div>
                        <div className="">
                            <label className="block text-white">Mobile Number</label>
                            <input type="text" placeholder="Enter Mobile Number" className="w-full p-2 rounded-2xl border border-gray-400 bg-[#004F8F]" />
                        </div>
                    </div>
                </div>
                <div className="layer4 mb-4 px-4">
                    <label className="block text-white">Message or Query</label>
                    <textarea placeholder="Type you Message or Query Here......." className="w-full p-2 rounded-2xl border border-gray-400 bg-[#004F8F]" />
                </div>
                <div className="layer5 px-4">
                    <button className="bg-white text-[#004F8F] p-2 w-1/3 rounded-2xl">Send Message</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero3;

