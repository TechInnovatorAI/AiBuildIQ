"use client"
import Image from "next/image"
import LeftImage from "@/public/assets/home/Logo_13.jpg"

interface ContactFormProps {
    title: string,
    description: string,
    btn: string
}

const ContactForm: React.FC<ContactFormProps> = ({
    title,
    description,
    btn
}) => {

    return (
        <>
            <div className="md:flex items-stretch">
                <div className="left md:w-1/2 md:h-[70vh]">
                    <div className="relative items-center py-16 justify-center h-full">
                        <Image src={LeftImage} alt="Logo" className="absolute inset-0 -z-10 w-full h-[70vh]" width={500} height={300} style={{ objectFit: 'cover' }} />
                        <div className="text-left max-w-4xl mx-auto px-4 py-14">
                            <h1 className="text-white px-[15%] lg:text-6xl sm:text-2xl md:text-4xl mb-6 uppercase ">
                                {title}
                            </h1>
                            <h2 className="text-gray-300 px-[15%] text-xl md:text-md ">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="right md:w-1/2 bg-[#004F8F] py-16 px-8 lg:px-16 md:h-[70vh]">
                    <div className="layer1 mb-4 px-4">
                        <h2 className="text-4xl font-bold mb-5 text-white uppercase">Submit the Form</h2>
                    </div>
                    <div className="layer2 mb-4 px-4">
                        <div className="md:flex justify-between">
                            <div className="md:w-1/2 md:mr-2">
                                <label className="block text-white py-2 ">First Name</label>
                                <input type="text" placeholder="Enter First Name" className="w-full p-2 px-4 mr-5 rounded-full border border-gray-400 bg-[#00458F]" />
                            </div>
                            <div className="md:w-1/2">
                                <label className="block text-white py-2  ">Last Name</label>
                                <input type="text" placeholder="Enter Last Name" className="w-full p-2 px-4  border rounded-full border-gray-400 bg-[#00458F]" />
                            </div>
                        </div>
                    </div>
                    <div className="layer3 mb-4 px-4">
                        <div className="md:flex justify-between">
                            <div className="md:w-1/2 md:mr-2">
                                <label className="block text-white py-2">Email</label>
                                <input type="text" placeholder="Enter Email" className="w-full p-2 px-4 rounded-full border border-gray-400 bg-[#00458F]" />
                            </div>
                            <div className="md:w-1/2">
                                <label className="block text-white py-2 ">Mobile Number</label>
                                <input type="text" placeholder="Enter Mobile Number" className="w-full p-2 px-4 rounded-full border border-gray-400 bg-[#00458F]" />
                            </div>
                        </div>
                    </div>
                    <div className="layer4 mb-4 px-4">
                        <label className="block text-white py-2 ">Message or Query</label>
                        <textarea placeholder="Type you Message or Query Here......." className="w-full p-2 px-4 rounded-2xl border border-gray-400 bg-[#00458F]" />
                    </div>
                    <div className="layer5 px-4">
                        <button className="bg-white text-[#004F8F] p-2 md:w-1/2 lg:w-1/3 rounded-full">{btn}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;

