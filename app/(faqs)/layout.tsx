import React from 'react'

interface Props {
    children: React.ReactNode;
}

const FaqLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default FaqLayout
