import React from 'react'

interface Props {
    children: React.ReactNode;
}

const FundingRequestLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default FundingRequestLayout
