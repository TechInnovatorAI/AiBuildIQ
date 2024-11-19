import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogList = [
    {
        image: "",
        category: [],
        title: "",
        description: "",
    },
    {
        image: "",
        category: [],
        title: "",
        description: "",
    },
    {
        image: "",
        category: [],
        title: "",
        description: "",
    },
    {
        image: "",
        category: [],
        title: "",
        description: "",
    },
    {
        image: "",
        category: [],
        title: "",
        description: "",
    },
]

const Hero2 = () => {
    return (
        <div>
            {/* Navigation Buttons */}
            <div className="flex justify-center mb-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    All
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Category 1
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Category 2
                </button>
            </div>

            {/* Card Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {BlogList.map((blog, index) => (
                    <div className="bg-white rounded shadow-md p-4">
                        <Image src="/image2.jpg" alt="Image 2" width={300} height={200} />
                        <button className="text-gray-600">{blog.category}</button>
                        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                        <p className="text-gray-600">{blog.description}</p>
                        <Link href="/blog/post2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Read More
                        </Link>
                    </div>
                ))}
            </div>

            <div className="items-center bg-gray-300 py-4">
                <h1 className="text-[#004F8F] mx-auto text-4xl py-4 text-center w-1/3">Recently Uploaded <span className="text-black">Blogs and Articles</span></h1>
                <div className="flex gap-2 px-[20%] py-4">
                    {/* {BlogList.map((card, index) => (
                        <Card key={index} title="" image={card.image} subtitle={card.subtitle} description={card.description} result={card.result} detail={card.detail} />
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default Hero2;

