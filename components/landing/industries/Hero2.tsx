"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Toggle from '@/components/ui/toggle';

const Groups = [
    {
        title: "Precision Assess",
        svg: (
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.62207" y="0.572266" width="90.8496" height="90.8496" rx="10" fill="white" />
                <path d="M67.4821 57.2037L74.5847 50.1016L67.4821 42.9988L68.6265 41.8545C70.6065 39.8744 70.6065 36.6531 68.6269 34.673C67.6675 33.7143 66.3922 33.186 65.0357 33.186C63.6798 33.186 62.4043 33.7143 61.4455 34.673L60.3011 35.8174L53.1985 28.7148L51.1028 30.8111V34.124C54.8101 35.0075 57.5757 38.3478 57.5757 42.3218C57.5757 46.296 54.8101 49.6364 51.1028 50.5195V60.7921H44.9542L43.7285 62.018L53.1986 71.4877L60.3012 64.385L61.2875 65.3718C63.2675 67.3518 66.4889 67.3518 68.4689 65.3718C70.4489 63.3918 70.4488 60.1704 68.4689 58.1904L67.4821 57.2037Z" fill="#004F8F" />
                <path d="M47.7546 57.4451V47.4005H49.1493C51.9497 47.4005 54.2276 45.1227 54.2276 42.3224C54.2276 39.5223 51.9497 37.2446 49.1493 37.2446H47.7546V27.2002H37.7102V25.5821C37.7101 22.7818 35.4323 20.5039 32.6319 20.5039C29.832 20.5039 27.5543 22.7818 27.5543 25.5821V27.2002H17.5098V37.2447H18.905C21.3618 37.2447 23.4161 38.9982 23.883 41.3195C24.0932 41.6118 24.2063 41.9627 24.2063 42.3226C24.2063 42.6826 24.0932 43.0335 23.883 43.3257C23.4161 45.6466 21.3618 47.4006 18.905 47.4006H17.5098V57.4451H27.5542V55.8265C27.5542 53.0266 29.832 50.7488 32.6319 50.7488C35.4323 50.7488 37.7102 53.0266 37.7102 55.8265V57.4451H47.7546Z" fill="#004F8F" />
            </svg>
        ),
        description: "Accurate risk assessments and optimized policies ensure your lending business thrives, no matter the economic landscape.",
        content: [
            {
                title: "Expand Lending Access",
                description: " for Members with Effective Risk Management.",
            },
            {
                title: "Promote inclusivity",
                description: " with credit solutions for underserved borrowers.",
            },
            {
                title: "Improve financial stability",
                description: " by reducing delinquencies and charge-offs.",
            },
            {
                title: "Improve member satisfaction",
                description: " and stay ahead with quick loan decisions.",
            },
        ]
    },
    {
        title: "Decide with Assurance",
        svg: (
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.62207" y="0.572266" width="90.8496" height="90.8496" rx="10" fill="white" />
                <path d="M67.4821 57.2037L74.5847 50.1016L67.4821 42.9988L68.6265 41.8545C70.6065 39.8744 70.6065 36.6531 68.6269 34.673C67.6675 33.7143 66.3922 33.186 65.0357 33.186C63.6798 33.186 62.4043 33.7143 61.4455 34.673L60.3011 35.8174L53.1985 28.7148L51.1028 30.8111V34.124C54.8101 35.0075 57.5757 38.3478 57.5757 42.3218C57.5757 46.296 54.8101 49.6364 51.1028 50.5195V60.7921H44.9542L43.7285 62.018L53.1986 71.4877L60.3012 64.385L61.2875 65.3718C63.2675 67.3518 66.4889 67.3518 68.4689 65.3718C70.4489 63.3918 70.4488 60.1704 68.4689 58.1904L67.4821 57.2037Z" fill="#004F8F" />
                <path d="M47.7546 57.4451V47.4005H49.1493C51.9497 47.4005 54.2276 45.1227 54.2276 42.3224C54.2276 39.5223 51.9497 37.2446 49.1493 37.2446H47.7546V27.2002H37.7102V25.5821C37.7101 22.7818 35.4323 20.5039 32.6319 20.5039C29.832 20.5039 27.5543 22.7818 27.5543 25.5821V27.2002H17.5098V37.2447H18.905C21.3618 37.2447 23.4161 38.9982 23.883 41.3195C24.0932 41.6118 24.2063 41.9627 24.2063 42.3226C24.2063 42.6826 24.0932 43.0335 23.883 43.3257C23.4161 45.6466 21.3618 47.4006 18.905 47.4006H17.5098V57.4451H27.5542V55.8265C27.5542 53.0266 29.832 50.7488 32.6319 50.7488C35.4323 50.7488 37.7102 53.0266 37.7102 55.8265V57.4451H47.7546Z" fill="#004F8F" />
            </svg>
        ),
        description: "Accurate risk assessments and optimized policies ensure your lending business thrives, no matter the economic landscape.",
        content: [
            {
                title: "Expand Lending Access",
                description: " for Members with Effective Risk Management.",
            },
            {
                title: "Promote inclusivity",
                description: " with credit solutions for underserved borrowers.",
            },
            {
                title: "Improve financial stability",
                description: " by reducing delinquencies and charge-offs.",
            },
            {
                title: "Improve member satisfaction",
                description: " and stay ahead with quick loan decisions.",
            },
        ]
    },
    {
        title: "Relentlessly Optimize",
        svg: (
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.62207" y="0.572266" width="90.8496" height="90.8496" rx="10" fill="white" />
                <path d="M67.4821 57.2037L74.5847 50.1016L67.4821 42.9988L68.6265 41.8545C70.6065 39.8744 70.6065 36.6531 68.6269 34.673C67.6675 33.7143 66.3922 33.186 65.0357 33.186C63.6798 33.186 62.4043 33.7143 61.4455 34.673L60.3011 35.8174L53.1985 28.7148L51.1028 30.8111V34.124C54.8101 35.0075 57.5757 38.3478 57.5757 42.3218C57.5757 46.296 54.8101 49.6364 51.1028 50.5195V60.7921H44.9542L43.7285 62.018L53.1986 71.4877L60.3012 64.385L61.2875 65.3718C63.2675 67.3518 66.4889 67.3518 68.4689 65.3718C70.4489 63.3918 70.4488 60.1704 68.4689 58.1904L67.4821 57.2037Z" fill="#004F8F" />
                <path d="M47.7546 57.4451V47.4005H49.1493C51.9497 47.4005 54.2276 45.1227 54.2276 42.3224C54.2276 39.5223 51.9497 37.2446 49.1493 37.2446H47.7546V27.2002H37.7102V25.5821C37.7101 22.7818 35.4323 20.5039 32.6319 20.5039C29.832 20.5039 27.5543 22.7818 27.5543 25.5821V27.2002H17.5098V37.2447H18.905C21.3618 37.2447 23.4161 38.9982 23.883 41.3195C24.0932 41.6118 24.2063 41.9627 24.2063 42.3226C24.2063 42.6826 24.0932 43.0335 23.883 43.3257C23.4161 45.6466 21.3618 47.4006 18.905 47.4006H17.5098V57.4451H27.5542V55.8265C27.5542 53.0266 29.832 50.7488 32.6319 50.7488C35.4323 50.7488 37.7102 53.0266 37.7102 55.8265V57.4451H47.7546Z" fill="#004F8F" />
            </svg>
        ),
        description: "Accurate risk assessments and optimized policies ensure your lending business thrives, no matter the economic landscape.",
        content: [
            {
                title: "Expand Lending Access",
                description: " for Members with Effective Risk Management.",
            },
            {
                title: "Promote inclusivity",
                description: " with credit solutions for underserved borrowers.",
            },
            {
                title: "Improve financial stability",
                description: " by reducing delinquencies and charge-offs.",
            },
            {
                title: "Improve member satisfaction",
                description: " and stay ahead with quick loan decisions.",
            },
        ]
    },
];

const Hero2 = () => {
    return (
        <div>
            <div className="bg-gray-100 py-2 text-center text-sm text-gray-600 ">
                SIGNUP OFFER: Get 10% OFF on interest on your first Loan.
                <Link href="/offer-details" className="underline text-blue-300 ml-1">See Offer Details</Link>
            </div>
            <div className="w-full bg-white px-[10%] py-8">
                <div className="mx-auto w-2/3">
                    <h3 className="text-center text-2xl">Intelligent, Automated AI Lending Now Accessible to<span className="text-[#004F8F]"> Community Credit Groups of Any Size</span></h3>
                </div>
                {Groups.map((faq, index) => (
                    <div className="container mx-auto py-8  px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
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
