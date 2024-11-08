"use client";
import Image from "next/image";
import Link from "next/link";
import drivenImage from "@/public/assets/home/Logo_4.jpg"

const itemData = [
    {
        image: (
            <svg width="78" height="79" viewBox="0 0 78 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.179443" y="0.978027" width="77.3663" height="77.3663" rx="10" fill="white" />
                <path d="M57.1162 49.2063L63.1647 43.1582L57.1162 37.1096L58.0908 36.1351C59.7769 34.4489 59.7769 31.7056 58.0911 30.0195C57.2742 29.203 56.1881 28.7531 55.033 28.7531C53.8782 28.7531 52.792 29.203 51.9755 30.0195L51.001 30.994L44.9525 24.94556L43.1678 26.73072V29.5519C46.3249 30.3043 48.68 33.1489 48.68 36.533C48.68 39.9175 46.3249 42.7621 43.1678 43.5141V52.2621H37.9318L36.888 53.306L44.9526 61.3704L51.0011 55.3218L51.841 56.1621C53.5272 57.8483 56.2705 57.8483 57.9566 56.1621C59.6428 54.476 59.6427 51.7327 57.9566 50.0465L57.1162 49.2063Z" fill="#004F8F" />
                <path d="M40.3166 49.4113V40.8574H41.5043C43.8891 40.8574 45.8289 38.9177 45.8289 36.5329C45.8289 34.1485 43.8891 32.2088 41.5043 32.2088H40.3166V23.65509H31.7629V22.27718C31.7628 19.89244 29.8231 17.952637 27.4383 17.952637C25.054 17.952637 23.11427 19.89244 23.11427 22.27718V23.65509H14.560486V32.2089H15.74863C17.8408 32.2089 19.59027 33.7021 19.98783 35.679C20.16683 35.9278 20.26313 36.2266 20.26313 36.5332C20.26313 36.8397 20.16683 37.1385 19.98783 37.3874C19.59027 39.3639 17.8408 40.8575 15.74863 40.8575H14.560486V49.4113H23.11417V48.0329C23.11417 45.6485 25.054 43.7088 27.4383 43.7088C29.8231 43.7088 31.7629 45.6485 31.7629 48.0329V49.4113H40.3166Z" fill="#004F8F" />
            </svg>
        ),
        title: "Dynamic Lender & Borrower Matching",
        description: "Automated matching that aligns borrowers with lenders based on loan type, profile, and risk assessment."
    },
    {
        image: (
            <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.90448" y="0.978027" width="77.3663" height="77.3663" rx="10" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.322 35.6195L30.8135 28.1876C30.6928 27.8574 30.6313 27.5086 30.6317 27.157C30.6317 25.5012 31.9739 24.1591 33.6296 24.1591C35.2536 24.1591 36.5759 25.4504 36.626 27.0623L43.3374 29.412C43.8873 28.7665 44.7059 28.3571 45.6203 28.3571C46.1179 28.3563 46.6078 28.48 47.0454 28.7169L54.7826 22.1063C54.67 21.7863 54.6127 21.4494 54.613 21.1102C54.613 19.4546 55.9552 18.1123 57.6109 18.1123C59.2667 18.1123 60.609 19.4546 60.609 21.1102C60.609 22.766 59.2667 24.1083 57.6109 24.1083C57.1133 24.1091 56.6234 23.9854 56.1858 23.7485L48.4486 30.3591C48.5612 30.6791 48.6186 31.0159 48.6183 31.3552C48.6183 33.0108 47.276 34.3531 45.6202 34.3531C43.9962 34.3531 42.674 33.0617 42.6239 31.4499L35.9125 29.1002C35.3626 29.7457 34.544 30.1552 33.6296 30.1552C33.1438 30.1558 32.6651 30.0379 32.2353 29.8116L23.7437 37.2435C23.8644 37.5737 23.926 37.9226 23.9256 38.2742C23.9256 39.93 22.5833 41.2721 20.9275 41.2721C19.2719 41.2719 17.9297 39.9298 17.9297 38.274C17.9297 36.6181 19.2719 35.2761 20.9276 35.2761C21.4134 35.2754 21.8921 35.3933 22.322 35.6195ZM55.3303 30.0287C54.5848 30.0287 53.9767 30.6368 53.9767 31.3823V59.0077C53.9767 59.7533 54.5848 60.3613 55.3303 60.3613H59.8918C60.6375 60.3613 61.2455 59.7533 61.2455 59.0077V31.3823C61.2455 30.6368 60.6376 30.0287 59.8918 30.0287H55.3303ZM43.3395 41.0679C42.5939 41.0679 41.986 41.676 41.986 42.4215V59.2907C41.986 60.0363 42.594 60.6443 43.3395 60.6443H47.9012C48.6468 60.6443 49.2547 60.0363 49.2547 59.2907V42.4215C49.2547 41.676 48.6468 41.0679 47.9012 41.0679H43.3395ZM31.3489 37.1048C30.6032 37.1048 29.9952 37.7129 29.9952 38.4584V59.5737C29.9952 60.3192 30.6031 60.9273 31.3489 60.9273H35.9104C36.6559 60.9273 37.264 60.3192 37.264 59.5737V38.4584C37.264 37.7129 36.6559 37.1048 35.9104 37.1048H31.3489ZM19.3582 48.7565H23.9196C24.6652 48.7565 25.2733 49.3645 25.2733 50.1101V59.8566C25.2733 60.6021 24.6652 61.2102 23.9196 61.2102H19.3582C18.6126 61.2102 18.0045 60.6021 18.0045 59.8566V50.1101C18.0046 49.3644 18.6127 48.7565 19.3582 48.7565Z" fill="#004F8F" />
            </svg>
        ),
        title: "Data-Driven Insights & Market Analytics",
        description: "Integration with real estate data providers (like Zillow, Redfin) for up-to-date property valuations and trends."
    },
    {
        image: (
            <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.65448" y="0.978027" width="77.3663" height="77.3663" rx="10" fill="white" />
                <path d="M37.9955 19.9001C32.8216 20.1971 27.9697 22.2076 24.097 25.6591L30.0863 31.6484C32.3403 29.772 35.0771 28.638 37.9955 28.3714V19.9001ZM28.1876 33.5459L22.1983 27.5567C18.7439 31.4283 16.7309 36.2806 16.4321 41.4556H24.9036C25.1721 38.5368 26.3085 35.7997 28.1876 33.5459ZM53.7716 41.4556H62.2432C61.9443 36.2806 59.9314 31.4283 56.4769 27.5567L50.4877 33.5459C52.3668 35.7996 53.5032 38.5368 53.7716 41.4556ZM53.7697 44.14C53.5816 46.2072 52.9916 47.9315 52.2939 49.3146C52.8384 50.1542 53.3795 50.9962 53.9169 51.8405C54.9379 53.445 54.7119 55.5046 53.3672 56.8494C53.0461 57.1711 52.673 57.4361 52.2635 57.6334L53.6584 59.0284C53.7831 59.1534 53.9313 59.2526 54.0945 59.3201C54.2576 59.3877 54.4325 59.4224 54.6091 59.4222C54.9533 59.4222 55.2973 59.2909 55.5598 59.0284C59.5795 55.0091 61.9234 49.7643 62.2442 44.14H53.7697ZM24.9056 44.14H16.4311C16.7519 49.7643 19.0958 55.0091 23.1154 59.0285C23.3779 59.291 23.722 59.4222 24.066 59.4222C24.4101 59.4222 24.7542 59.2909 25.0167 59.0285L29.0891 54.9558C29.6141 54.4308 29.6141 53.5795 29.0891 53.0544C28.0264 51.9917 25.3494 49.0163 24.9056 44.14ZM54.5783 25.6591C50.7055 22.2075 45.8536 20.1971 40.6798 19.9001V28.3714C43.5981 28.638 46.335 29.772 48.5889 31.6484L54.5783 25.6591ZM42.32 39.8381C40.6756 38.1937 38 38.1937 36.3557 39.8381C34.7113 41.4824 34.7113 44.158 36.3557 45.8023C38.433 47.8797 48.6421 54.3982 49.7994 55.1346C50.057 55.2986 50.3629 55.3697 50.6664 55.3364C50.97 55.3031 51.2531 55.1673 51.469 54.9513C51.685 54.7354 51.8208 54.4523 51.8541 54.1487C51.8874 53.8452 51.8163 53.5393 51.6523 53.2817C50.9158 52.1245 44.3973 41.9153 42.32 39.8381Z" fill="#004F8F" />
            </svg>
        ),
        title: "Loan Proposal Grading",
        description: "AI-driven scoring models that provide a risk grade for each loan proposal."
    },
    {
        image: (
            <svg width="78" height="79" viewBox="0 0 78 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.404419" y="0.978027" width="77.3663" height="77.3663" rx="10" fill="white" />
                <path d="M20.5978 41.0418C18.9644 41.5085 17.873 42.9807 17.873 44.6334V49.6055C17.873 51.3085 19.0208 52.7488 20.5837 53.1929C20.4901 52.5905 20.442 51.9739 20.442 51.3458C20.442 42.2456 20.4353 42.7977 20.4586 42.3487C20.4809 41.9061 20.5282 41.4703 20.5978 41.0418ZM57.5765 41.0418C57.6801 41.6774 57.7332 42.3238 57.7332 42.976V51.3458C57.7332 51.9739 57.6851 52.5905 57.5915 53.1929C59.1544 52.7488 60.3021 51.3085 60.3021 49.6055V44.6334C60.3021 42.9254 59.1469 41.481 57.5765 41.0418ZM54.9156 40.9043H41.2107L37.0258 42.9967C36.5079 43.2551 35.9372 43.3898 35.3585 43.3903C34.6657 43.3903 33.987 43.1981 33.3978 42.8335C32.2906 42.149 31.6293 40.9631 31.6293 39.6612V33.4825C26.7608 33.9035 22.9281 38.0005 22.9281 42.976V51.3458C22.9281 56.6005 27.2033 60.8758 32.458 60.8758H45.7171C50.9719 60.8758 55.2471 56.6005 55.2471 51.3458V42.976C55.2471 42.2733 55.17 41.578 55.0192 40.9026C54.9844 40.9043 54.9504 40.9043 54.9156 40.9043ZM34.1154 47.1195C34.1154 47.8059 33.5589 48.3625 32.8724 48.3625C32.1859 48.3625 31.6293 47.8059 31.6293 47.1195V44.6334C31.6293 43.9469 32.1859 43.3903 32.8724 43.3903C33.5589 43.3903 34.1154 43.9469 34.1154 44.6334V47.1195ZM41.5737 53.3347H36.6015C35.915 53.3347 35.3585 52.7781 35.3585 52.0916C35.3585 51.4051 35.915 50.8486 36.6015 50.8486H41.5737C42.2601 50.8486 42.8167 51.4051 42.8167 52.0916C42.8167 52.7781 42.2601 53.3347 41.5737 53.3347ZM46.5458 47.1195C46.5458 47.8059 45.9893 48.3625 45.3028 48.3625C44.6163 48.3625 44.0597 47.8059 44.0597 47.1195V44.6334C44.0597 43.9469 44.6163 43.3903 45.3028 43.3903C45.9893 43.3903 46.5458 43.9469 46.5458 44.6334V47.1195ZM22.9281 33.2322C24.375 32.7193 25.4142 31.337 25.4142 29.7169C25.4142 27.6609 23.741 25.9878 21.685 25.9878C19.629 25.9878 17.9559 27.6609 17.9559 29.7169C17.9559 31.337 18.9951 32.7193 20.442 33.2322C20.442 35.5194 20.442 37.2257 20.4412 38.5011L21.4232 38.2201C21.8178 37.3099 22.3233 36.4518 22.9281 35.6653V33.2322Z" fill="#004F8F" />
                <path d="M54.9156 18.4468H39.502C36.5318 18.4468 34.1154 20.8632 34.1154 23.8333V39.6613C34.1155 39.991 34.2465 40.3071 34.4796 40.5402C34.7127 40.7733 35.0289 40.9043 35.3586 40.9043C35.5485 40.9043 35.739 40.8608 35.9145 40.7731L40.6241 38.4183H54.9156C57.8858 38.4183 60.3021 36.0019 60.3021 33.0318V23.8333C60.3021 20.8632 57.8858 18.4468 54.9156 18.4468ZM54.0041 32.2031H40.4135C39.727 32.2031 39.1705 31.6465 39.1705 30.96C39.1705 30.2735 39.727 29.717 40.4135 29.717H54.0041C54.6906 29.717 55.2471 30.2735 55.2471 30.96C55.2471 31.6465 54.6906 32.2031 54.0041 32.2031ZM54.0041 27.2309H40.4135C39.727 27.2309 39.1705 26.6744 39.1705 25.9879C39.1705 25.3014 39.727 24.7448 40.4135 24.7448H54.0041C54.6906 24.7448 55.2471 25.3014 55.2471 25.9879C55.2471 26.6744 54.6906 27.2309 54.0041 27.2309Z" fill="#004F8F" />
            </svg>
        ),
        title: "Chatbot Assistance Borrowers",
        description: "AI-powered chatbot to guide users through the loan application process, answer common questions, and offer supp"
    }
];

