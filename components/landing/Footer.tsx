"use client"
import React from 'react';
import Link from "next/link"

const follows = [
    {
        link: "/fb",
        letter: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.8294 22.7282C45.8294 10.2771 35.7242 0.171875 23.2731 0.171875C10.822 0.171875 0.716797 10.2771 0.716797 22.7282C0.716797 33.6454 8.47616 42.7356 18.7618 44.8333V29.495H14.2506V22.7282H18.7618V17.0891C18.7618 12.7357 22.3032 9.19439 26.6565 9.19439H32.2956V15.9613H27.7844C26.5438 15.9613 25.5287 16.9763 25.5287 18.2169V22.7282H32.2956V29.495H25.5287V45.1717C36.9197 44.0439 45.8294 34.4349 45.8294 22.7282Z" fill="#F1F1F1" />
            </svg>
        )
    },
    {
        link: "/ins",
        letter: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7206 0.171631C10.2941 0.171631 0.220703 10.245 0.220703 22.6715C0.220703 35.0979 10.2941 45.1713 22.7206 45.1713C35.147 45.1713 45.2204 35.0979 45.2204 22.6715C45.2204 10.245 35.147 0.171631 22.7206 0.171631Z" fill="#F1F1F1" />
                <path d="M23.9035 11.1409C25.2009 11.1443 25.8593 11.1512 26.4279 11.1674L26.6516 11.1755C26.9099 11.1847 27.1647 11.1962 27.4726 11.2101C28.6996 11.2677 29.5369 11.4615 30.2714 11.7463C31.0325 12.0392 31.6737 12.4359 32.3149 13.0759C32.9015 13.6522 33.3553 14.3496 33.6445 15.1194C33.9293 15.8539 34.1231 16.6912 34.1807 17.9193C34.1946 18.226 34.2061 18.4809 34.2153 18.7404L34.2222 18.9641C34.2395 19.5315 34.2465 20.1899 34.2488 21.4873L34.2499 22.3475V23.8582C34.2527 24.6993 34.2439 25.5405 34.2234 26.3814L34.2165 26.6051C34.2073 26.8646 34.1957 27.1194 34.1819 27.4262C34.1242 28.6543 33.9282 29.4904 33.6445 30.2261C33.3553 30.9959 32.9015 31.6933 32.3149 32.2695C31.7386 32.8562 31.0412 33.3099 30.2714 33.5992C29.5369 33.884 28.6996 34.0777 27.4726 34.1354L26.6516 34.17L26.4279 34.1769C25.8593 34.1931 25.2009 34.2011 23.9035 34.2034L23.0433 34.2046H21.5337C20.6922 34.2076 19.8507 34.1987 19.0094 34.1781L18.7857 34.1712C18.5119 34.1608 18.2383 34.1489 17.9646 34.1354C16.7376 34.0777 15.9004 33.884 15.1647 33.5992C14.3953 33.3098 13.6984 32.856 13.1224 32.2695C12.5354 31.6934 12.0812 30.996 11.7916 30.2261C11.5068 29.4915 11.3131 28.6543 11.2554 27.4262L11.2208 26.6051L11.215 26.3814C11.1938 25.5405 11.1842 24.6994 11.1862 23.8582V21.4873C11.183 20.6461 11.1915 19.805 11.2116 18.9641L11.2196 18.7404C11.2289 18.4809 11.2404 18.226 11.2542 17.9193C11.3119 16.6912 11.5056 15.8551 11.7905 15.1194C12.0807 14.3493 12.5357 13.6519 13.1236 13.0759C13.6992 12.4896 14.3957 12.0358 15.1647 11.7463C15.9004 11.4615 16.7365 11.2677 17.9646 11.2101C18.2714 11.1962 18.5274 11.1847 18.7857 11.1755L19.0094 11.1685C19.8503 11.1481 20.6914 11.1392 21.5326 11.142L23.9035 11.1409ZM22.7181 16.9068C21.1888 16.9068 19.7223 17.5143 18.6409 18.5956C17.5596 19.6769 16.9521 21.1435 16.9521 22.6727C16.9521 24.202 17.5596 25.6685 18.6409 26.7499C19.7223 27.8312 21.1888 28.4387 22.7181 28.4387C24.2473 28.4387 25.7139 27.8312 26.7952 26.7499C27.8765 25.6685 28.484 24.202 28.484 22.6727C28.484 21.1435 27.8765 19.6769 26.7952 18.5956C25.7139 17.5143 24.2473 16.9068 22.7181 16.9068ZM22.7181 19.2132C23.1724 19.2131 23.6223 19.3025 24.042 19.4763C24.4618 19.6501 24.8432 19.9049 25.1645 20.226C25.4858 20.5472 25.7407 20.9286 25.9146 21.3483C26.0886 21.768 26.1781 22.2178 26.1782 22.6722C26.1783 23.1265 26.0889 23.5764 25.9151 23.9961C25.7413 24.4159 25.4865 24.7973 25.1653 25.1186C24.8441 25.4399 24.4628 25.6948 24.0431 25.8687C23.6234 26.0427 23.1735 26.1322 22.7192 26.1323C21.8017 26.1323 20.9217 25.7678 20.2729 25.119C19.6241 24.4702 19.2597 23.5903 19.2597 22.6727C19.2597 21.7552 19.6241 20.8752 20.2729 20.2265C20.9217 19.5777 21.8017 19.2132 22.7192 19.2132M28.7734 15.177C28.3911 15.177 28.0245 15.3289 27.7542 15.5992C27.4838 15.8696 27.332 16.2362 27.332 16.6185C27.332 17.0008 27.4838 17.3675 27.7542 17.6378C28.0245 17.9081 28.3911 18.06 28.7734 18.06C29.1557 18.06 29.5224 17.9081 29.7927 17.6378C30.0631 17.3675 30.2149 17.0008 30.2149 16.6185C30.2149 16.2362 30.0631 15.8696 29.7927 15.5992C29.5224 15.3289 29.1557 15.177 28.7734 15.177Z" fill="#003662" />
            </svg>
        )
    },
    {
        link: "/yoube",
        letter: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8682 22.2801L21.6042 19.8238C21.1448 19.6106 20.7674 19.8496 20.7674 20.3582V24.9847C20.7674 25.4933 21.1448 25.7324 21.6042 25.5191L26.8658 23.0629C27.3276 22.8472 27.3276 22.4957 26.8682 22.2801ZM23.1112 0.171631C10.6847 0.171631 0.611328 10.245 0.611328 22.6715C0.611328 35.0979 10.6847 45.1713 23.1112 45.1713C35.5377 45.1713 45.611 35.0979 45.611 22.6715C45.611 10.245 35.5377 0.171631 23.1112 0.171631ZM23.1112 31.812C11.5941 31.812 11.3925 30.7738 11.3925 22.6715C11.3925 14.5692 11.5941 13.5309 23.1112 13.5309C34.6283 13.5309 34.8299 14.5692 34.8299 22.6715C34.8299 30.7738 34.6283 31.812 23.1112 31.812Z" fill="#F1F1F1" />
            </svg>
        )
    }
]
const columns = [
    {
        title: "Solutions",
        subtitles: [
            { letter: "Risk Evaluation", link: "/solutions/risk-evaluation" },
            { letter: "Threat Analysis", link: "/solutions/threat-analysis" },
            { letter: "Lending Analysis", link: "/solutions/lending-analysis" },
            { letter: "Loadmap to Success", link: "/solutions/loadmap-to-success" }
        ]
    },
    {
        title: "Industries",
        subtitles: [
            {
                letter: "Comnunity Credit Groups", link: "/industries/community-credit-groups"
            },
            {
                letter: "Banking Corporations", link: "/industries/banking-corporation"
            },
            {
                letter: "Focused Lenders", link: "/industries/focused-lender"
            }
        ]
    },
    {
        title: "Company",
        subtitles: [
            {
                letter: "How it works", link: "/how-it-works"
            },
            {
                letter: "About Us", link: "/about-us"
            },
            {
                letter: "Blogs & Articles", link: "/blog"
            },
            {
                letter: "FAQs", link: "/faqs"
            },
            {
                letter: "Contact Us", link: "/contact-us"
            }
        ]
    },
];

