"use client";
import Link from "next/link";
import Image from "next/image"

const TopImage = (
    <svg width="1841" height="425" viewBox="0 0 1841 425" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.359375" y="0.5" width="1839.95" height="424.193" rx="20" fill="#004F8F" />
        <path opacity="0.05" d="M922.87 269.836C1326.5 79.0477 1702.67 188.601 1840.31 267.226V404.677C1840.31 415.723 1831.35 424.677 1820.31 424.677H20.3602C9.31458 424.677 0.360229 415.723 0.360229 404.677V230.868C139.687 323.352 519.246 460.624 922.87 269.836Z" fill="white" />
        <path opacity="0.05" d="M922.87 304.555C1326.5 113.766 1702.67 223.319 1840.31 301.944V404.693C1840.31 415.739 1831.35 424.693 1820.31 424.693H20.3602C9.31458 424.693 0.360229 415.739 0.360229 404.693V265.586C139.687 358.071 519.246 495.343 922.87 304.555Z" fill="white" />
        <path opacity="0.05" d="M275.333 0.500992C354.224 61.536 569.845 148.606 801.199 0.500817L275.333 0.500992Z" fill="white" />
    </svg>
);

const Hero = () => {
    return (
        <>
            <div className="mt-24"></div>
            <div className="relative bg-[#004F8F] min-h-screen flex items-center justify-center">
                {/* <div className="absolute -z-10 w-full ">{TopImage}</div> */}
                <div className="foreground"></div>
                <div className="text-center max-w-4xl mx-auto px-4 py-16">
                    <h1 className="text-white uppercase text-2xl md:text-3xl mb-6 font-clash-display ">
                    Roadmap to Success
                    </h1>

                    <h2 className="text-white text-5xl md:text-6xl font-semibold mb-4 font-clash-display ">
                    Your Roadmap to AI-Driven Lending Success
                    </h2>

                    <p className="text-white text-lg mb-12  max-w-2xl mx-auto font-clash-display">
                    Committed long-term partnership for continuous improvement
                    </p>
                    <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                    Start your Journey to Success
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
