import React from 'react';

const data = [
    { letters: 'Faster Loan Approvals' },
    { letters: 'Streamlined Workflow for Borrowers' },
    { letters: 'Data Transparency & Accessibility' },
    { letters: 'Scalability for High Volume Operations' },
    { letters: 'Reduced Risk for Lenders' },
    { letters: 'Boosting Engagement with Chatbot Support' }
];

const Form5 = () => {
    return (
        <div className="px-[10%] py-8 bg-gray-100">
            <div className="text-center items-center p-8 mx-auto">
                <h1 className="font-bold text-2xl p-2">Why Choose AIBuildIQ?</h1>
                <h2 className="p-2 w-[50%] mx-auto text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.map((item, index) => (
                    <div key={index} className="bg-white flex rounded-2xl items-center">
                        <div className="border-r w-1/4 text-2xl text-center  font-bold text-gray-300 justify-center">{index + 1}</div>
                        <div className="items-center w-3/4 text-2xl font-bold p-3 ">{item.letters}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Form5;
