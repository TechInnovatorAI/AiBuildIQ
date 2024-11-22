import Image from "next/image";
import rightImage from "@/public/assets/home/Logo_16.jpg"

const backShadow = (
    <svg width="558" height="339" viewBox="0 0 558 339" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.93359" y="1.73975" width="555.066" height="335.882" rx="19" stroke="#DCE6EB" stroke-width="2" />
    </svg>
)

const Form4 = () => {
    return (
        <div className="bg-white px-[10%] py-16 flex flex-row justify-center items-center rounded-lg ">
            <div className="flex-1  flex flex-col justify-center items-start p-16">
                <h1 className="text-md text-gray-300 font-bold mb-4">Lorem Ipsum dolor</h1>
                <h2 className="text-4xl font-bold mb-4">Securing your Ideal Home has Never been Easier</h2>
                <p className="text-md font-light mb-4">AIBuildIQ uses advanced AI technology to simplify the home loan process. No more lengthy paperwork or uncertainty </p>
                <h2 className="text-xl text-[#004F8F] font-medium mb-4">Just Smart, Tailored Solutions for your Dream Home</h2>
                <button className="bg-[#004F8F] text-white px-6 py-3 rounded-full font-bold">
                    Explore Solutions
                </button>
            </div>
            <div className="flex-1 flex justify-center items-center p-16">
                <Image src={rightImage.src} alt="Image" height={400} className="rounded-lg" width={400} />
            </div>
        </div>
    );
};

export default Form4;

