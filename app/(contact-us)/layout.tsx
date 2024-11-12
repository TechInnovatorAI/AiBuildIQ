import React from 'react'

interface Props {
    children: React.ReactNode;
}

const ContactLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default ContactLayout
