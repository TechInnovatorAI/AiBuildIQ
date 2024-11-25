"use client"
import Image from "next/image";
import rightImage from "@/public/assets/home/Logo_16.jpg"

const backShadow = (
    <svg width="558" height="339" viewBox="0 0 558 339" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.93359" y="1.73975" width="555.066" height="335.882" rx="19" stroke="#DCE6EB" stroke-width="2" />
    </svg>
)

const itemData = [
    {
        image: (
            <svg width="78" height="79" viewBox="0 0 78 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.179443" y="0.978027" width="77.3663" height="77.3663" rx="10" fill="white" />
                <path d="M57.1162 49.2063L63.1647 43.1582L57.1162 37.1096L58.0908 36.1351C59.7769 34.4489 59.7769 31.7056 58.0911 30.0195C57.2742 29.203 56.1881 28.7531 55.033 28.7531C53.8782 28.7531 52.792 29.203 51.9755 30.0195L51.001 30.994L44.9525 24.94556L43.1678 26.73072V29.5519C46.3249 30.3043 48.68 33.1489 48.68 36.533C48.68 39.9175 46.3249 42.7621 43.1678 43.5141V52.2621H37.9318L36.888 53.306L44.9526 61.3704L51.0011 55.3218L51.841 56.1621C53.5272 57.8483 56.2705 57.8483 57.9566 56.1621C59.6428 54.476 59.6427 51.7327 57.9566 50.0465L57.1162 49.2063Z" fill="#004F8F" />
                <path d="M40.3166 49.4113V40.8574H41.5043C43.8891 40.8574 45.8289 38.9177 45.8289 36.5329C45.8289 34.1485 43.8891 32.2088 41.5043 32.2088H40.3166V23.65509H31.7629V22.27718C31.7628 19.89244 29.8231 17.952637 27.4383 17.952637C25.054 17.952637 23.11427 19.89244 23.11427 22.27718V23.65509H14.560486V32.2089H15.74863C17.8408 32.2089 19.59027 33.7021 19.98783 35.679C20.16683 35.9278 20.26313 36.2266 20.26313 36.5332C20.26313 36.8397 20.16683 37.1385 19.98783 37.3874C19.59027 39.3639 17.8408 40.8575 15.74863 40.8575H14.560486V49.4113H23.11417V48.0329C23.11417 45.6485 25.054 43.7088 27.4383 43.7088C29.8231 43.7088 31.7629 45.6485 31.7629 48.0329V49.4113H40.3166Z" fill="#004F8F" />
            </svg>
        ),
        title: "Our Mission",
        description: "AiBuildIQ is committed to empowering individuals in their journey to property ownership through our AI-powered loan solution, eliminating the need for brokers. Our mission is to provide straightforward and and fair lending options directly to property buyers, leveraging AI to create a transparent process that recognizes the unique value of each person."
    },
    {
        image: (
            <svg width="78" height="79" viewBox="0 0 78 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.179443" y="0.978027" width="77.3663" height="77.3663" rx="10" fill="white" />
                <path d="M57.1162 49.2063L63.1647 43.1582L57.1162 37.1096L58.0908 36.1351C59.7769 34.4489 59.7769 31.7056 58.0911 30.0195C57.2742 29.203 56.1881 28.7531 55.033 28.7531C53.8782 28.7531 52.792 29.203 51.9755 30.0195L51.001 30.994L44.9525 24.94556L43.1678 26.73072V29.5519C46.3249 30.3043 48.68 33.1489 48.68 36.533C48.68 39.9175 46.3249 42.7621 43.1678 43.5141V52.2621H37.9318L36.888 53.306L44.9526 61.3704L51.0011 55.3218L51.841 56.1621C53.5272 57.8483 56.2705 57.8483 57.9566 56.1621C59.6428 54.476 59.6427 51.7327 57.9566 50.0465L57.1162 49.2063Z" fill="#004F8F" />
                <path d="M40.3166 49.4113V40.8574H41.5043C43.8891 40.8574 45.8289 38.9177 45.8289 36.5329C45.8289 34.1485 43.8891 32.2088 41.5043 32.2088H40.3166V23.65509H31.7629V22.27718C31.7628 19.89244 29.8231 17.952637 27.4383 17.952637C25.054 17.952637 23.11427 19.89244 23.11427 22.27718V23.65509H14.560486V32.2089H15.74863C17.8408 32.2089 19.59027 33.7021 19.98783 35.679C20.16683 35.9278 20.26313 36.2266 20.26313 36.5332C20.26313 36.8397 20.16683 37.1385 19.98783 37.3874C19.59027 39.3639 17.8408 40.8575 15.74863 40.8575H14.560486V49.4113H23.11417V48.0329C23.11417 45.6485 25.054 43.7088 27.4383 43.7088C29.8231 43.7088 31.7629 45.6485 31.7629 48.0329V49.4113H40.3166Z" fill="#004F8F" />
            </svg>
        ),
        title: "Our Vision",
        description: "Our vision is a future where property ownership is simplified and accessible for all, supported by AI-driven, broker-free loan solutions. We aim to lead in transforming the lending landscape by championing fairness and transparency, ensuring that every person has the opportunity to secure property with ease and dignity."
    },
];

const Hero3 = () => {
    return (
        <>
            <div className="container bg-white py-8 flex flex-row justify-center items-center rounded-lg ">
                <div className="flex-1  flex flex-col justify-center items-start p-16">
                    <h1 className="text-md text-gray-300 font-bold mb-4">Lorem Ipsum dolor</h1>
                    <h2 className="text-4xl font-bold mb-4">We trust that AI can promote Greater Economic Equality.</h2>
                    <p className="text-md font-light mb-4">AiBuildIQ, a technology company based in the Philippines with headquarters in Manila, is powered by a team of driven, collaborative, and compassionate professionals. We’re committed to advancing economic equity by harnessing AI’s positive potential, ensuring that lending decisions reflect the inherent worth of every individual.</p>
                </div>
                <div className="flex-1 flex justify-end items-center p-16">
                    <Image src={rightImage.src} alt="Image" height={400} className="rounded-lg" width={400} />
                </div>
            </div>
            <div className="container mx-auto w-[70%] bg-gray-200 rounded-lg py-4">
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-2">
                    {itemData.map((item, index) => (
                        <div key={index} className={`p-6 `}>

                            <div className="relative mb-4 p-2">
                                {item.image}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 font-clash-display">{item.title}</h3>
                            <p className="text-gray-600 font-clash-display">{item.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero3;

