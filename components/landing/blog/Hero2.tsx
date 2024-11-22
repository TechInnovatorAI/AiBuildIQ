"use client"
import React from 'react';
import {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Blog from '@/components/custome-ui/blog-card'

const CategoryList = [
    "All Blogs & Articles", "Compilance", "Credit and Risk", "Culture", "Industry", "Technology", "AiBuildIQ"
]

const BlogList = [
    {
        id: 1,
        image: "/assets/how-it-works/1.jpg",
        category: [1,3],
        title: "Learning from yesterday’s credit union movement for a better tomorrow",
        description: "Every year, we celebrate International Credit Union (ICU) Day on the third Thursday of October.",
        link: ""
    },
    {
        id: 2,
        image: "/assets/how-it-works/1.jpg",
        category: [1,3],
        title: "Alternative data is just one consideration for a lender’s credit data strategy",
        description: "Many fintechs are promoting this add-on as a panacea for any trouble related to model.",
        link: ""
    },
    {
        id: 3,
        image: "/assets/how-it-works/1.jpg",
        category: [1,3],
        title: "how serving our communities in 2024 inspires our innovation",
        description: "Our core values are Heart, Communication, Customer Centricity, Bias for Action, and Collaboration",
        link: ""
    },
    {
        id: 4,
        image: "/assets/how-it-works/1.jpg",
        category: [1,3],
        title: "Alternative data is just one consideration for a lender’s credit data strategy",
        description: "Many fintechs are promoting this add-on as a panacea for any trouble related to model",
        link: ""
    },
    {
        id: 5,
        image: "/assets/how-it-works/1.jpg",
        category: [1,3],
        title: "how serving our communities in 2024 inspires our innovation",
        description: "Our core values are Heart, Communication, Customer Centricity, Bias for Action, and Collaboration",
        link: ""
    },
    {
        id: 6,
        image: "/assets/how-it-works/1.jpg",
        category: [1,3],
        title: "Learning from yesterday’s credit union movement for a better tomorrow",
        description: "Every year, we celebrate International Credit Union (ICU) Day on the third Thursday of October.",
        link: ""
    },
    {
        id: 7,
        image: "/assets/how-it-works/1.jpg",
        category: [1,3],
        title: "how serving our communities in 2024 inspires our innovation",
        description: "Our core values are Heart, Communication, Customer Centricity, Bias for Action, and Collaboration",
        link: ""
    },
]

const recentBlog = [
    1,3,5
]

const Hero2 = () => {
    const [activeCategory, setActiveCategory] = useState("All Blogs & Articles")

    return (
        <div className="pt-16">
            {/* Navigation Buttons */}
            <div className="flex container w-[80%] items-center justify-center mb-8 border-t border-b  p-4 gap-4">
                <label className="uppercase font-bold">Topic: </label>
                {CategoryList.map((category, index) => (
                    <button onClick={()=>setActiveCategory(category)} className={`${category === activeCategory ? 'bg-gray-300 text-[#004F8F] font-bold' : ''}  text-sm py-2 px-4 rounded`}>
                        {category}
                    </button>
                ))}
            </div>

            {/* Card Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4 container w-[80%]">
                {BlogList.map((blog, index) => (
                    <Blog
                        image={blog.image}
                        category={blog.category}
                        title={blog.title}
                        description={blog.description}
                        link={blog.link}
                    />
                ))}
            </div>

            <div className="items-center bg-gray-300 py-4">
                <h1 className="text-[#004F8F] mx-auto text-4xl py-4 text-center w-1/3">Recently Uploaded <span className="text-black">Blogs and Articles</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4">
                    <div></div>
                    {recentBlog.map((recent, index) => (
                        BlogList.find(blog => blog.id === recent) && (
                            <Blog
                                key={index}
                                image={BlogList.find(blog => blog.id === recent)?.image || ''}
                                category={BlogList.find(blog => blog.id === recent)?.category || []}
                                title={BlogList.find(blog => blog.id === recent)?.title || ''}
                                description={BlogList.find(blog => blog.id === recent)?.description || ''}
                                link={BlogList.find(blog => blog.id === recent)?.link || ''}
                            />
                        )
                    ))}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;