const Form2 = () => {
    return (
        <div>
            <div className="bg-gray-100 py-2 text-center text-sm text-gray-600 ">
                
                SIGNUP OFFER: Get 10% OFF on interest on your first Loan.
                <Link href="/offer-details" className="underline text-blue-300 ml-1">See Offer Details</Link>
            </div>
            <div className="w-full bg-white">
                {/* First Layer - Gray Background with Letters */}
                <div className="py-8">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 ">
                            Use AI to make judgments that are
                        </h2>
                        <p className="text-blue-600 font-bold text-3xl max-w-2xl mx-auto ">
                            More Intelligent, Inclusive, & Effective
                        </p>
                    </div>
                </div>


                {/* Second Layer - White Background */}
                <div className="py-8">
                    {/* Cards Section */}
                    <div className="container mx-auto w-[70%] bg-gray-200 rounded-lg p-4">
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2">
                            {itemData.map((item, index) => (
                                <div key={index} className={`p-6 ${index > 0 ? 'border-l border-gray-400' : ''}`}>

                                    <div className="relative mb-4 p-2">
                                        {item.image}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 font-clash-display">{item.title}</h3>
                                    <p className="text-gray-600 font-clash-display">{item.description}</p>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="container mx-auto px-4 mt-16">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            {/* Left Side - Image */}
                            <div className="lg:w-1/2">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={drivenImage.src}
                                        alt="Feature Image"
                                        width={600}
                                        height={450}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="lg:w-1/2">
                                <h3 className="text-xl text-gray-300 mb-4 font-clash-display">
                                    Revolutionizing lending
                                </h3>
                                <h2 className="text-4xl font-bold mb-6 font-clash-display">
                                    AI-Driven Solutions for Real Estate
                                </h2>
                                <p className="text-gray-600 mb-8 font-clash-display">
                                    Our Real Estate Lending Platform is an innovative, AI-powered solution designed to streamline the process of connecting borrowers with lenders for real estate investment projects. This platform is built to simplify loan origination, underwriting, and matching processes using real-time data and advanced AI models. Whether the loan is for property purchase, renovation, construction, or refinancing, our platform assists borrowers, brokers, and lenders by making complex financial processes more accessible, transparent, and efficient.
                                    Through an intuitive interface, borrowers can submit detailed loan requests, upload necessary documents, and receive real-time feedback on their applications.
                                </p>
                                <Link
                                    href="/get-started"
                                    className="inline-block px-8 py-3 bg-blue-500 text-white rounded-2xl hover:bg-gray-800 transition-colors duration-200 font-clash-display"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form2;
