"use client"
import React from 'react';
import { useState } from 'react'
import Blog from '@/components/custome-ui/blog-card'
import { CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const CategoryList = [
    "All Blogs & Articles", "Compilance", "Credit and Risk", "Culture", "Industry", "Technology", "AiBuildIQ"
]

const BlogList = [
    {
        id: 1,
        image: "/assets/how-it-works/1.jpg",
        category: [1, 3],
        title: "Learning from yesterday’s credit union movement for a better tomorrow",
        description: "Every year, we celebrate International Credit Union (ICU) Day on the third Thursday of October.",
        link: ""
    },
    {
        id: 2,
        image: "/assets/how-it-works/2.jpg",
        category: [1, 3],
        title: "Alternative data is just one consideration for a lender’s credit data strategy",
        description: "Many fintechs are promoting this add-on as a panacea for any trouble related to model.",
        link: ""
    },
    {
        id: 3,
        image: "/assets/how-it-works/3.jpg",
        category: [1, 3],
        title: "how serving our communities in 2024 inspires our innovation",
        description: "Our core values are Heart, Communication, Customer Centricity, Bias for Action, and Collaboration",
        link: ""
    },
    {
        id: 4,
        image: "/assets/how-it-works/2.jpg",
        category: [1, 3],
        title: "Alternative data is just one consideration for a lender’s credit data strategy",
        description: "Many fintechs are promoting this add-on as a panacea for any trouble related to model",
        link: ""
    },
    {
        id: 5,
        image: "/assets/how-it-works/2.jpg",
        category: [1, 3],
        title: "how serving our communities in 2024 inspires our innovation",
        description: "Our core values are Heart, Communication, Customer Centricity, Bias for Action, and Collaboration",
        link: ""
    },
    {
        id: 6,
        image: "/assets/how-it-works/3.jpg",
        category: [1, 3],
        title: "Learning from yesterday’s credit union movement for a better tomorrow",
        description: "Every year, we celebrate International Credit Union (ICU) Day on the third Thursday of October.",
        link: ""
    },
    {
        id: 7,
        image: "/assets/how-it-works/2.jpg",
        category: [1, 3],
        title: "how serving our communities in 2024 inspires our innovation",
        description: "Our core values are Heart, Communication, Customer Centricity, Bias for Action, and Collaboration",
        link: ""
    },
]

const recentBlog = [
    1, 3, 5
]

const Hero2 = () => {
    const [activeCategory, setActiveCategory] = useState("All Blogs & Articles")

    return (
        <div className="pt-16">
            {/* Navigation Buttons */}
            <div className="md:flex container md:w-[80%] items-center justify-center mb-8 border-t border-b  p-4 gap-4">
                <label className="uppercase font-bold">Topics: </label>
                {CategoryList.map((category, index) => (
                    <button key={'category'+index} onClick={() => setActiveCategory(category)} className={`${category === activeCategory ? 'bg-gray-100 text-[#004F8F] font-bold' : ''}  text-sm py-2 px-4 rounded-lg`}>
                        {category}
                    </button>
                ))}
            </div>

            {/* Card Boxes */}
            <div className="md:container md:w-[80%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4">
                    {BlogList.map((blog, index) => (
                        <div key={'blog' + index}>
                            <Blog
                                image={blog.image}
                                category={blog.category}
                                title={blog.title}
                                description={blog.description}
                                link={blog.link}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end py-4">
                    Page <button className="rounded-full bg-gray-200 px-4">1</button> of 100
                </div>
            </div>

            <div className="items-center bg-gray-100 py-4">
                <h1 className="text-[#004F8F] mx-auto text-4xl py-4 px-2 text-center md:w-1/3 font-bold">Recently Uploaded <span className="text-black">Blogs and Articles</span></h1>
                <div className="md:w-[90%] gap-4 md:container ">
                    <div className="mx-auto">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-[100%]"
                        >
                            <CarouselContent>
                                {recentBlog.map((recent, index) => (
                                    BlogList.find(blog => blog.id === recent) && (
                                        <CarouselItem key={'recent' + index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                                            <div className="py-16 px-8">
                                                <CardContent className="flex my-8 items-center justify-center p-2">
                                                    <Blog
                                                        image={BlogList.find(blog => blog.id === recent)?.image || ''}
                                                        category={BlogList.find(blog => blog.id === recent)?.category || []}
                                                        title={BlogList.find(blog => blog.id === recent)?.title || ''}
                                                        description={BlogList.find(blog => blog.id === recent)?.description || ''}
                                                        link={BlogList.find(blog => blog.id === recent)?.link || ''}
                                                    />
                                                </CardContent>
                                            </div>
                                        </CarouselItem>
                                    )
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="text-[#004F8F] md:w-[50px] md:h-[50px]" />
                            <CarouselNext className="text-[#004F8F] md:w-[50px] md:h-[50px]" />
                        </Carousel>
                    </div>
                    <div className='flex justify-center pb-4'>
                        <svg width="104" height="15" viewBox="0 0 104 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.58747" cy="7.75934" r="6.96442" fill="#004F8F" />
                            <circle cx="37.1968" cy="7.75934" r="6.96442" fill="white" />
                            <circle cx="66.8023" cy="7.75934" r="6.96442" fill="white" />
                            <circle cx="96.4117" cy="7.75934" r="6.96442" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;

