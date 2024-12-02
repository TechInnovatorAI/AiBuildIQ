"use client";
import Image from "next/image";
import Link from "next/link";
import CardToggle from '@/components/custome-ui/card-toggle';
import React, { useState } from 'react'
import LeftImage from "@/public/assets/how-it-works/3.jpg"

const Groups = [
    {
        title: "Precision Assess",
        svg: (
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.62207" y="0.96875" width="90.8496" height="90.8496" rx="10" fill="white" />
                <path d="M39.0819 45.967C39.0819 45.3245 38.8267 44.7083 38.3724 44.254C37.9181 43.7996 37.3019 43.5444 36.6594 43.5444C36.0169 43.5444 35.4007 43.7996 34.9464 44.254C34.492 44.7083 34.2368 45.3245 34.2368 45.967V48.3895C34.2368 49.032 34.492 49.6482 34.9464 50.1025C35.4007 50.5568 36.0169 50.8121 36.6594 50.8121C37.3019 50.8121 37.9181 50.5568 38.3724 50.1025C38.8267 49.6482 39.0819 49.032 39.0819 48.3895V45.967ZM41.5045 48.3895V33.8542C41.5045 33.2117 41.7597 32.5955 42.214 32.1412C42.6683 31.6869 43.2845 31.4316 43.927 31.4316C44.5695 31.4316 45.1857 31.6869 45.64 32.1412C46.0943 32.5955 46.3496 33.2117 46.3496 33.8542V48.3895C46.3496 49.032 46.0943 49.6482 45.64 50.1025C45.1857 50.5568 44.5695 50.8121 43.927 50.8121C43.2845 50.8121 42.6683 50.5568 42.214 50.1025C41.7597 49.6482 41.5045 49.032 41.5045 48.3895ZM53.6172 41.1219C53.6172 40.4793 53.362 39.8632 52.9077 39.4088C52.4534 38.9545 51.8372 38.6993 51.1947 38.6993C50.5522 38.6993 49.936 38.9545 49.4817 39.4088C49.0274 39.8632 48.7721 40.4793 48.7721 41.1219V48.3895C48.7721 49.032 49.0274 49.6482 49.4817 50.1025C49.936 50.5568 50.5522 50.8121 51.1947 50.8121C51.8372 50.8121 52.4534 50.5568 52.9077 50.1025C53.362 49.6482 53.6172 49.032 53.6172 48.3895V41.1219Z" fill="#004F8F" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M58.4382 27.9716C55.5358 25.0704 51.8561 23.0706 47.8429 22.2134C43.8296 21.3562 39.654 21.6781 35.8196 23.1404C31.9851 24.6027 28.6555 27.1429 26.2321 30.4547C23.8087 33.7666 22.395 37.7087 22.1614 41.8059C21.9279 45.903 22.8844 49.9803 24.9157 53.5461C26.947 57.1119 29.9664 60.014 33.6098 61.9026C37.2533 63.7911 41.3652 64.5855 45.4499 64.19C49.5346 63.7944 53.4177 62.2257 56.631 59.6732L66.4399 69.4845C66.8945 69.9387 67.5109 70.1938 68.1535 70.1936C68.7961 70.1933 69.4124 69.9378 69.8666 69.4833C70.3208 69.0287 70.5759 68.4123 70.5757 67.7697C70.5755 67.127 70.32 66.5108 69.8654 66.0566L60.0565 56.2452C63.3037 52.1554 64.9336 47.0142 64.6356 41.8006C64.3376 36.5869 62.1303 31.6649 58.4382 27.9716ZM31.7829 31.3971C34.8637 28.3163 39.0421 26.5856 43.399 26.5856C47.7559 26.5856 51.9343 28.3163 55.0151 31.3971C58.0959 34.4779 59.8267 38.6564 59.8267 43.0133C59.8267 47.3702 58.0959 51.5486 55.0151 54.6294C51.9343 57.7102 47.7559 59.441 43.399 59.441C39.0421 59.441 34.8637 57.7102 31.7829 54.6294C28.7021 51.5486 26.9713 47.3702 26.9713 43.0133C26.9713 38.6564 28.7021 34.4779 31.7829 31.3971Z" fill="#004F8F" />
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
    const [isActiveCard, setIsActiveCard] = useState(1);

    return (
        <div>
            <div className="bg-gray-100 rounded-lg mx-4 py-2 text-center text-sm text-gray-600 ">
                <div className="inline-flex items-center">
                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.2747 16.548C28.2138 16.4244 28.1821 16.2884 28.1821 16.1506C28.1821 16.0128 28.2138 15.8768 28.2747 15.7532L29.4191 13.4121C30.0562 12.1086 29.5514 10.5549 28.2698 9.87488L25.9679 8.65353C25.846 8.58932 25.7404 8.49794 25.6594 8.38646C25.5784 8.27497 25.5241 8.14636 25.5007 8.01055L25.0505 5.44385C24.7998 4.01479 23.4779 3.05448 22.0416 3.2577L19.4615 3.62267C19.3251 3.64239 19.186 3.63049 19.0549 3.5879C18.9238 3.5453 18.8043 3.47315 18.7056 3.37702L16.8327 1.56525C15.7899 0.556405 14.1563 0.556345 13.1135 1.56525L11.2406 3.3772C11.1418 3.47331 11.0223 3.54545 10.8912 3.58804C10.7602 3.63063 10.6211 3.64254 10.4847 3.62285L7.90458 3.25788C6.46779 3.05454 5.14635 4.01497 4.89567 5.44403L4.44548 8.01061C4.42208 8.14642 4.36779 8.27503 4.28679 8.38653C4.2058 8.49802 4.10026 8.58942 3.97834 8.65365L1.67647 9.875C0.394824 10.555 -0.110017 12.1087 0.527147 13.4122L1.67149 15.7533C1.7324 15.8769 1.76408 16.0129 1.76408 16.1507C1.76408 16.2885 1.7324 16.4245 1.67149 16.5481L0.527087 18.8892C-0.110077 20.1927 0.394764 21.7464 1.6764 22.4264L3.97828 23.6478C4.10021 23.712 4.20576 23.8033 4.28677 23.9148C4.36778 24.0263 4.42208 24.1549 4.44548 24.2907L4.89567 26.8574C5.12388 28.1584 6.2394 29.0707 7.52146 29.0706C7.64773 29.0706 7.77585 29.0617 7.90464 29.0435L10.4848 28.6785C10.6212 28.6588 10.7603 28.6707 10.8913 28.7133C11.0224 28.7559 11.1419 28.8281 11.2406 28.9242L13.1135 30.736C13.635 31.2405 14.3039 31.4926 14.9731 31.4926C15.6421 31.4925 16.3114 31.2403 16.8327 30.736L18.7056 28.9242C18.9077 28.7288 19.1831 28.6395 19.4615 28.6785L22.0416 29.0435C23.4786 29.2468 24.7998 28.2864 25.0505 26.8574L25.5007 24.2908C25.5241 24.155 25.5784 24.0264 25.6594 23.9149C25.7404 23.8034 25.846 23.712 25.9679 23.6478L28.2698 22.4264C29.5514 21.7464 30.0562 20.1927 29.4191 18.8892L28.2747 16.548ZM11.4336 8.18692C13.2226 8.18692 14.6781 9.64242 14.6781 11.4314C14.6781 13.2204 13.2226 14.6759 11.4336 14.6759C9.64462 14.6759 8.18913 13.2204 8.18913 11.4314C8.18913 9.64242 9.64462 8.18692 11.4336 8.18692ZM9.75896 22.616C9.58619 22.7888 9.35972 22.8752 9.13331 22.8752C8.90689 22.8752 8.68036 22.7888 8.50765 22.616C8.1621 22.2705 8.1621 21.7102 8.50765 21.3646L20.1871 9.68514C20.5326 9.33959 21.093 9.33959 21.4385 9.68514C21.7841 10.0307 21.7841 10.591 21.4385 10.9365L9.75896 22.616ZM18.5124 24.1144C16.7234 24.1144 15.2679 22.6589 15.2679 20.8699C15.2679 19.0809 16.7234 17.6254 18.5124 17.6254C20.3014 17.6254 21.7569 19.0809 21.7569 20.8699C21.7569 22.6589 20.3014 24.1144 18.5124 24.1144Z" fill="#004F8F" />
                        <path d="M18.5125 19.3955C17.6993 19.3955 17.0377 20.0571 17.0377 20.8703C17.0377 21.6835 17.6993 22.345 18.5125 22.345C19.3257 22.345 19.9873 21.6835 19.9873 20.8703C19.9873 20.0571 19.3257 19.3955 18.5125 19.3955ZM11.4337 9.95703C10.6205 9.95703 9.95898 10.6186 9.95898 11.4318C9.95898 12.2449 10.6205 12.9066 11.4337 12.9066C12.2469 12.9066 12.9085 12.245 12.9085 11.4318C12.9084 10.6186 12.2469 9.95703 11.4337 9.95703Z" fill="#004F8F" />
                    </svg>
                    <span className="ml-2">SIGNUP OFFER: Get 20% OFF on interest on your first Loan.</span>
                    <Link href="/offer-details" className="underline text-blue-300 ml-1">See Offer Details</Link>
                </div>
            </div>
            <div className="w-full bg-white px-[10%] py-8">
                <div className="mx-auto md:w-[40%]">
                    <h3 className="text-center text-2xl">Intelligent, Automated AI Lending Now Accessible to<span className="text-[#004F8F]"> Community Credit Groups of Any Size</span></h3>
                </div>
                <div className="items-top items-center container ">
                    <div className="gap-4 md:flex">
                        {Groups.map((card, index) => (
                            <div className={`bg-[#F2F4F5] my-4 rounded-lg mx-auto `} onClick={() => setIsActiveCard(index + 1)}>
                                <CardToggle
                                    isActive={isActiveCard === index + 1}
                                    title={card.title}
                                    subtitle=""
                                    description={card.description}
                                    number={index + 1}
                                    image={card.svg}
                                    content={card.content}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:flex container mx-auto justify-center items-center mt-8 py-8 rounded-lg">
                <div className="md:w-1/2 mb-8 md:mb-0 p-8 relative">
                    <Image
                        src={LeftImage.src}
                        alt="Analysis illustration"
                        width={500}
                        height={300}
                        style={{ height: '30vh', width: '100vw' }}
                        className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                    />
                </div>
                <div className="md:w-1/2 w-full pl-8 py-8">
                    <h2 className="text-md font-bold text-gray-200">Lorem Ipsum dolor</h2>
                    <p className="text-2xl text-gray-600 font-bold py-4 w-[80%]">Community Credit Groups are at the <span className="text-[#004F8F]">Heart of What We Do</span></p>
                    <p className="text-gray-500">AiBuildIQ is a CUSO backed by over 70 credit union investors, led by credit union leaders on our board, and supported by passionate credit union advocates on our team. We are committed to serving all credit unions.</p>
                </div>
            </div>
            <div className="w-[70%] mx-auto bg-white px-[10%] py-8">
                <div className="text-center">
                    <p className="text-lg text-gray-600">As credit unions explore AI lending solutions, partnering with pioneers like AibuildIQ—leaders in compliance and fair lending—can make all the difference. The increasing use of this technology across credit unions has only deepened my conviction in its potential. It’s a people-first approach, where credit unions empower communities to flourish together.</p>
                </div>
                <hr className="my-4 mx-auto border-t border-blue-200 w-[50px] " />
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Mark Johnson</h2>
                    <p className="text-lg text-gray-600">AiBuildIQ Board Member, Former NCUA Chairman</p>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
