"use client"

import Link from "next/link"
import React, { useEffect, useState }from "react"

const Success = () => {

  const [fundingRequestId, setFundingRequestId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
    const request_id = window.sessionStorage.getItem("fundingRequestId");
    setFundingRequestId(request_id);
    }
  }, []);
  
  const id = fundingRequestId

  const download_pdf = async () => {
    try {
      const endpoint = `http://localhost:8000/api/loan-request/download`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      })

      if (response.ok) {
        console.log(response)
        console.log('ok')
        // const responseData = await response.json();
        // const data_id=responseData.id
        // console.log(`/funding-request/success?${id}`)
        // window.location.href = `/funding-request/success?id=${data_id}`
        // Reset form or redirect to a success page
      } else {
        alert('Form submission failed. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className="pt-8 mt-32 container  mx-auto px-2 mb-1 py-8">
      <div className="bg-gray-100 rounded-lg p-4 px-8 mt-8 py-16">
        <div className="justify-center  flex">
          <svg width="94" height="95" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.492188" y="0.954102" width="93.5156" height="93.5156" rx="20" fill="white" />
            <path d="M47.2499 16.6611C30.2896 16.6611 16.541 30.5624 16.541 47.7112C16.541 64.86 30.2896 78.7614 47.2499 78.7614C64.2103 78.7614 77.9588 64.86 77.9588 47.7112C77.9588 30.5624 64.2103 16.6611 47.2499 16.6611Z" fill="url(#paint0_linear_995_2252)" />
            <path d="M43.0049 60.4349C42.2281 60.4349 41.473 60.1116 40.9311 59.549L31.0952 49.3043L31.0537 49.266C30.4919 48.7308 30.1704 48.0057 30.1469 47.2258C30.1234 46.4459 30.4034 45.7025 30.9327 45.1345C31.4854 44.5427 32.2315 44.2158 33.0371 44.2158C33.7759 44.2158 34.4804 44.4989 35.0187 45.0103C35.0802 45.0687 35.1416 45.1327 35.1976 45.1966L35.2355 45.2386L42.9778 53.3043L59.3673 35.8998C59.9201 35.3117 60.6643 34.9902 61.4645 34.9902C62.2088 34.9902 62.9169 35.2752 63.4552 35.7957C64.6113 36.9062 64.6564 38.7601 63.5582 39.929L45.0931 59.529C44.5548 60.1006 43.7997 60.4312 43.0193 60.4367H43.0031L43.0049 60.4349Z" fill="url(#paint1_linear_995_2252)" />
            <defs>
              <linearGradient id="paint0_linear_995_2252" x1="68.9647" y1="69.6673" x2="25.0552" y2="26.2404" gradientUnits="userSpaceOnUse">
                <stop stopColor="#13B601" />
                <stop offset="0.52" stopColor="#13B601" />
                <stop offset="1" stopColor="#CBF4B4" />
              </linearGradient>
              <linearGradient id="paint1_linear_995_2252" x1="54.5081" y1="50.0112" x2="40.2916" y2="35.9492" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CBF4B4" />
                <stop offset="0.57" stopColor="white" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold py-4">Your Request has been Submitted Successfully</p>
          <p className="flex flex-col lg:flex-row justify-center py-2">For any further queries, please contact
            {/* <span className="underline text-[#004F8F]"> info@aibuildiq.com</span> */}
          </p>
        </div>
        <div className="justify-center flex flex-col lg:flex-row gap-8 py-4">
          <button onClick={() => download_pdf()} className="rounded-full text-center bg-white text-[#004F8F] font-bold p-4">Download Your Answers in PDF</button>
          <Link href="/" className="rounded-full text-center bg-[#004F8F] text-white font-bold p-4">Go to Homepage</Link>
        </div>
      </div>
    </div>
  )
}

export default Success