const rightContent = {
    title: "Get in Touch",
    subtitles: [
        {
            title: "Address:",
            description: "Unit 3, Almanza Station, Alabang-Zapote Road"
        },
        {
            title: "Contact Number:",
            description: " (087) 811-0113, 63-2-8051360, (02) 297-1685"
        },
        {
            title: "Email:",
            description: "info@aibuildiq.com"
        },
    ]
};

const Footer = () => {
    return (
        <footer className="bg-[#003662] text-white px-[10%]">
            <div className="mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between">
                    <div className="md:w-3/4 sm:w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 justify-between">
                            {columns.map((column, index) => (
                                <div key={'column'+index} className=" p-4">
                                    <h3 className="text-lg font-bold mb-2">{column.title}</h3>
                                    {column.subtitles.map((subtitle, indx) => (
                                        <p key={'subtitle'+indx} className="mb-1 py-2" >
                                            <Link href={subtitle.link}>{subtitle.letter}</Link>
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="my-4 md:w-1/2 sm:w-full">
                            <label htmlFor="subscribe" className="block text-sm font-medium text-gray-300">Subscribe to Newsletter</label>
                            <div className="mt-1 flex rounded-md shadow-sm items-center relative">
                                <input type="text" name="subscribe" id="subscribe" className="flex-1 form-input block w-full min-w-0 rounded-full border-2 border-gray-300 bg-[#003662] py-3 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm" placeholder="Enter your Email" />
                                <button type="button" className="absolute right-2  border-gray-300 inline-flex items-center px-4 py-2 border  border-transparent text-sm font-medium rounded-full shadow-sm text-[#003662] bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/4 sm:w-full  p-4">
                        <h3 className="text-lg font-bold mb-2">{rightContent.title}</h3>
                        {rightContent.subtitles.map((subtitle, index) => (
                            <div key={index} className="mb-2 py-2">
                                <p className="mb-1 font-bold">{subtitle.title}</p>
                                <p className="mb-1">{subtitle.description}</p>
                            </div>
                        ))}
                        <h3 className="text-lg font-bold mb-2">Follow Us On</h3>
                        <div className="flex items-center rounded-lg">
                            {follows.map((follow, index) => (
                                <Link key={'follow'+index} href={follow.link} target="_blank" rel="noopener noreferrer" className="mr-4">
                                    {follow.letter}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-t border-gray-700 w-full" />
                <div className="md:flex justify-between">
                    <div className="md:w-1/2 p-4">
                        <p>&copy; 2020 - 2024 All Rights Reserved. <Link href="https://aibuildaq.com" className="underline text-gray-200 hover:text-gray-300">aibuildaq.com</Link></p>
                    </div>
                    <div className="md:w-1/2 p-4 text-right lg:flex justify-end gap-4">
                        <div><Link href="/terms-and-conditions" className="md:w-full py-4 text-gray-200 hover:text-gray-300">Terms and Conditions</Link></div>
                        <div><Link href="/privacy-policy" className="text-gray-200 py-4 hover:text-gray-300">Privacy Policy</Link></div>
                        <div><Link href="/cookie-policy" className="text-gray-200 py-4 hover:text-gray-300">Cookie Policy</Link></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
