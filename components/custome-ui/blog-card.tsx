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
        <div className="bg-white rounded shadow-lg p-8 relative pb-32 shadow-top rounded-lg">
            <Image src={image} alt="Image 2" width={300} height={200} style={{ width: '80vw', height: '30vh' }} className="my-2 rounded-lg w-full" />
            {category.map((cate, index) => (
                <button key={'button'+index} className="text-gray-600 text-sm bg-gray-100 rounded-lg px-2 py-1 mr-2 mt-2">{CategoryList[cate]}</button>
            ))}
            <h2 className="text-md font-bold mb-2">{title}</h2>
            <p className="text-gray-600 text-md">{description}</p>
            <Link href={link} className="absolute left-8 bottom-8 bg-[#004F8F] text-white py-2 px-4 rounded-full">
                Read More
            </Link>
        </div>
    );
};

export default BlogCard;

