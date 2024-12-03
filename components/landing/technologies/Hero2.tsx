"use client";
import Link from "next/link";
import React from 'react'
import ReadyEvaluate from "@/components/custome-ui/ready-evaluate";
import TechBox from "@/components/custome-ui/tech-box"

const TechList = [
    {
        title: "AI Algorithms & Models",
        description: "AIBuildIQ uses proprietary AI algorithms and machine learning models to power its solutions. These advanced models analyze vast amounts of data to deliver accurate predictions and automate decision-making, helping lenders assess risk and make more informed choices.",
        ltr: true,
        image: '/assets/how-it-works/1.jpg'
    },
    {
        title: "Data-Driven Insights",
        description: "AIBuildIQ harnesses data to provide actionable insights that drive better lending decisions. By analyzing structured and unstructured data from various sources, the platform uncovers valuable trends and patterns, offering lenders deeper visibility into borrower behaviors and lending performance.",
        ltr: false,
        image: '/assets/how-it-works/2.jpg'
    },
    {
        title: "Real-Time Processing",
        description: "AIBuildIQ enables real-time data processing, allowing lenders to make quick and precise decisions. The platform's ability to analyze and respond to data in real time supports rapid credit decisions, fraud detection, and portfolio management, helping lenders stay agile and competitive.",
        ltr: true,
        image: '/assets/how-it-works/3.jpg'
    }
]

const Hero2 = () => {

    return (
        <div>
            <div className="mt-4">
                {TechList.map((tech, index) => (
                    <div key={'tech' + index}>
                        <TechBox
                            title={tech.title}
                            description={tech.description}
                            image={tech.image}
                            ltr={tech.ltr}
                        />
                    </div>
                ))}
            </div>
            <ReadyEvaluate btn="Contact Us" />
        </div>
    );
};

export default Hero2;
