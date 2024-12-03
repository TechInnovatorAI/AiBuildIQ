"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Toggle from '@/components/custome-ui/toggle';

const FAQs = [
    {
        title: "<span class='text-[#004F8F]'>AI-Driven Loan</span> Process",
        description: "Discover how AiBuildIQ uses AI to simplify the property loan process without brokers. Our AI-driven system ensures transparency, efficiency, and fair lending decisions.",
        content: [
            {
                title: "What is AIBuildIQ and how does it work?",
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
        title: "<span class='text-[#004F8F]'>Eligibility</span> Criteria",
        description: "Learn about the eligibility requirements for our AI-powered property loans. Find out how easy it is to qualify for a loan and the factors we consider.",
        content: [
            {
                title: "What is AIBuildIQ and how does it work?",
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
        title: "<span class='text-[#004F8F]'>Loan Application</span> Process",
        description: "Understand the steps involved in applying for a loan with AiBuildIQ. From application to approval, we guide you through a seamless, broker-free process.",
        content: [
            {
                title: "What is AIBuildIQ and how does it work?",
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
        title: "<span class='text-[#004F8F]'>Security</span> and <span class='text-[#004F8F]'>Privacy</span>",
        description: "We prioritize the security and confidentiality of your data. Learn how AiBuildIQ protects your personal and financial information through advanced encryption and AI technologies.",
        content: [
            {
                title: "What is AIBuildIQ and how does it work?",
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
        title: "<span class='text-[#004F8F]'>Partnerships</span> and <span class='text-[#004F8F]'>Collaborations</span>",
        description: "Learn about our partnerships with top industry players and how we collaborate to offer innovative loan solutions. Find out how we work with lenders to benefit the industry.",
        content: [
            {
                title: "What is AIBuildIQ and how does it work?",
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
            {FAQs.map((faq, index) => (
                <div key={index} className={`w-full ${index % 2 === 0 ? 'bg-white' : 'bg-gray-300'} px-[10%] `}>
                    <div className="mx-auto py-8  px-2 sm:px-6 lg:px-8 ">
                        <div className="md:container">
                            <motion.div
                                className="mb-12"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="text-black text-4xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: faq.title }}></div>
                                <h2 className="text-md sm:w-full md:w-1/2 justify-center text-gray-900">
                                    {faq.description}
                                </h2>
                            </motion.div>
                            {faq.content.map((aq, idx) => (
                                <Toggle
                                    key={'faq'+idx}
                                    title={aq.title}
                                    description={aq.description}
                                    index={idx}
                                />
                            ))}
                        </div>
                    </div>                    
                </div>
            ))}
        </div>
    );
};

export default Hero2;
