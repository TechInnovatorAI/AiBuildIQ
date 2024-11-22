"use client";
import Link from "next/link";
import React, { useState } from 'react'
import ReadyEvaluate from "@/components/custome-ui/ready-evaluate";
import TechBox from "@/components/custome-ui/tech-box"

const TechList = [
    {
        title: "AI Algorithms & Models",
        description: "AIBuildIQ uses proprietary AI algorithms and machine learning models to power its solutions. These advanced models analyze vast amounts of data to deliver accurate predictions and automate decision-making, helping lenders assess risk and make more informed choices.",
        ltr: true,
        image : '/assets/how-it-works/1.jpg'
    },
    {
        title: "Data-Driven Insights",
        description: "AIBuildIQ harnesses data to provide actionable insights that drive better lending decisions. By analyzing structured and unstructured data from various sources, the platform uncovers valuable trends and patterns, offering lenders deeper visibility into borrower behaviors and lending performance.",
        ltr: false,
        image : '/assets/how-it-works/2.jpg'
    },
    {
        title: "Real-Time Processing",
        description: "AIBuildIQ enables real-time data processing, allowing lenders to make quick and precise decisions. The platform's ability to analyze and respond to data in real time supports rapid credit decisions, fraud detection, and portfolio management, helping lenders stay agile and competitive.",
        ltr: true,
        image : '/assets/how-it-works/3.jpg'
    }
]

const Hero2 = () => {

    return (
        <div>
            <div className="bg-gray-100 py-2 text-center text-sm text-gray-600 ">
                <div className="inline-flex items-center">
                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.2747 16.548C28.2138 16.4244 28.1821 16.2884 28.1821 16.1506C28.1821 16.0128 28.2138 15.8768 28.2747 15.7532L29.4191 13.4121C30.0562 12.1086 29.5514 10.5549 28.2698 9.87488L25.9679 8.65353C25.846 8.58932 25.7404 8.49794 25.6594 8.38646C25.5784 8.27497 25.5241 8.14636 25.5007 8.01055L25.0505 5.44385C24.7998 4.01479 23.4779 3.05448 22.0416 3.2577L19.4615 3.62267C19.3251 3.64239 19.186 3.63049 19.0549 3.5879C18.9238 3.5453 18.8043 3.47315 18.7056 3.37702L16.8327 1.56525C15.7899 0.556405 14.1563 0.556345 13.1135 1.56525L11.2406 3.3772C11.1418 3.47331 11.0223 3.54545 10.8912 3.58804C10.7602 3.63063 10.6211 3.64254 10.4847 3.62285L7.90458 3.25788C6.46779 3.05454 5.14635 4.01497 4.89567 5.44403L4.44548 8.01061C4.42208 8.14642 4.36779 8.27503 4.28679 8.38653C4.2058 8.49802 4.10026 8.58942 3.97834 8.65365L1.67647 9.875C0.394824 10.555 -0.110017 12.1087 0.527147 13.4122L1.67149 15.7533C1.7324 15.8769 1.76408 16.0129 1.76408 16.1507C1.76408 16.2885 1.7324 16.4245 1.67149 16.5481L0.527087 18.8892C-0.110077 20.1927 0.394764 21.7464 1.6764 22.4264L3.97828 23.6478C4.10021 23.712 4.20576 23.8033 4.28677 23.9148C4.36778 24.0263 4.42208 24.1549 4.44548 24.2907L4.89567 26.8574C5.12388 28.1584 6.2394 29.0707 7.52146 29.0706C7.64773 29.0706 7.77585 29.0617 7.90464 29.0435L10.4848 28.6785C10.6212 28.6588 10.7603 28.6707 10.8913 28.7133C11.0224 28.7559 11.1419 28.8281 11.2406 28.9242L13.1135 30.736C13.635 31.2405 14.3039 31.4926 14.9731 31.4926C15.6421 31.4925 16.3114 31.2403 16.8327 30.736L18.7056 28.9242C18.9077 28.7288 19.1831 28.6395 19.4615 28.6785L22.0416 29.0435C23.4786 29.2468 24.7998 28.2864 25.0505 26.8574L25.5007 24.2908C25.5241 24.155 25.5784 24.0264 25.6594 23.9149C25.7404 23.8034 25.846 23.712 25.9679 23.6478L28.2698 22.4264C29.5514 21.7464 30.0562 20.1927 29.4191 18.8892L28.2747 16.548ZM11.4336 8.18692C13.2226 8.18692 14.6781 9.64242 14.6781 11.4314C14.6781 13.2204 13.2226 14.6759 11.4336 14.6759C9.64462 14.6759 8.18913 13.2204 8.18913 11.4314C8.18913 9.64242 9.64462 8.18692 11.4336 8.18692ZM9.75896 22.616C9.58619 22.7888 9.35972 22.8752 9.13331 22.8752C8.90689 22.8752 8.68036 22.7888 8.50765 22.616C8.1621 22.2705 8.1621 21.7102 8.50765 21.3646L20.1871 9.68514C20.5326 9.33959 21.093 9.33959 21.4385 9.68514C21.7841 10.0307 21.7841 10.591 21.4385 10.9365L9.75896 22.616ZM18.5124 24.1144C16.7234 24.1144 15.2679 22.6589 15.2679 20.8699C15.2679 19.0809 16.7234 17.6254 18.5124 17.6254C20.3014 17.6254 21.7569 19.0809 21.7569 20.8699C21.7569 22.6589 20.3014 24.1144 18.5124 24.1144Z" fill="#004F8F" />
                        <path d="M18.5125 19.3955C17.6993 19.3955 17.0377 20.0571 17.0377 20.8703C17.0377 21.6835 17.6993 22.345 18.5125 22.345C19.3257 22.345 19.9873 21.6835 19.9873 20.8703C19.9873 20.0571 19.3257 19.3955 18.5125 19.3955ZM11.4337 9.95703C10.6205 9.95703 9.95898 10.6186 9.95898 11.4318C9.95898 12.2449 10.6205 12.9066 11.4337 12.9066C12.2469 12.9066 12.9085 12.245 12.9085 11.4318C12.9084 10.6186 12.2469 9.95703 11.4337 9.95703Z" fill="#004F8F" />
                    </svg>
                    <span className="ml-2">SIGNUP OFFER: Get 20% OFF on interest on your first Loan.</span>
                    <Link href="/offer-details" className="underline text-blue-300 ml-1">See Offer Details</Link>
                </div>
            </div>
            <div>
                {TechList.map((tech, index) => (
                    <TechBox
                        title={tech.title}
                        description={tech.description}
                        image={tech.image}
                        ltr={tech.ltr}
                    />
                ))}
            </div>
            <ReadyEvaluate />
        </div>
    );
};

export default Hero2;
