"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Lending Analytics"
                title="Enhanced visibility and flexibility with Lending Analytics"
                description="Refine your lending strategy with actionable insights and reliable accuracy"
                button="Request a Proof of Concept"
                isShow={true}
            />
        </div>
    );
};

export default Hero;
