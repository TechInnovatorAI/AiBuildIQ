import Image from "next/image";
import rightImage from "@/public/assets/home/Logo_16.jpg"

const Form4 = () => {
    return (
        <div className="lg:px-[10%] py-16 md:flex justify-center items-center rounded-lg ">
            <div className=" justify-center items-start p-16">
                <h1 className="text-md text-gray-300 font-bold mb-4 uppercase">Lorem Ipsum dolor</h1>
                <h2 className="text-4xl font-bold mb-4"><span className="text-[#004F8F]">Securing your Ideal Home</span> has Never been Easier</h2>
                <p className="text-md font-light mb-4">AiBuildiQ leverages cutting-edge AI to simplify the home loan process, eliminating uncertainties and streamlining every step. </p>
                <h2 className="text-xl text-[#004F8F] font-medium mb-4">Get smart, customized loan solutions designed to make your dream home a reality.</h2>
                <button className="bg-[#004F8F] text-white px-6 py-3 rounded-full ">
                    Explore Solutions
                </button>
            </div>
            <div className="lg:w-1/2 lg:justify-end mb-8 md:mb-0 p-16 relative">
                <Image
                    src={rightImage.src}
                    alt="Home"
                    width={500}
                    height={300}
                    style={{ height: '30vh', width: '100vw' }}
                    className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer  border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                />
                <div className="absolute left-[16%] top-1/4 -z-10 rounded-lg border-2 border-gray-300" style={{ height: '28vh', width: '75%' }}></div>
            </div>
        </div>
    );
};

export default Form4;

