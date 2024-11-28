import React from 'react';
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
    image: string,
    category: number[],
    title: string,
    description: string,
    link: string
}

const CategoryList = [
    "Compilance", "Credit and Risk", "Culture", "Industry", "Technology", "AiBuildIQ"
]

const BlogCard: React.FC<BlogCardProps> = ({
    image,
    category,
    title,
    description,
    link
}) => {
    return (
        <div className="bg-white rounded shadow-md p-8 relative pb-16 ">
            <Image src={image} alt="Image 2" width={300} height={200} className="my-2 rounded-lg w-full"/>
            {category.map((cate, index) => (
                <button className="text-gray-600 text-md bg-gray-300 rounded-full p-2 mr-2">{CategoryList[cate]}</button>
            ))}
            <h2 className="text-md font-bold mb-2">{title}</h2>
            <p className="text-gray-600 text-md">{description}</p>
            <Link href={link} className="absolute left-8 bottom-2 bg-[#004F8F] text-white font-bold py-2 px-4 rounded-full">
                Read More
            </Link>
        </div>
    );
};

export default BlogCard;

