"use client"
import Image from "next/image";
import step3 from "@/public/assets/how-it-works/3.jpg"
import step4 from "@/public/assets/how-it-works/4.jpg"

const Hero3 = () => {
  return (
    <section>

      {/* Third Column */}
      <div>
        <div className="container md:flex items-center mb-16 gap-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl text-[#004F8F] font-bold mb-2">Step 3:</h3>
            <h3 className="text-2xl text-black font-bold mb-2">Instant Loan Matches</h3>
            <p className="text-gray-600 text-sm">
              After analyzing the borrower’s information, AIBuildIQ instantly generates a curated list of loan options from our network of trusted lenders. These matches are specifically tailored to the borrower’s financial profile and loan preferences, ensuring they r...
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 p-8 relative">
            <Image
              src={step3.src}
              alt="Analysis illustration"
              width={500}
              height={300}
              style={{ height: '30vh', width: '100vw' }}
              className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer  border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
            />
            <div className="absolute left-[15%] top-1/4 -z-10 rounded-lg border-2 border-gray-300" style={{ height: '26vh', width: '83%' }}></div>
          </div>
        </div>
      </div>

      {/* Fourth Column */}
      <div className="bg-gray-200 py-4">
        <div className="container  md:flex items-center mb-8 gap-16">
          <div className="md:w-1/2 mb-8 md:mb-0 p-8 relative">
            <Image
              src={step4.src}
              alt="Analysis illustration"
              width={500}
              height={300}
              style={{ height: '30vh', width: '100vw' }}
              className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer  border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
            />
            <div className="absolute left-[15%] top-1/4 -z-10 rounded-lg border-2 border-white" style={{ height: '26vh', width: '83%' }}></div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-[#004F8F] text-2xl font-bold mb-2">Step 4:</h3>
            <h3 className="text-black text-2xl font-bold mb-2">Quick Approval and Funding</h3>
            <p className="text-gray-600 text-sm">
              Once a borrower selects their preferred loan option, AIBuildIQ streamlines the approval process by ensuring all necessary documentation is in place. Our partnerships with leading lenders allow for quick decision-making, so borrowers can receive approvals ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
