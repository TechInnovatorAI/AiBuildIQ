"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Technologies"
                title="Empowering Lenders with Advanced Tech"
                description="AIBuildIQ combines AI algorithms, real-time data processing, and actionable insights to empower lenders with faster, more accurate decisions."
                button=""
                isShow={false}
            />
        </div>
    );
};

export default Hero;
