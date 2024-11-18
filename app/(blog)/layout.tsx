import React from 'react'

interface Props {
    children: React.ReactNode;
}

const BlogLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default BlogLayout
