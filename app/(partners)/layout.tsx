import React from 'react'

interface Props {
    children: React.ReactNode;
}

const PartnerLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default PartnerLayout
