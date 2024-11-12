"use client"
import Image from "next/image";
import step3 from "@/public/assets/how-it-works/3.jpg"
import step4 from "@/public/assets/how-it-works/4.jpg"

const Hero3 = () => {
  return (
    <section className="container mx-auto px-4  sm:px-6 lg:px-8">

      {/* Second Column */}
      <div className="px-[15%] flex flex-col md:flex-row items-center mb-16 gap-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
            src={step3.src}
            alt="Analysis illustration"
            width={500}
            height={300}
            style={{ height: '30vh', width: '100vw' }}
            className="rounded transition-opacity duration-300 hover:opacity-80 cursor-pointer"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl text-[#004F8F] font-bold mb-2">Step 3:</h3>
          <h3 className="text-2xl text-black font-bold mb-2">Instant Loan Matches</h3>
          <p className="text-gray-600 text-sm">
          After analyzing the borrower’s information, AIBuildIQ instantly generates a curated list of loan options from our network of trusted lenders. These matches are specifically tailored to the borrower’s financial profile and loan preferences, ensuring they r...
          </p>
        </div>
      </div>

      {/* Third Column */}
      <div className="px-[15%] flex flex-col md:flex-row items-center mb-16 gap-16">
        <div className="md:w-1/2">
          <h3 className="text-[#004F8F] text-2xl font-bold mb-2">Step 4:</h3>
          <h3 className="text-black text-2xl font-bold mb-2">Quick Approval and Funding</h3>
          <p className="text-gray-600 text-sm">
          Once a borrower selects their preferred loan option, AIBuildIQ streamlines the approval process by ensuring all necessary documentation is in place. Our partnerships with leading lenders allow for quick decision-making, so borrowers can receive approvals ...
          </p>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={step4.src}
            alt="Analysis illustration"
            width={500}
            height={300}
            style={{ height: '30vh', width: '100vw' }}
            className="rounded transition-opacity duration-300 hover:opacity-80 cursor-pointer"
          />
        </div>        
      </div>
    </section>
  );
};

export default Hero3;
