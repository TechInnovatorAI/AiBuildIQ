import React from 'react'

interface Props {
    children: React.ReactNode;
}

const CreditLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default CreditLayout
