"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Roadmap to Success"
                title="Your Roadmap to AI-Driven Lending Success"
                description="Committed long-term partnership for continuous improvement"
                button="Start your Journey to Success"
                isShow={true}
            />
        </div>
    );
};

export default Hero;
