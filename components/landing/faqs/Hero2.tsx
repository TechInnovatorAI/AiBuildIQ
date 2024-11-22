"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Toggle from '@/components/custome-ui/toggle';

const FAQs = [
    {
        title: "AI-Driven Loan Process",
        description: "Discover how AiBuildIQ uses AI to simplify the property loan process without brokers. Our AI-driven system ensures transparency, efficiency, and fair lending decisions.",
        content: [
            {
                title: "AI-Powered Risk Assessment",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "How does AIBuildIQ ensure data security and privacy?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "What is AIBuildIQ and how does it work?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
        ]
    },
    {
        title: "Eligibility Criteria",
        description: "Learn about the eligibility requirements for our AI-powered property loans. Find out how easy it is to qualify for a loan and the factors we consider.",
        content: [
            {
                title: "AI-Powered Risk Assessment",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "How does AIBuildIQ ensure data security and privacy?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "What is AIBuildIQ and how does it work?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
        ]
    },
    {
        title: "Loan Application Process",
        description: "Understand the steps involved in applying for a loan with AiBuildIQ. From application to approval, we guide you through a seamless, broker-free process.",
        content: [
            {
                title: "AI-Powered Risk Assessment",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "How does AIBuildIQ ensure data security and privacy?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "What is AIBuildIQ and how does it work?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
        ]
    },
    {
        title: "Security and Privacy",
        description: "We prioritize the security and confidentiality of your data. Learn how AiBuildIQ protects your personal and financial information through advanced encryption and AI technologies.",
        content: [
            {
                title: "AI-Powered Risk Assessment",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "How does AIBuildIQ ensure data security and privacy?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "What is AIBuildIQ and how does it work?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
        ]
    },
    {
        title: "Partnerships and Collaborations",
        description: "Learn about our partnerships with top industry players and how we collaborate to offer innovative loan solutions. Find out how we work with lenders to benefit the industry.",
        content: [
            {
                title: "AI-Powered Risk Assessment",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "How does AIBuildIQ ensure data security and privacy?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "Who can benefit from AIBuildIQ?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
            {
                title: "What is AIBuildIQ and how does it work?",
                description: "AIBuildIQ is an innovative platform designed to transform the real estate lending industry. We leverage advanced AI-powered data-driven solutions to streamline the entire loan process, from origination to underwriting and risk assessment.",
            },
        ]
    }
];

const Hero2 = () => {
    return (
        <div>
            <div className="bg-gray-100 py-2 text-center text-sm text-gray-600 ">

                SIGNUP OFFER: Get 10% OFF on interest on your first Loan.
                <Link href="/offer-details" className="underline text-blue-300 ml-1">See Offer Details</Link>
            </div>
            <div className="w-full bg-white px-[10%] ">
                {FAQs.map((faq, index) => (
                    <div className="container mx-auto py-8  px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-[#0256c5] text-4xl font-bold mb-2">
                                {faq.title}
                            </p>
                            <h2 className="text-md w-1/2 justify-center text-gray-900 dark:text-white">
                                {faq.description}
                            </h2>
                        </motion.div>
                        {faq.content.map((aq, idx) => (
                            <Toggle
                                key={idx}
                                title={aq.title}
                                description={aq.description}
                                index={idx}
                            />
                        ))}
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default Hero2;
